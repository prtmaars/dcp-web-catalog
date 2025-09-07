"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { objects, Objects, DownloadLink } from "./objects";
import { translations, LangType } from "@/i18n/translations";
import { useParams } from "next/navigation";

export default function ObjectsPage() {
  const params = useParams();
  const lang = (params.lang as LangType) || "id";
  const t = translations[lang].objects;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof objects[0] | null>(null);
  const [page, setPage] = useState(0);

  const [downloadLinks, setDownloadLinks] = useState<DownloadLink[] | null>(null);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const imagesPerPage = 1;

  const handleDetail = (item: typeof objects[0]) => {
    setSelected(item);
    setPage(0);
    setOpen(true);
  };

  const handleBuy = (item: Objects) => {
    if (item.extraUrls && item.extraUrls.length > 0) {
      setDownloadLinks([
        { label: t.buyButton, url: item.url },
        ...item.extraUrls
      ]);
      setDownloadOpen(true);
    } else {
      window.open(item.url, "_blank");
    }
  };

  const paginatedImages = selected?.gallery?.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Judul halaman */}
      <h1 className="text-4xl font-bold mb-6 text-center">{t.pageTitle}</h1>

      {/* Grid card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {objects.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-63 object-cover rounded-md mb-3"
              />
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
              <button
                className="bg-[#42c249] text-white px-4 py-2 rounded-lg hover:bg-[#359b3a]"
                onClick={() => handleBuy(item)}
              >
                {t.buyButton}
              </button>
            </div>
          </div>
        ))}
      </div>

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
                    <button
                      className="bg-[#42c249] text-white px-4 py-2 rounded hover:bg-[#359b3a]"
                      onClick={() => selected && handleBuy(selected)}
                    >
                      {t.buyButton}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Modal Download */}
      <Transition.Root show={downloadOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setDownloadOpen}>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full">
              <Dialog.Title className="text-lg font-bold mb-4">
                {t.chooseDownload}
              </Dialog.Title>
              <div className="flex flex-col gap-2">
              {downloadLinks?.map((link, idx) => (
                <button
                  key={idx}
                  className="bg-[#42c249] text-white px-4 py-2 rounded hover:bg-[#359b3a]"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.label}
                </button>
              ))}
              </div>
              <button
                className="mt-4 bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                onClick={() => setDownloadOpen(false)}
              >
                {t.closeButton}
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>

    </div>
  );
}
