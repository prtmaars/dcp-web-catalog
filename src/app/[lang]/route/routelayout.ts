export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface PriceOption {
  platform: string; // misalnya: "Android", "PC", "iOS"
  value: string;    // misalnya: "IDR 20.000"
}

export interface RouteLayout {
  id: number;
  title: string;
  prices: PriceOption[]; // 👈 ganti dari string jadi array
  img: string;
  gallery: string[];
  fullDesc: MultiLangText;
  reviews?: string[];
}

export const routelayout: RouteLayout[] = [
  {
    id: 1,
    title: "Cianjuran",
    prices: [
      { platform: "TSA", value: "IDR 80.000" },
      { platform: "TSPC", value: "IDR 100.000" },
    ],
    img: "/route/cj01.jpg",
    gallery: [
      "/route/cj01.jpg",
      "/route/cj02.jpg",
      "/route/cj03.jpg",
      "/route/cj04.jpg",
      "/route/cj05.jpg",
      "/route/cj06.jpg",
      "/route/cj07.jpg",
      "/route/cj08.jpg",
      "/route/cj09.jpg",
      "/route/cj10.jpg",
      "/route/cj11.jpg",
    ],
    fullDesc: {
      id: `Rute Lintas Cianjuran merupakan rute yang membentang sepanjang 67km dari Stasiun Sukabumi hingga Stasiun Cipatat. Rute ini memperlihatkan lanskap alam yang memukau sepanjang perjalanan, menampilkan pemandangan sawah hijau yang luas, perbukitan dan panorama khas alam Jawa Barat. Pembuatan rute ini juga di-support dengan objek basemap yang tentunya lika liku rute ini sudah hampir menyerupai aslinya dan rute ini juga dilengkapi dengan objek stasiun sudah menggunakan tekstur real skin dan juga full rtt yang membuat rute ini semakin mirip dengan aslinya.`,
      en: `The Cianjuran Cross-Cianjuran route stretches 67 km from Sukabumi Station to Cipatat Station. This route showcases stunning natural landscapes along the way, showcasing expansive green rice fields, hills, and the typical West Javanese panorama. This route was also created using a basemap, which accurately depicts the twists and turns of the route. The station objects are also equipped with real-skin textures and full RTT, making this route even more realistic.`,
      ko: `시안주란 크로스-시안주란 루트는 스카부미 역에서 치파탓 역까지 67km에 걸쳐 펼쳐집니다. 이 루트는 광활한 푸른 논, 언덕, 그리고 전형적인 서자바의 파노라마 풍경을 포함하여, 루트를 따라 펼쳐지는 아름다운 자연 경관을 자랑합니다. 또한, 이 루트는 루트의 굴곡을 정확하게 묘사한 베이스맵을 사용하여 제작되었습니다. 또한, 역 객체에는 실제 피부 질감과 완벽한 RTT(실제 경로)가 적용되어 루트를 더욱 사실적으로 표현합니다.`,
    },
    reviews: [
      "https://youtu.be/t73eZHv6t3M?si=V_cQkzha72szIEuy",
      "https://youtu.be/FFNtMxG3nqg?si=ttjDuG9aiXvp77uL",
    ]
  },
];
