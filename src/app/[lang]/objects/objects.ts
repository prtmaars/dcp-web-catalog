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
    url: "https://linkvertise.com/719193/aR7SP6085379071?o=sharing",
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
    url: "https://linkvertise.com/719193/aWBYm6085379211?o=sharing",
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
    url: "https://linkvertise.com/719193/aMFGf6168966711?o=sharing",
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
    url: "https://linkvertise.com/719193/aA6mQ6324178157?o=sharing",
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
    url: "https://linkvertise.com/719193/ap4iV6120380887?o=sharing",
    extraUrls: [
          { label: "Daop 1", url: "https://linkvertise.com/719193/apUzZ6120381463?o=sharing"},
          { label: "Daop 2", url: "https://linkvertise.com/719193/aAEjm6120381369?o=sharing"},
          { label: "Daop 3", url: "https://linkvertise.com/719193/aopqP6120381209?o=sharing"},
          { label: "Daop 4", url: "https://linkvertise.com/719193/a1ls96120381113?o=sharing"},
          { label: "Daop 5", url: "https://linkvertise.com/719193/a2QAp6120380975?o=sharing"},
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
  
];
