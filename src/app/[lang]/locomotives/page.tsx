"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Locomotivess as locomotives, Locomotives } from "./locomotives";
import { translations, LangType } from "@/i18n/translations";
import { useParams } from "next/navigation";

export default function LocomotivesPage() {
  const params = useParams();
  const lang = (params.lang as LangType) || "id";
  const t = translations[lang].locomotives;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Locomotives | null>(null);
  const [page, setPage] = useState(0);

  const imagesPerPage = 1;

  const subcategories: { key: string; label: string }[] = [
    { key: "Frankenstein Edition", label: t.edFrankenstein },
    { key: "Vintage Edition", label: t.edVintage },
    { key: "White and Blue Edition", label: t.edWnb },
    { key: "Red and Blue Edition", label: t.edRnb },
    { key: "Albino Edition", label: t.edAlbino },
    { key: "Standard Edition", label: t.edStandard },
  ];


  const grouped = locomotives.reduce((acc: Record<string, Locomotives[]>, item) => {
    if (!acc[item.subcat]) acc[item.subcat] = [];
    acc[item.subcat].push(item);
    return acc;
  }, {});

  const handleDetail = (item: Locomotives) => {
    setSelected(item);
    setPage(0);
    setOpen(true);
  };

  const handleBuy = (item: Locomotives) => {
    const msg = encodeURIComponent(`${t.buyMessage} ${item.title}.`);
    window.open(`https://wa.me/62859106997891?text=${msg}`, "_blank");
  };

  const paginatedImages = selected?.gallery?.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">{t.pageTitle}</h1>

      <div>
          {subcategories.map((sub) => (
            <div key={sub.key} className="mb-10">
              <h2 className="text-2xl font-bold mb-4">{sub.label}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locomotives
                  .filter((item: Locomotives) => item.subcat === sub.key)
                  .map((item: Locomotives) => (
                    <div key={item.id} className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center relative">
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
            </div>
          ))}
        </div>

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

                  {selected?.gallery?.length ? (
                    <div className="mb-4">
                      <div className="grid grid-cols-1 gap-2">
                        {paginatedImages?.map((img: string, idx: number) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${selected.title} - image ${page * imagesPerPage + idx + 1}`}
                            className="w-full h-70 object-cover rounded-md"
                          />
                        ))}
                      </div>

                      <div className="flex justify-between mt-2">
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

                  <p className="text-gray-600 font-semibold mb-3">{selected?.price}</p>

                  <p className="text-gray-700 mb-4 whitespace-pre-line text-left">
                    {selected?.fullDesc[lang as keyof typeof selected.fullDesc]}
                  </p>

                  <div className="flex justify-end gap-2">
                    <button
                      className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      {t.closeButton}
                    </button>
                    <button
                      className="bg-[#42c249] text-white px-3 py-1 rounded hover:bg-[#359b3a]"
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
    </div>
  );
}
