"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { rollingStocks } from "./rollingstocks";
import { translations, LangType } from "@/i18n/translations";
import { useParams } from "next/navigation";

export default function RollingStocksPage() {
  const params = useParams();
  const lang = (params.lang as LangType) || "id";
  const t = translations[lang].rollingstocks;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof rollingStocks[0] | null>(null);
  const [page, setPage] = useState(0);

  const imagesPerPage = 1;

  const subcategories: { key: string; label: string }[] = [
    { key: "Kereta Tak Berpenggerak", label: t.edTraincars },
    { key: "Kereta Rel Diesel", label: t.edDMU },
  ];

  const grouped = rollingStocks.reduce((acc: Record<string, typeof rollingStocks>, item) => {
    if (!acc[item.subcat]) acc[item.subcat] = [];
    acc[item.subcat].push(item);
    return acc;
  }, {});

  const handleDetail = (item: typeof rollingStocks[0]) => {
    setSelected(item);
    setPage(0);
    setOpen(true);
  };

  const handleBuy = (item: typeof rollingStocks[0]) => {
    const msg = encodeURIComponent(`${t.buyMessage} ${item.title}.`);
    window.open(`https://wa.me/62859106997891?text=${msg}`, "_blank");
  };

  const paginatedImages = selected?.gallery?.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage
  );

  const getDirectDownloadLink = (url: string) => {
  const match = url.match(/\/file\/d\/(.*?)\//);
  return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : url;
  };


  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Judul halaman */}
      <h1 className="text-4xl font-bold mb-6 text-center">{t.pageTitle}</h1>

      {/* Section per subcategory */}
      {subcategories.map((sub) => (
        <div
          key={sub.key}
          id={sub.key.replace(/\s+/g, "-").toLowerCase()}
          className="mb-10 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold mb-4">{sub.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(grouped[sub.key] || []).map((item, i) => (
              <div
                key={i}
                className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center relative"
              >
                {item.bestseller && (
                  <span className="absolute bottom-24 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Best Seller
                  </span>
                )}

                {item.img && (
                  <div className="relative w-full mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-65 object-cover rounded-md"
                    />
                    {item.version && (
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item.version[lang as keyof typeof item.version]}
                      </span>
                    )}
                  </div>
                )}

                <h2 className="text-lg font-semibold text-center">{item.title}</h2>
                <p className="text-gray-600 text-center mb-3">{item.price}</p>

                <div className="flex gap-2">
                  <button
                    className="bg-[#0589ee] text-white px-4 py-2 rounded-lg hover:bg-[#046ebe]"
                    onClick={() => handleDetail(item)}
                  >
                    {t.detailButton}
                  </button>

                {!item.hideDownload && item.downloadLink && (
                  <button
                    className="bg-[#42c249] text-white px-4 py-2 rounded-lg hover:bg-[#359b3a]"
                    onClick={() => {
                      const url = getDirectDownloadLink(item.downloadLink!);
                      window.open(url, "_blank");
                    }}
                  >
                    {t.downloadButton}
                  </button>
                )}

                  {!item.hideBuy && (
                    <button
                      className="bg-[#42c249] text-white px-4 py-2 rounded-lg hover:bg-[#359b3a]"
                      onClick={() => handleBuy(item)}
                    >
                      {t.buyButton}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal Detail */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
                  <Dialog.Title className="text-xl font-bold mb-4">
                    {selected?.title}
                  </Dialog.Title>

                  {/* Gallery */}
                  {selected?.gallery?.length ? (
                    <div className="mb-4">
                      <div className="grid grid-cols-1 gap-2">
                        {paginatedImages?.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${selected.title} - image ${page * imagesPerPage + idx + 1}`}
                            className="w-full h-70 object-cover rounded-md"
                          />
                        ))}
                      </div>

                      <div className="flex justify-between mt-2">
                        {/* Previous Button */}
                        <button
                          className="px-2 py-1 bg-gray-300 rounded"
                          onClick={() =>
                            setPage((prev) =>
                              prev === 0
                                ? Math.ceil((selected?.gallery?.length || 0) / imagesPerPage) - 1
                                : prev - 1
                            )
                          }
                        >
                          &lt;
                        </button>

                        {/* Next Button */}
                        <button
                          className="px-2 py-1 bg-gray-300 rounded"
                          onClick={() =>
                            setPage((prev) =>
                              (prev + 1) * imagesPerPage >= (selected?.gallery?.length || 0)
                                ? 0
                                : prev + 1
                            )
                          }
                        >
                          &gt;
                        </button>
                      </div>
                    </div>
                  ) : null}

                  {/* Price */}
                  <p className="text-gray-600 font-semibold mb-3">{selected?.price}</p>

                  {/* Content */}
                  <p className="text-gray-700 mb-4 whitespace-pre-line text-left">
                    {selected?.content[lang]}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 whitespace-pre-line text-left">
                    {selected?.fullDesc[lang]}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-end gap-2">
                  <button
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    {t.closeButton}
                  </button>

                  {/* Download Button */}
                  {!selected?.hideDownload && selected?.downloadLink && (
                    <button
                      className="bg-[#42c249] text-white px-3 py-1 rounded hover:bg-[#359b3a]"
                      onClick={() => {
                        if (!selected?.downloadLink) return;
                        const url = getDirectDownloadLink(selected.downloadLink);
                        window.open(url, "_blank");
                      }}
                    >
                      {t.downloadButton}
                    </button>
                  )}

                  {!selected?.hideBuy && (
                    <button
                      className="bg-[#42c249] text-white px-3 py-1 rounded hover:bg-[#359b3a]"
                      onClick={() => selected && handleBuy(selected)}
                    >
                      {t.buyButton}
                    </button>
                  )}
                </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
