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

  const sections = [
    { key: "standalone-v2", label: t.standaloneV2 },
    { key: "standalone-v1", label: t.standaloneV1 },
    { key: "all-in-one", label: t.allInOne },
  ];

  const filterBySection = (sectionKey: string) => {
    switch (sectionKey) {
      case "standalone-v2":
        return locomotives.filter(
          l => l.type === "standalone" && l.version === "V.2"
        );
      case "standalone-v1":
        return locomotives.filter(
          l => l.type === "standalone" && l.version === "V.1"
        );
      case "all-in-one":
        return locomotives.filter(l => l.type === "all-in-one");
      default:
        return [];
    }
  };

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
      <h1 className="text-4xl font-bold mb-6 text-center">
        {t.pageTitle}
      </h1>

      {sections.map(section => {
        const sectionItems = filterBySection(section.key);
        if (sectionItems.length === 0) return null;

        return (
          <div key={section.key} className="mb-16">
            {/* SECTION HEADER */}
            <h2 className="text-3xl font-bold mb-6">
              {section.label}
            </h2>

            {/* ITEMS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sectionItems.map((item: Locomotives) => (
                <div
                  key={item.id}
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

                      {/* TAG SKEMA */}
                      {item.edition && (
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {item.edition.replace(" Edition", "")}
                        </span>
                      )}

                      {/* TAG VERSION */}
                      {item.status && (
                        <span
                          className={`absolute bottom-2 right-2 text-white text-xs px-2 py-1 rounded font-semibold
                            ${
                              item.status === "final"
                                ? "bg-black/70"
                                : "bg-red-500/70"
                            }
                          `}
                        >
                          {item.status === "final"
                            ? "Final Version"
                            : "Discontinued"}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-center">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-center mb-3">
                    {item.price}
                  </p>

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
        );
      })}

      {/* MODAL DETAIL */}
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
                      {paginatedImages?.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${selected.title} ${idx}`}
                          className="w-full h-70 object-cover rounded-md mb-2"
                        />
                      ))}

                      <div className="flex justify-between mt-2">
                        <button
                          className="px-2 py-1 bg-gray-300 rounded"
                          onClick={() =>
                            setPage(prev =>
                              prev === 0
                                ? Math.ceil(
                                    (selected.gallery.length || 0) /
                                      imagesPerPage
                                  ) - 1
                                : prev - 1
                            )
                          }
                        >
                          &lt;
                        </button>

                        <button
                          className="px-2 py-1 bg-gray-300 rounded"
                          onClick={() =>
                            setPage(prev =>
                              (prev + 1) * imagesPerPage >=
                              selected.gallery.length
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

                  <p className="text-gray-600 font-semibold mb-3">
                    {selected?.price}
                  </p>

                  <p className="text-gray-700 mb-4 whitespace-pre-line text-left">
                    {selected?.fullDesc[lang]}
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
