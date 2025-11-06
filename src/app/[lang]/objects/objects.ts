export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface DownloadLink {
  label: string;
  url: string;
}

export interface Objects {
  id: number;
  title: string;
  price: string;
  img: string;
  url: string;
  extraUrls?: DownloadLink[];
  gallery: string[];
  fullDesc: MultiLangText;
}

export const objects: Objects[] = [
  {
    id: 1,
    title:"Semboyan Pack",
    price: "IDR 0",
    img: "/objects/semboyan05.jpg",
    url: "https://drive.google.com/file/d/1kYVbbUmB1SzeNCEmrH7unCD9du5mH7D3/view?usp=sharing",
    gallery: [
      "/objects/semboyan01.jpg",
      "/objects/semboyan02.jpg",
      "/objects/semboyan03.jpg",
      "/objects/semboyan04.jpg",
      "/objects/semboyan05.jpg",
      "/objects/semboyan06.jpg",
      "/objects/semboyan07.jpg",
      "/objects/semboyan08.jpg",
      "/objects/semboyan09.jpg",
      "/objects/semboyan10.jpg",
      "/objects/semboyan11.jpg",
    ],
    fullDesc: {
      id: `Isi Pack:
            1. Semboyan 2 5kph
            2. Semboyan 2 10kph
            3. Semboyan 2 20kph
            4. Semboyan 2 30kph
            5. Semboyan 2 40kph
            6. Semboyan 2 50kph
            7. Semboyan 2 60kph
            8. Semboyan 2 70kph
            9. Semboyan 2 80kph
            10. Semboyan 2 90kph
            11. Semboyan 2 100kph
            12. Semboyan 2 105kph
            13. Semboyan 2 110kph
            14. Semboyan 2 115kph
            15. Semboyan 2 120kph
            *termasuk versi biasa dan versi invisible

            16. Semboyan 2A
            17. Semboyan 2A1
            18. Semboyan 2B
            19. Semboyan 2B1

            20. Semboyan 2H Tetap
            21. Semboyan 2H (750m) Tetap
            22. Semboyan 2H (1000m) Tetap
            23. Semboyan 2H1 Tetap
            24. Semboyan 2H Sementara
            25. Semboyan 2H (750m) Sementara
            26. Semboyan 2H (1000m) Sementara

            27. Semboyan 8 v1
            28. Semboyan 8 v2

            29. Semboyan 3

            30. Semboyan 8C
            31. Semboyan 8D
            32. Semboyan 8E Kanan
            33. Semboyan 8E Kiri
            34. Semboyan 8F
            35. Semboyan 8G
            36. Semboyan 8K Kanan
            37. Semboyan 8K Kiri
            38. Semboyan 8L
            39. Semboyan 8R

            40. Semboyan 10F
            41. Semboyan 10G Kanan
            42. Semboyan 10G Kiri

            43. Semboyan 10J Datar-Naik
            44. Semboyan 10J Datar-Turun
            45. Semboyan 10J Naik-Datar
            46. Semboyan 10J Naik-Naik
            47. Semboyan 10J Naik-Turun
            48. Semboyan 10J Turun-Datar
            49. Semboyan 10J Turun-Naik
            50. Semboyan 10J Turun-Turun

            51. Semboyan 10K v1
            ​52. Semboyan 10K v2
            ​53. Semboyan 10L

            54. Semboyan 18

            Addons ini bersifat Freeware.
            Silakan gunakan di rute gratis, ataupun terbatas.
            Untuk penggunaan pada rute berbayar, silakan hubungi kami.

            Dilarang membagi ulang, meng-upload ulang, ataupun hal lainnya yang bersifat menyebarkan konten ini.
            
            Password: DCPTrainzContent
            `,
      en: `english currently unavailable`,
      ko: `한국어는 현재 사용할 수 없습니다`,
    },
  },
  {
    id: 2,
    title:"Sleko Jembatan",
    price: "IDR 0",
    img: "/objects/sleko.jpg",
    url: "https://drive.google.com/file/d/1GHPtxqNnsOoZOEfXHKBNHzPiGR0HeyJN/view?usp=sharing",
    gallery: [
      "/objects/sleko.jpg",
    ],
    fullDesc: {
      id: `Addons ini bersifat Freeware.
            Silakan gunakan di rute gratis, ataupun terbatas.
            Untuk penggunaan pada rute berbayar, silakan hubungi kami.

            Dilarang membagi ulang, meng-upload ulang, ataupun hal lainnya yang bersifat menyebarkan konten ini.
            
            Password: DCPTrainzContent
            `,
      en: `english currently unavailable`,
      ko: `한국어는 현재 사용할 수 없습니다`,
    },
  },
  {
    id: 3,
    title:"Sinyal Mekanik Pack",
    price: "IDR 0",
    img: "/objects/mekanik.jpg",
    url: "https://drive.google.com/file/d/1QHH4R4BaxOLqTPnZEFSipgNLSbKDdRLv/view?usp=sharing",
    gallery: [
      "/objects/mekanik.jpg",
    ],
    fullDesc: {
      id: `Isi Pack:
            1. Sinyal Mekanik Muka R
            2. Sinyal Mekanik Muka L
            3. Sinyal Mekanik Masuk R
            4. Sinyal Mekanik Masuk L
            5. Sinyal Mekanik Keluar R
            6. Sinyal Mekanik Keluar L
            7. Indikator Mekanik Sepur Lurus
            8. Indikator Mekanik Sepur Belok

            Simpan "[DCP] - Indikator Mekanik Sepur Lurus" di sepur lurus stasiun agar lengan atas sinyal masuk mengangkat, dan "[DCP] - Indikator Mekanik Sepur Belok" di sepur belok stasiun agar lengan bawah sinyal masuk mengangkat.

            Addons ini bersifat Freeware.
            Silakan gunakan di rute gratis, ataupun terbatas.
            Untuk penggunaan pada rute berbayar, silakan hubungi kami.

            Dilarang membagi ulang, meng-upload ulang, ataupun hal lainnya yang bersifat menyebarkan konten ini.
            
            Password: DCPProduction2019
            `,
      en: `english currently unavailable`,
      ko: `한국어는 현재 사용할 수 없습니다`,
    },
  },
  {
    id: 4,
    title:"Sinyal Elektrik Pack",
    price: "IDR 0",
    img: "/objects/elektrik.jpg",
    url: "https://drive.google.com/file/d/1OCDVd8CiVNWlYCGffcKObukPFGaPt5Ys/view?usp=sharing",
    gallery: [
      "/objects/elektrik.jpg",
    ],
    fullDesc: {
      id: `Addons ini bersifat Freeware.
            Silakan gunakan di rute gratis, ataupun terbatas.
            Untuk penggunaan pada rute berbayar, silakan hubungi kami.

            Dilarang membagi ulang, meng-upload ulang, ataupun hal lainnya yang bersifat menyebarkan konten ini.
            
            Password: DCProduction-2019
            `,
      en: `english currently unavailable`,
      ko: `한국어는 현재 사용할 수 없습니다`,
    },
  },
  {
    id: 5,
    title:"Bel Stasiun",
    price: "IDR 0",
    img: "/objects/belstasiun.jpg",
    url: "https://drive.google.com/file/d/1lGQ6Op7F9wONaO9l63q9G3HMByT8HedF/view?usp=sharing",
    extraUrls: [
          { label: "Daop 1", url: "https://drive.google.com/file/d/1LoSmxtJOGoRC56RkrtwSLQOT6dGJIwtt/view?usp=sharing"},
          { label: "Daop 2", url: "https://drive.google.com/file/d/1BK8rtSvt788LzZsUDHSftYODpF5U5bxl/view?usp=sharing"},
          { label: "Daop 3", url: "https://drive.google.com/file/d/1T0253k0bK-_mgOxFlp1TdooszYPHjpUO/view?usp=sharing"},
          { label: "Daop 4", url: "https://drive.google.com/file/d/1x8CNBh8KEuEXrSY1ot7yfckkFWJmAUJP/view?usp=sharing"},
          { label: "Daop 5", url: "https://drive.google.com/file/d/1_LVqdA_ofOTduqJvVLnTIybuf5JzZRQF/view?usp=sharing"},
    ],
    gallery: [
      "/objects/belstasiun.jpg",
    ],
    fullDesc: {
      id: `Isi Pack:
            Bel Stasiun - Unduhan Default:
            1. Westminster Chimes V.1
            2. Westminster Chimes V.2

            Bel Stasiun - Daop 1:
            1. Kicir - Kicir

            Bel Stasiun - Daop 2:
            1. Sabilulungan

            Bel Stasiun - Daop 3:
            1. Warung Pojok

            Bel Stasiun - Daop 4:
            1. Ande - Ande Lumut
            2. Caping Gunung
            3. Gambang Semarang

            Bel Stasiun - Daop 5:
            1. Di Tepinya Sungai Serayu

            Addons ini berbentuk kubus yang mengeluarkan suara secara terus menerus (tidak bisa dihentikan).
            Kind : Scenery

            Addons ini bersifat Freeware.
            Silakan gunakan di rute gratis, ataupun terbatas.
            Untuk penggunaan pada rute berbayar, silakan hubungi kami.

            Dilarang membagi ulang, meng-upload ulang, ataupun hal lainnya yang bersifat menyebarkan konten ini.
            
            Password: DCP2019
            `,
      en: `english currently unavailable`,
      ko: `한국어는 현재 사용할 수 없습니다`,
    },
  },
  {
    id: 6,
    title:"Rel R-54 1067 mm",
    price: "IDR 0",
    img: "/objects/rel.jpg",
    url: "https://drive.google.com/file/d/1fzrRg3kyApPgGO3H1QIj5lz1uHogH3K6/view?usp=sharing",
    extraUrls: [
          { label: "Rel R-54 V.1 (Polos)", url: "https://drive.google.com/file/d/16mbJK8Cgksb5o7Sb0yBQNIkwslgZeVIZ/view?usp=sharing"},
          { label: "Rel R-54 V.2 (E-Clip)", url: "https://drive.google.com/file/d/1dKsP2C0vNcwWX-vBMLDcBujjj9xlWIPx/view?usp=sharing"},
          { label: "Rel R-54 V.3 (DE-Clip)", url: "https://drive.google.com/file/d/1w8sgQdyPu0FlZ12jxyavxgSBwQBSpOIl/view?usp=sharing"},
    ],
    gallery: [
      "/objects/rel.jpg",
    ],
    fullDesc: {
      id: `Versi Android: Klik Tombol Unduhan Default (Tombol Unduh paling atas).

            Versi PC:
            1. Rel R-54 V.1 (Polos) dengan LOD.
            2. Rel R-54 V.2 (E-Clip) dengan LOD.
            3. Rel R-54 V.3 (DE-Clip) dengan LOD.

            Addons ini bersifat Freeware.
            Silakan gunakan di rute gratis, ataupun terbatas.
            Untuk penggunaan pada rute berbayar, silakan hubungi kami.

            Dilarang membagi ulang, meng-upload ulang, ataupun hal lainnya yang bersifat menyebarkan konten ini.
            
            Password: DCPR5420202025
            `,
      en: `english currently unavailable`,
      ko: `한국어는 현재 사용할 수 없습니다`,
    },
  },
  
];
