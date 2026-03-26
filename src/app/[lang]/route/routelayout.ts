export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface PriceOption {
  platform: string;
  value: string;
}

export interface RouteLayout {
  id: number;
  title: string;
  prices: PriceOption[];
  img: string;
  gallery: string[];
  fullDesc: MultiLangText;
  reviews?: string[];
}

export const routelayout: RouteLayout[] = [
  {
    id: 1,
    title: "Cipatat - Sukabumi",
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
      id: `Rute Lintas Cianjuran merupakan rute yang membentang sepanjang 67 km dari Stasiun Sukabumi hingga Stasiun Cipatat. Rute ini memperlihatkan lanskap alam yang memukau sepanjang perjalanan, menampilkan pemandangan sawah hijau yang luas, perbukitan dan panorama khas alam Jawa Barat. Pembuatan rute ini juga di-support dengan objek basemap yang tentunya lika-liku rute ini sudah hampir menyerupai aslinya dan rute ini juga dilengkapi dengan objek stasiun yang sudah menggunakan tekstur real skin serta full RTT, membuat rute ini semakin mirip dengan aslinya.`,
      en: `The Cianjuran route stretches 67 km from Sukabumi Station to Cipatat Station. This route showcases stunning natural landscapes along the way, including expansive green rice fields, hills, and the typical West Javanese panorama. The route was also created using a basemap, accurately depicting the twists and turns of the line. Station objects are equipped with real-skin textures and full RTT, making this route even more realistic.`,
      ko: `시안주란 루트는 스카부미 역에서 치파탓 역까지 67km에 걸쳐 이어집니다. 이 루트는 광활한 푸른 논, 언덕, 그리고 전형적인 서자바의 파노라마 풍경을 포함하여 아름다운 자연 경관을 보여줍니다. 또한 이 루트는 굴곡을 정확하게 묘사한 베이스맵을 사용하여 제작되었으며, 역 객체에는 실제 피부 질감과 완벽한 RTT가 적용되어 더욱 사실적으로 표현됩니다.`,
    },
    reviews: [
      "https://youtu.be/t73eZHv6t3M?si=V_cQkzha72szIEuy",
      "https://youtu.be/FFNtMxG3nqg?si=ttjDuG9aiXvp77uL",
    ],
  },
  {
    id: 2,
    title: "Purwakarta - Cibatu",
    prices: [
      { platform: "TSPC", value: "IDR 129.999" },
    ],
    img: "/route/pwkcb13.jpeg",
    gallery: [
      "/route/pwkcb01.jpeg",
      "/route/pwkcb02.jpeg",
      "/route/pwkcb03.jpeg",
      "/route/pwkcb04.jpeg",
      "/route/pwkcb05.jpeg",
      "/route/pwkcb06.jpeg",
      "/route/pwkcb07.jpeg",
      "/route/pwkcb08.jpeg",
      "/route/pwkcb09.jpeg",
      "/route/pwkcb10.jpeg",
      "/route/pwkcb11.jpeg",
      "/route/pwkcb12.jpeg",
      "/route/pwkcb13.jpeg",
      "/route/pwkcb14.jpeg",
      "/route/pwkcb15.jpeg",
      "/route/pwkcb16.jpeg",
      "/route/pwkcb17.jpeg",
    ],
    fullDesc: {
      id: `New Daop 2 Purwakarta - Bandung - Cibatu untuk TRS2019 dan TRS2022

            Dilengkapi:
            - Dinas KA Serayu 283
            - Dinas KA Serayu 284
            - Dinas Lokal Cibatu 349

            Review rute:
            - Memiliki 30 Stasiun 
            - Map Khas Daop 2 Bandung
            - Memiliki Objek stasiun Real
            - Kontur tanah naik turun 
            - Support TRS19 dan TRS22`,
      en: `New Operational Area 2 Purwakarta - Bandung - Cibatu for TRS2019 dan TRS2022

            Equipped with:
            - Serayu 283 Train Service
            - Serayu 284 Train Service
            - Cibatu 349 Local Service

            Route Review:
            - 30 Stations
            - Unique Bandung Operational Area 2 Map
            - Real-time Station Objects
            - Up and down land contours
            - Supports TRS19 and TRS22`,
      ko: `TRS2019 및 TRS2022용 신규 운행 구역 2 푸르와카르타 - 반둥 - 시바투

            지원 열차:
            - 세라유 283번 열차
            - 세라유 284번 열차
            - 시바투 349번 완행 열차

            노선 특징:
            - 30개 역
            - 반둥 운행 구역 2 전용 지도
            - 실시간 역 정보
            - 고도 및 경사도 표시
            - TRS19 및 TRS22 지원`,
    },
  },
];
