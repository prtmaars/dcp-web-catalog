import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";

export default async function TutorialPage({ params }: { params: { lang: "en" | "id" | "ko" } }) {
  // pastikan await digunakan
  const dict = await getDictionary(params.lang);
  if (!dict) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Ambil pageTitle dari dictionary */}
      <h1 className="text-4xl font-bold mb-4 text-center">
          {dict.tutorial.pageTitle}
      </h1>

      {/* Bagian 1: Streamlit App */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">{dict.tutorial.getTokenizer}</h2>
        <p className="text-gray-700 mb-2">{dict.tutorial.getTokenizerDesc}</p>
        <div className="flex justify-center">
          <a
              href="https://dcp-tokenizer.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#0589ee] text-white rounded-md hover:bg-[#046ebe]"
            >
              {dict.tutorial.openWeb}
          </a>
        </div>
      </section>
      
      <hr className="my-6" />

      {/* Bagian 2: PDF Tutorial */}
      <section>
        {/* Panduan Aktivasi */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-1">{dict.tutorial.getTutor1}</h2>
          <p className="text-gray-700 mb-2">{dict.tutorial.getDesc}</p>
          <iframe
            src="https://drive.google.com/file/d/106blmFfry-XyzvkTXqCxRcJjK1BjOHf5/preview"
            className="w-full h-[500px] border rounded-md"
          />
        </div>

        {/* Panduan Addons */}
        <div>
          <h2 className="text-xl font-semibold mb-1">{dict.tutorial.getTutor2}</h2>
          <p className="text-gray-700 mb-2">{dict.tutorial.getDesc}</p>
          <iframe
            src="https://drive.google.com/file/d/1mHusarmhXK1PcdhLjkQvY_aElXfT-Ht5/preview"
            className="w-full h-[500px] border rounded-md"
          />
        </div>
      </section>

      <hr className="my-6" />

      {/* Bagian 3: Video YouTube */}
      <section>
        <h2 className="text-xl font-semibold mb-1">{dict.tutorial.getTutor3}</h2>
        <p className="text-gray-700 mb-2">{dict.tutorial.getDesc}</p>
        <div className="aspect-video w-full rounded-md overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/u-EhgX0l9EU"
            title="YouTube video tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
