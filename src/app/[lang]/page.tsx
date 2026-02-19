import RecommendationSection from "@/components/recommendcard";
import { Recommendation } from "./recommendation";
import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import Link from "next/link";
import WhatsNewSection from "./whatsnewsection";

export default async function HomePage({ params }: { params: { lang: "en" | "id" | "ko" } }) {
  const dict = await getDictionary(params.lang);

  if (!dict) return notFound();

  const lang = params.lang;

  function handleDetail(item: Recommendation) {
  console.log("Detail:", item);
  }

  function handleBuy(item: Recommendation) {
    console.log("Buy:", item);
  }


  const galleryImages = Array.from({ length: 60 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/gallery/galeri${num}.jpg`;
  });

  const games = [
    {
      title: "Trainz Railroad Simulator 2022",
      img: "/trs22.jpg",
      link: "https://store.steampowered.com/app/1784570/Trainz_Railroad_Simulator_2022/",
    },
    {
      title: "Trainz Railroad Simulator 2019",
      img: "/trs19.jpg",
      link: "https://store.steampowered.com/app/553520/Trainz_Railroad_Simulator_2019/",
    },
    {
      title: "Trainz: A New Era",
      img: "/tane.jpg",
      link: "https://store.steampowered.com/app/315660/Trainz_A_New_Era/",
    },
    {
      title: "Trainz Simulator 2012",
      img: "/ts12.jpg",
      link: "https://store.steampowered.com/app/24670/Trainz_Simulator_12/",
    },
    {
      title: "Trainz Simulator 2009",
      img: "/ts09.jpg",
      link: "http://ts2009.trainzportal.com/free/",
    },
    {
      title: "Trainz Simulator Android",
      img: "/tsa.png",
      link: "https://drive.google.com/file/u/1/d/0B400oql_9moXTU1pZFZ0SlR6d28/view?usp=drivesdk",
    },
  ];
  
  return (
    <>
      {/* Hero Banner */}
      <Hero
        title="DCP Trainz Production"
        subtitle={dict.home.welcome}
      />

      {/* What's New */}
      <WhatsNewSection lang={params.lang} />

      {/* Recommendations Section */}
      <RecommendationSection />

      {/* Gallery */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mt-12 mb-4">{dict.home.gallery}</h2>
        <Gallery images={galleryImages} perPage={6} />
      </div>

      {/* Games Section */}
      <div className="max-w-5xl mx-auto px-6 py-0">
        <h1 className="text-2xl font-bold mt-10 mb-4">{dict.home.gameTitle}</h1>
        <p className="text-gray-700 mb-8">{dict.home.gameDesc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <div
              key={i}
              className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={game.img}
                alt={game.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold text-center">{game.title}</h2>
              <Link
                href={game.link}
                target="_blank"
                className="mt-3 inline-block bg-[#0589ee] text-white px-4 py-2 rounded-lg hover:bg-[#046ebe]"
              >
                {dict.home.gameButton}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
