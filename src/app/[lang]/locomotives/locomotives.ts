export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface Locomotives {
  id: number;
  title: string;
  price: string;
  subcat: string;
  img: string;
  gallery: string[];
  fullDesc: MultiLangText;
}

export const fullDescStandard = {
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
      en: `Locomotive Description:
          1. High Detail Exterior
          2. High Detail Cabin Interior
          3. High Detail Bogie
          4. High Detail Coupler
          5. The lever in the cabin can move like a real one (the lever moves automatically, cannot be moved using the mouse)
          6. The speedometer in the cabin is illuminated with an accuracy of 0.1 km/h
          7. The effect of shaking when the locomotive is moving
          8. Engine on/off (BETA)
          9. Cabin lights on/off
          10. Fog lights on/off
          11. The signal lights on/off
          12. Animation of signal 26 and 27 noon
          13. Wiper animation
          14. Door animation (option to open and close as desired)
          15. Window animation (option to open and close as desired)
          16. Install and remove the chain
          17. Install and remove the ABAR hose (brake air hose)
          18. Install and remove the stopblock (train wheel chock)
          19. Install and remove the signal 21
          20. Install and remove the "Parking Brake Engaged" sign
          21. Install and remove the "Stop Block Engaged" sign
          22. Daytime signal usage option (automatic/manual)
          23. Signal light usage option (automatic/manual)
          24. Signals 20, 21, 22, 23, 24, 25, 26, 27, and 45 are available.
          25. Engine sound is provided by IVRD.
          26. Horn sound is provided by IVRD.

          27. A bug is installed on the cabin window, preventing the corona from being visible on the signal, etc. To be able to see the corona signal, please remove the cabin window using a script.

          Additional Information:
          1. Bogie belongs to DCP
          2. Engine Sound belongs to IVRD
          3. Horn Sound belongs to IVRD
          `,
      ko: `기관차 설명:
          1. 고품격 외관
          2. 고품격 객실 내부
          3. 고품격 보기
          4. 고품격 커플러
          5. 객실 내 레버는 실제 레버처럼 움직입니다(레버는 자동으로 움직이며 마우스로 움직일 수 없습니다).
          6. 객실 내 속도계는 0.1km/h의 정확도로 점등됩니다.
          7. 기관차 주행 시 진동 효과
          8. 엔진 켜기/끄기(베타)
          9. 객실 조명 켜기/끄기
          10. 안개등 켜기/끄기
          11. 방향 지시등 켜기/끄기
          12. 정오 26시와 27시 방향 지시등 애니메이션
          13. 와이퍼 애니메이션
          14. 문 애니메이션(원하는 대로 열고 닫을 수 있는 옵션)
          15. 창문 애니메이션(원하는 대로 열고 닫을 수 있는 옵션)
          16. 체인 설치 및 제거
          17. ABAR 호스(브레이크 공기 호스) 설치 및 제거
          18. 설치 및 제거 정지 블록(기차 바퀴 초크)
          19. 신호기 설치 및 제거 21
          20. "주차 브레이크 작동" 표지판 설치 및 제거
          21. "정지 블록 작동" 표지판 설치 및 제거
          22. 주간 신호기 사용 옵션(자동/수동)
          23. 신호등 사용 옵션(자동/수동)
          24. 신호기 20, 21, 22, 23, 24, 25, 26, 27, 45를 사용할 수 있습니다.
          25. 엔진음은 IVRD에서 제공합니다.
          26. 경적음은 IVRD에서 제공합니다.

          27. 객실 창문에 도청 장치가 설치되어 있어 코로나가 신호기 등에 보이지 않습니다. 코로나 신호를 보려면 스크립트를 사용하여 객실 창문을 제거하십시오.

          추가 정보:
          1. 보기(Bogie)는 DCP 소유입니다.
          2. 엔진 사운드(Engine Sound)는 IVRD 소유입니다.
          3. 경적 사운드(Horn Sound)는 IVRD 소유입니다.
`,
    };

export const Locomotivess: Locomotives[] = [
  {
    id: 1,
    title: "BB 203 78 01",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2037801.png",
    gallery: [
      "/locomotives/2037801.png"
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 2,
    title: "CC 201 04 02",
    price: "IDR 70.000",
    subcat: "Red and Blue Edition",
    img: "/locomotives/2010402.jpg",
    gallery: [
      "/locomotives/2010402.jpg",
      "/locomotives/rnbkotakinterior.png",
      "/locomotives/20104022010403.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 3,
    title: "CC 201 04 03R",
    price: "IDR 70.000",
    subcat: "Red and Blue Edition",
    img: "/locomotives/2010403.jpg",
    gallery: [
      "/locomotives/2010403.jpg",
      "/locomotives/rnbkotakinterior.png",
      "/locomotives/20104022010403.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 4,
    title: "CC 201 83 51",
    price: "IDR 70.000",
    subcat: "Red and Blue Edition",
    img: "/locomotives/2018351.jpg",
    gallery: [
      "/locomotives/2018351.jpg",
      "/locomotives/rnbkotakinterior.png",
      "/locomotives/20183512018355.png",
      "/locomotives/20183512018355-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 5,
    title: "CC 201 83 55",
    price: "IDR 70.000",
    subcat: "Red and Blue Edition",
    img: "/locomotives/2018355.jpg",
    gallery: [
      "/locomotives/2018355.jpg",
      "/locomotives/rnbkotakinterior.png",
      "/locomotives/20183512018355.png",
      "/locomotives/20183512018355-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 6,
    title: "CC 201 83 07",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2018307.jpg",
    gallery: [
      "/locomotives/2018307.jpg",
      "/locomotives/2018307-2.jpg",
      "/locomotives/2018307-3.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 7,
    title: "CC 201 77 17",
    price: "IDR 70.000",
    subcat: "Vintage Edition",
    img: "/locomotives/2017717.png",
    gallery: [
      "/locomotives/2017717.png",
      "/locomotives/vintageinterior.jpg",
      "/locomotives/20177172018331.png",
      "/locomotives/20177172018331-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 8,
    title: "CC 201 83 31",
    price: "IDR 70.000",
    subcat: "Vintage Edition",
    img: "/locomotives/2018331.png",
    gallery: [
      "/locomotives/2018331.png",
      "/locomotives/2018331-2.jpg",
      "/locomotives/vintageinterior.jpg",
      "/locomotives/20177172018331.png",
      "/locomotives/20177172018331-2.png",
      "/locomotives/201833120183342019201.jpg",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 9,
    title: "CC 201 83 34",
    price: "IDR 70.000",
    subcat: "Vintage Edition",
    img: "/locomotives/2018334.png",
    gallery: [
      "/locomotives/2018334.png",
      "/locomotives/2018334-2.jpg",
      "/locomotives/vintageinterior.jpg",
      "/locomotives/201833120183342019201.jpg",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 10,
    title: "CC 201 92 06",
    price: "IDR 70.000",
    subcat: "Albino Edition",
    img: "/locomotives/2019206.png",
    gallery: [
      "/locomotives/2019206.png",
      "/locomotives/2019206-2.png",
      "/locomotives/2019206-3.png",
      "/locomotives/2019206-4.png",
      "/locomotives/2019206-5.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 11,
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
    fullDesc: fullDescStandard,
  },
  {
    id: 12,
    title: "CC 201 92 12",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2019212.png",
    gallery: [
      "/locomotives/2019212.png",
      "/locomotives/201batch3.png",
      "/locomotives/201batch3-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 13,
    title: "CC 201 92 15",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2019215.png",
    gallery: [
      "/locomotives/2019215.png",
      "/locomotives/201batch3.png",
      "/locomotives/201batch3-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 14,
    title: "CC 201 92 20",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2019220.png",
    gallery: [
      "/locomotives/2019220.png",
      "/locomotives/201batch3.png",
      "/locomotives/201batch3-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 15,
    title: "CC 201 83 48",
    price: "IDR 70.000",
    subcat: "Red and Blue Edition",
    img: "/locomotives/2018348.png",
    gallery: [
      "/locomotives/2018348.png",
      "/locomotives/2018348-2.png",
      "/locomotives/2018348-3.png",
      "/locomotives/2018348-4.png",
      "/locomotives/parade.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 16,
    title: "CC 203 95 01",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2039501.png",
    gallery: [
      "/locomotives/2039501.png",
      "/locomotives/2039501-2.png",
      "/locomotives/203950120301072039818.png",
      "/locomotives/203950120301072039818-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 17,
    title: "CC 203 98 18",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2039818.png",
    gallery: [
      "/locomotives/2039818.png",
      "/locomotives/2039818-2.png",
      "/locomotives/203950120301072039818.png",
      "/locomotives/203950120301072039818-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 18,
    title: "CC 203 01 07",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2030107.png",
    gallery: [
      "/locomotives/2030107.png",
      "/locomotives/2030107-2.png",
      "/locomotives/203950120301072039818.png",
      "/locomotives/203950120301072039818-2.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 19,
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
    fullDesc: fullDescStandard,
  },
  {
    id: 20,
    title: "CC 204 03 01",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2040301.png",
    gallery: [
      "/locomotives/2040301.png",
      "/locomotives/204batch1.png",
      "/locomotives/204batch1-2.png",
      "/locomotives/204batch1-3.png",
      "/locomotives/204batch1-4.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 21,
    title: "CC 204 03 03",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2040303.png",
    gallery: [
      "/locomotives/2040303.png",
      "/locomotives/204batch1.png",
      "/locomotives/204batch1-2.png",
      "/locomotives/204batch1-3.png",
      "/locomotives/204batch1-4.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 22,
    title: "CC 204 03 04",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2040304.png",
    gallery: [
      "/locomotives/2040304.png",
      "/locomotives/204batch1.png",
      "/locomotives/204batch1-2.png",
      "/locomotives/204batch1-3.png",
      "/locomotives/204batch1-4.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 23,
    title: "CC 204 03 06",
    price: "IDR 70.000",
    subcat: "Standard Edition",
    img: "/locomotives/2040306.png",
    gallery: [
      "/locomotives/2040306.png",
      "/locomotives/2040306-2.png",
      "/locomotives/2040306-3.png",
      "/locomotives/2040306-4.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 24,
    title: "CC 204 11 03",
    price: "IDR 70.000",
    subcat: "White and Blue Edition",
    img: "/locomotives/2041103.png",
    gallery: [
      "/locomotives/2041103.png",
      "/locomotives/2041103-2.png",
      "/locomotives/2041103-3.png",
      "/locomotives/204batch2.png",
      "/locomotives/204batch2-2.png",
      "/locomotives/204batch2-3.png",
      "/locomotives/2041103-4.png",
      "/locomotives/2041103-5.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 25,
    title: "CC 204 11 08",
    price: "IDR 70.000",
    subcat: "White and Blue Edition",
    img: "/locomotives/2041108.png",
    gallery: [
      "/locomotives/2041108.png",
      "/locomotives/2041108-2.png",
      "/locomotives/2041108-3.png",
      "/locomotives/204batch2.png",
      "/locomotives/204batch2-2.png",
      "/locomotives/204batch2-3.png",
      "/locomotives/2041108-4.png",
      "/locomotives/2041108-5.png",
    ],
    fullDesc: fullDescStandard,
  }
  
];
