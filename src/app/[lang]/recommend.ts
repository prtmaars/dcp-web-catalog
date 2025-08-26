export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface Recommend {
  id: number;
  title: string;
  price: string;
  subcat: string;
  img: string;
  gallery: string[];
  fullDesc: MultiLangText;
}

export const Recommend: Recommend[] = [
  {
    id: 1,
    title: "CC 201 92 01",
    price: "IDR 70.000",
    subcat: "Vintage Edition",
    img: "/locomotives/2019201.png",
    gallery: [
      "/locomotives/2019201.png",
      "/locomotives/2019201-2.jpg",
      "/locomotives/vintageinterior.jpg",
      "/locomotives/201833120183342019201.jpg",
      "/locomotives/parade.png",
    ],
    fullDesc: {
      id: `Keterangan Lokomotif:
          1. High Detail Eksterior
          2. High Detail Kabin Interior
          3. High Detail Bogie
          4. High Detail Coupler
          5. Tuas pada kabin bisa bergerak seperti aslinya (tuas bergerak secara otomatis, tidak bisa digerakkan menggunakan mouse)
          6. Speedometer pada kabin menyala dengan ketelitian 0.1 km/h
          7. Efek guncangan saat loko berjalan
          8. Nyala mati mesin (BETA)
          9. Nyala mati lampu kabin
          10. Nyala mati lampu kabut
          11. Nyala mati lampu semboyan
          12. Animasi semboyan 26 dan 27 siang
          13. Animasi wiper
          14. Animasi Pintu (pilihan buka tutup sesuai keinginan)
          15. Animasi Jendela (pilihan buka tutup sesuai keinginan)
          16. Pasang lepas rantai
          17. Pasang lepas selang ABAR (selang angin untuk rem)
          18. Pasang lepas stopblok (ganjalan roda kereta)
          19. Pasang lepas semboyan 21 siang
          20. Pasang lepas papan "Rem Parkir Terikat"
          21. Pasang lepas papan "Stopblok Terpasang"
          22. Pilihan penggunaan semboyan siang (otomatis/manual)
          23. Pilihan penggunaan lampu semboyan (otomatis/manual)
          24. Tersedia pilihan semboyan 20,21,22,23,24,25,26,27 dan 45 yang bisa digunakan
          25. Engine sound menggunakan milik IVRD
          26. Horn sound menggunakan milik IVRD

          27. Bug pada kaca kabin, sehingga tidak dapat melihat corona pada sinyal, dsb. Agar bisa melihat corona sinyal, silahkan hilangkan kaca kabin menggunakan script.

          Keterangan Pelengkap:
          1. Bogie milik DCP
          2. Engine Sound milik IVRD
          3. Horn Sound milik IVRD
          `,
      en: `New Image Pack\nPrice: 20K\n...`,
      ko: `새 이미지 팩\n가격: 20K\n...`,
    },
  },
  {
    id: 2,
    title: "CC 203 02 03",
    price: "IDR 70.000",
    subcat: "White and Blue Edition",
    img: "/locomotives/2030203.png",
    gallery: [
      "/locomotives/2030203.png",
      "/locomotives/2030203-2.png",
      "/locomotives/2030203-3.png",
      "/locomotives/2030203-4.png",
      "/locomotives/parade.png",
    ],
    fullDesc: {
      id: `Keterangan Lokomotif:
          1. High Detail Eksterior
          2. High Detail Kabin Interior
          3. High Detail Bogie
          4. High Detail Coupler
          5. Tuas pada kabin bisa bergerak seperti aslinya (tuas bergerak secara otomatis, tidak bisa digerakkan menggunakan mouse)
          6. Speedometer pada kabin menyala dengan ketelitian 0.1 km/h
          7. Efek guncangan saat loko berjalan
          8. Nyala mati mesin (BETA)
          9. Nyala mati lampu kabin
          10. Nyala mati lampu kabut
          11. Nyala mati lampu semboyan
          12. Animasi semboyan 26 dan 27 siang
          13. Animasi wiper
          14. Animasi Pintu (pilihan buka tutup sesuai keinginan)
          15. Animasi Jendela (pilihan buka tutup sesuai keinginan)
          16. Pasang lepas rantai
          17. Pasang lepas selang ABAR (selang angin untuk rem)
          18. Pasang lepas stopblok (ganjalan roda kereta)
          19. Pasang lepas semboyan 21 siang
          20. Pasang lepas papan "Rem Parkir Terikat"
          21. Pasang lepas papan "Stopblok Terpasang"
          22. Pilihan penggunaan semboyan siang (otomatis/manual)
          23. Pilihan penggunaan lampu semboyan (otomatis/manual)
          24. Tersedia pilihan semboyan 20,21,22,23,24,25,26,27 dan 45 yang bisa digunakan
          25. Engine sound menggunakan milik IVRD
          26. Horn sound menggunakan milik IVRD

          27. Bug pada kaca kabin, sehingga tidak dapat melihat corona pada sinyal, dsb. Agar bisa melihat corona sinyal, silahkan hilangkan kaca kabin menggunakan script.

          Keterangan Pelengkap:
          1. Bogie milik DCP
          2. Engine Sound milik IVRD
          3. Horn Sound milik IVRD
          `,
      en: `New Image Pack\nPrice: 20K\n...`,
      ko: `새 이미지 팩\n가격: 20K\n...`,
    },
  },
  
];
