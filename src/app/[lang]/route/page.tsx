"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { routelayout } from "./routelayout";
import { translations, LangType } from "@/i18n/translations";
import { useParams } from "next/navigation";

export default function routelayoutPage() {
  const params = useParams();
  const lang = (params.lang as LangType) || "id"; // default ID
  const t = translations[lang].routelayout;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof routelayout[0] | null>(null);
  const [page, setPage] = useState(0);

  const imagesPerPage = 1;

  const handleDetail = (item: typeof routelayout[0]) => {
    setSelected(item);
    setPage(0);
    setOpen(true);
  };

  const handleBuy = (item: typeof routelayout[0]) => {
    const msg = encodeURIComponent(`${t.buyMessage} ${item.title}.`);
    window.open(`https://wa.me/6281225478563?text=${msg}`, "_blank");
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
        {routelayout.map((item, i) => (
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

            {/* Title */}
            <h2 className="text-lg font-semibold text-center mb-1">
              {item.title}
            </h2>

            {/* Prices */}
            <div className="text-gray-600 text-center mb-3">
              {item.prices.map((p, i) => (
                <p key={i}>
                  {p.platform}: {p.value}
                </p>
              ))}
            </div>

            {/* Buttons */}
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
                            alt={`${selected.title} - image ${
                              page * imagesPerPage + idx + 1
                            }`}
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
                                ? Math.ceil(
                                    (selected?.gallery?.length || 0) /
                                      imagesPerPage
                                  ) - 1
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
                              (prev + 1) * imagesPerPage >=
                              (selected?.gallery?.length || 0)
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

                  {/* Prices */}
                  <div className="text-gray-600 font-semibold mb-3">
                    {selected?.prices.map((p, i) => (
                      <p key={i}>
                        {p.platform}: {p.value}
                      </p>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 whitespace-pre-line text-left">
                    {selected?.fullDesc[lang]}
                  </p>

                  {/* Review Buttons */}
                  {selected?.reviews?.length ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selected.reviews.map((link, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0589ee] text-white px-3 py-1 rounded hover:bg-[#046ebe]"
                        >
                          {t.reviewButton} {i + 1}
                        </a>
                      ))}
                    </div>
                  ) : null}

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
    </div>
  );
}
