export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface RollingStock {
  title: string;
  price: string;
  version: MultiLangText;
  hideBuy: boolean;
  hideDownload: boolean;
  downloadLink?: string;  
  bestseller: boolean;
  subcat: string;
  img: string;
  gallery: string[];
  content: MultiLangText;
  fullDesc: MultiLangText;
}

export const fullDescStandard1 = {
      id: `Fitur:
            1. Rantai otomatis
            2. S21 Siang otomatis
            3. S21 Malam otomatis
            4. No Urut KA (terdapat 15 nomor urut KA yang bisa dipasang dan dilepas) - via surveyor
            5. Papan Nama KA (terdapat lebih dari 60 papan nama kereta berbeda yang bisa dipasang dan dilepas) - via surveyor
            6. Ganti Livery Kereta - via surveyor
            7. Nightmode / Mode Malam Otomatis
            8. Medium Poly
            9. Kereta pembangkit mengeluarkan asap dan bunyi suara genset
            10. HD Digital Skin
            11. HD Bogie (Mendapatkan 4 bogie : K5 NT-11, K5 TB-398, K8 NT-60, K10-TB1014)
            12. HD Coupler
            13. Berat kosong kereta sesuai dengan aslinya
            14. Terdapat 2 pilihan komoditi Invisible Penumpang (@50kg dan @75kg) yang berpengaruh terhadap berat kereta
            15. Efek guncangan pada saat kereta berjalan
            `,
      en: `Features:
            1. Automatic chain
            2. Automatic S21 Day
            3. Automatic S21 Night
            4. Train serial number (15 train serial numbers can be installed and removed) - via surveyor
            5. Train nameplate (more than 60 different train nameplates can be installed and removed) - via surveyor
            6. Change train livery - via surveyor
            7. Night mode / Automatic Night Mode
            8. Medium Poly
            9. Generator train emits smoke and makes generator sounds
            10. HD Digital Skin
            11. HD Bogie (Gets 4 bogies: K5 NT-11, K5 TB-398, K8 NT-60, K10-TB1014)
            12. HD Coupler
            13. Empty train weight matches the original
            14. There are two options for Invisible Passenger commodities (@50kg and @75kg) which affect the train weight
            15. The effect of shaking when the train is moving`,
      ko: `특징:
            1. 자동 체인
            2. 자동 S21 주간
            3. 자동 S21 야간
            4. 열차 일련 번호(15개 열차 일련 번호 장착 및 제거 가능) - Surveyor를 통해
            5. 열차 명판(60개 이상의 다양한 열차 명판 장착 및 제거 가능) - Surveyor를 통해
            6. 열차 도장 변경 - Surveyor를 통해
            7. 야간 모드 / 자동 야간 모드
            8. 중형 폴리
            9. 발전기 열차에서 연기 발생 및 발전기 소음 발생
            10. HD 디지털 스킨
            11. HD 보기(4개 보기: K5 NT-11, K5 TB-398, K8 NT-60, K10-TB1014)
            12. HD 커플러
            13. 빈 열차 무게가 실제 무게와 일치
            14. 열차 무게에 영향을 미치는 보이지 않는 승객 용품(50kg 및 75kg)에 대한 두 가지 옵션이 있습니다.
            15. 열차 주행 시 진동 효과`,
    };

export const fullDescStandard2 = {
      id: `Fitur:
            1. Rantai otomatis
            2. S21 Siang otomatis
            3. S21 Malam otomatis
            4. Ganti Logo Kereta - via surveyor
            5. Nightmode / Mode Malam Otomatis
            6. Medium Poly
            7. Kereta pembangkit mengeluarkan asap dan bunyi suara genset
            8. HD Digital Skin
            9. HD Bogie (Mendapatkan 4 bogie : K5 NT-11, K5 TB-398, K8 NT-60, K10-TB1014)
            10. HD Coupler
            11. Berat kosong kereta sesuai dengan aslinya
            12. Terdapat 2 pilihan komoditi Invisible Penumpang (@50kg dan @75kg) yang berpengaruh terhadap berat kereta
            13. Efek guncangan pada saat kereta berjalan`,
      en: `Features:
            1. Automatic chain
            2. Automatic S21 Day
            3. Automatic S21 Night
            4. Change train logo - via surveyor
            5. Night mode / Automatic Night Mode
            6. Medium Poly
            7. Generator train emits smoke and makes generator noises
            8. HD Digital Skin
            9. HD Bogie (Gets 4 bogies: K5 NT-11, K5 TB-398, K8 NT-60, K10-TB1014)
            10. HD Coupler
            11. Empty train weight matches actual weight
            12. There are two options for Invisible Passenger commodities (@50kg and @75kg) which affect the train's weight
            13. Effect of shaking during train movement`,
      ko: `특징:
            1. 자동 체인
            2. 자동 S21 주간
            3. 자동 S21 야간
            4. 측량기를 통해 열차 로고 변경
            5. 야간 모드 / 자동 야간 모드
            6. 중형 폴리
            7. 발전기 열차에서 연기가 발생하고 발전기 소음이 발생합니다.
            8. HD 디지털 스킨
            9. HD 보기(4개의 보기 장착: K5 NT-11, K5 TB-398, K8 NT-60, K10-TB1014)
            10. HD 커플러
            11. 빈 열차 중량이 실제 중량과 일치합니다.
            12. 열차 중량에 영향을 미치는 보이지 않는 승객 물품(50kg 및 75kg)에 대한 두 가지 옵션이 있습니다.
            13. 열차 운행 중 진동의 영향`,
    };

export const rollingStocks: RollingStock[] = [
  {
    title:"Kereta Wisata Pack",
    price: "IDR 20.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: true,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-kereta-wisata_orig.jpg",
    gallery: [
      "/rollingstocks/pack-kereta-wisata_orig.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. SI 0 67 01 - NUSANTARA
            2. SI 0 67 02 - BALI
            3. SI 0 67 03 - TORAJA
            4. K1 0 82 21 - SUMATERA
            5. K1 0 82 22 - JAWA
            6. K1 0 82 24 - RETRO
            7. K1 0 82 16 - IMPERIAL 1
            8. K1 0 82 20 - IMPERIAL 2
            9. K1 0 82 13 - IMPERIAL 3
            10. K1 0 82 18 - PRIORITY 1
            11. K1 0 82 17 - PRIORITY 2
            12. K1 0 82 12 - PRIORITY 3
            13. K1 0 81 09 - PRIORITY 4
            14. K1 0 78 08 - PRIORITY 5
            15. K1 0 80 06 - PRIORITY 6
            16. K1 0 82 23 - PRIORITY 7
            17. K1 0 95 04 - PRIORITY 8 
            18. K1 0 91 01 - PRIORITY 9 
            19. K1 0 91 02 - PRIORITY 10 
            20. K1 0 91 03 - PRIORITY 11 
            21. K1 0 01 XX - PANORAMIC
            22​. T1 0 08 XX - COMPARTMENT SUITES`,
      en: `Pack Contents:
            1. SI 0 67 01 - NUSANTARA
            2. SI 0 67 02 - BALI
            3. SI 0 67 03 - TORAJA
            4. K1 0 82 21 - SUMATERA
            5. K1 0 82 22 - JAVA
            6. K1 0 82 24 - RETRO
            7. K1 0 82 16 - IMPERIAL 1
            8. K1 0 82 20 - IMPERIAL 2
            9. K1 0 82 13 - IMPERIAL 3
            10. K1 0 82 18 - PRIORITY 1
            11. K1 0 82 17 - PRIORITY 2
            12. K1 0 82 12 - PRIORITY 3
            13. K1 0 81 09 - PRIORITY 4 
            14. K1 0 78 08 - PRIORITY 5 
            15. K1 0 80 06 - PRIORITY 6 
            16. K1 0 82 23 - PRIORITY 7 
            17. K1 0 95 04 - PRIORITY 8 
            18. K1 0 91 01 - PRIORITY 9 
            19. K1 0 91 02 - PRIORITY 10 
            20. K1 0 91 03 - PRIORITY 11 
            21. K1 0 01 XX - PANORAMIC 
            22​. T1 0 08 XX - COMPARTMENT SUITES`,
      ko: `팩 내용: 
            1. SI 0 67 01 - 누산타라 
            2. SI 0 67 02 - 발리 
            3. SI 0 67 03 - 토라자 
            4. K1 0 82 21 - 수마테라 
            5. K1 0 82 22 - 자바 
            6. K1 0 82 24 - 레트로 
            7. K1 0 82 16 - 임페리얼 1 
            8. K1 0 82 20 - 임페리얼 2 
            9. K1 0 82 13 - 임페리얼 3 
            10. K1 0 82 18 - 우선순위 1 
            11. K1 0 82 17 - 우선순위 2 
            12. K1 0 82 12 - 우선순위 3
            13. K1 0 81 09 - 우선권 4
            14. K1 0 78 08 - 우선권 5
            15. K1 0 80 06 - 우선권 6
            16. K1 0 82 23 - 우선권 7
            17. K1 0 95 04 - 우선권 8
            18. K1 0 91 01 - 우선권 9
            19. K1 0 91 02 - 우선권 10
            20. K1 0 91 03 - 우선권 11
            21. K1 0 01 XX - 파노라마
            22. T1 0 08 XX - 컴파트먼트 스위트`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Eksekutif Pack",
    price: "IDR 20.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-eksekutif_orig.jpg",
    gallery: [
      "/rollingstocks/eksekutif01.jpeg",
      "/rollingstocks/eksekutif02.jpeg",
      "/rollingstocks/eksekutif03.jpeg",
      "/rollingstocks/eksekutif04.jpeg",
      "/rollingstocks/eksekutif05.jpeg",
      "/rollingstocks/eksekutif06.jpeg",
      "/rollingstocks/eksekutif07.jpg",
      "/rollingstocks/eksekutif08.jpg",
      "/rollingstocks/eksekutif09.jpg",
      "/rollingstocks/eksekutif10.jpg",
      "/rollingstocks/eksekutif11.jpg",
      "/rollingstocks/eksekutif12.jpg",
      "/rollingstocks/eksekutif13.jpg",
      "/rollingstocks/eksekutif14.jpg",
      "/rollingstocks/eksekutif15.jpg",
      "/rollingstocks/eksekutif16.jpg",
      "/rollingstocks/eksekutif17.jpg",
      "/rollingstocks/eksekutif18.jpg",
      "/rollingstocks/eksekutif19.jpg",
      "/rollingstocks/eksekutif20.jpg",
      "/rollingstocks/eksekutif21.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K1 0 95 XX - V1
            2. K1 0 95 XX - V2
            3. KM1 0 95 XX
            4. M1 0 95 XX
            5. P 0 95 XX
            6. K1 0 99 XX
            7. K1 0 99 XX - RETROFIT
            8. MP1 0 99 01
            9. MP1 0 99 02
            10. K1 0 08 XX
            11. M1 0 08 XX
            12. P 0 08 XX
            13. K1 0 09 XX
            14. M1 0 09 XX
            15. P 0 09 XX`,
      en: `Pack Contents:
            1. K1 0 95 XX - V1
            2. K1 0 95 XX - V2
            3. KM1 0 95 XX
            4. M1 0 95 XX
            5. P 0 95 XX
            6. K1 0 99 XX
            7. K1 0 99 XX - RETROFIT
            8. MP1 0 99 01
            9. MP1 0 99 02
            10. K1 0 08 XX
            11. M1 0 08 XX
            12. P 0 08 XX
            13. K1 0 09 XX
            14. M1 0 09 XX
            15. P 0 09 XX`,
      ko: `패키지 구성품:
            1. K1 0 95 XX - V1
            2. K1 0 95 XX - V2
            3. KM1 0 95 XX
            4. M1 0 95 XX
            5. P 0 95 XX
            6. K1 0 99 XX
            7. K1 0 99 XX - 개조
            8. MP1 0 99 01
            9. MP1 0 99 02
            10. K1 0 08 XX
            11. M1 0 08 XX
            12. P 0 08 XX
            13. K1 0 09 XX
            14. M1 0 09 XX
            15. P 0 09 XX`,
    },
    fullDesc: fullDescStandard1,
  },
  {
    title:"New Image Pack",
    price: "IDR 15.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: true,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-new-image_orig.jpg",
    gallery: [
      "/rollingstocks/newimage01.jpeg",
      "/rollingstocks/newimage02.jpeg",
      "/rollingstocks/newimage03.jpeg",
      "/rollingstocks/newimage04.jpg",
      "/rollingstocks/newimage05.png",
      "/rollingstocks/newimage06.png",
      "/rollingstocks/newimage07.png",
      "/rollingstocks/newimage08.jpg",
      "/rollingstocks/newimage09.jpg",
      "/rollingstocks/newimage10.jpg",
      "/rollingstocks/newimage11.jpg",
      "/rollingstocks/newimage12.jpg",
      "/rollingstocks/newimage13.jpg",
      "/rollingstocks/newimage14.jpg",
      "/rollingstocks/newimage15.jpg",
      "/rollingstocks/newimage16.jpg",
      "/rollingstocks/newimage17.jpg",
      "/rollingstocks/newimage18.jpg",
      "/rollingstocks/newimage19.jpg",
      "/rollingstocks/newimage20.jpg",
      "/rollingstocks/newimage21.jpg",
      "/rollingstocks/newimage22.jpg",
      "/gallery/galeri34.jpg",
      "/gallery/galeri35.jpg",
      "/gallery/galeri36.jpg",
      "/gallery/galeri37.jpg",
      "/gallery/galeri39.jpg",
      "/gallery/galeri40.jpg",
      "/gallery/galeri41.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K1 0 16 XX
            2. M1 0 16 XX
            3. P 0 16 XX
            4. K3 0 16 XX
            5. K3 0 16 XX - DIFABEL
            6. MP3 0 16 XX
            7. K3 0 17 XX
            8. K3 0 17 XX - DIFABEL
            9. MP3 0 17 XX
            10. K1 0 09 05
            11. M1 0 08 03
            12​. M1 0 82 10
            13. K1 0 16 XX - Livery Fiksi Sindoro-Anggrek
            14. M1 0 16 XX - Livery Fiksi Sindoro-Anggrek
            15. P 0 16 XX - Livery Fiksi Sindoro-Anggrek`,
      en: `Pack Contents:
            1. K1 0 16 XX
            2. M1 0 16 XX
            3. P 0 16 XX
            4. K3 0 16 XX
            5. K3 0 16 XX - DISABLED
            6. MP3 0 16 XX
            7. K3 0 17 XX
            8. K3 0 17 XX - DISABLED
            9. MP3 0 17 XX
            10. K1 0 09 05
            11. M1 0 08 03
            12​. M1 0 82 10
            13. K1 0 16 XX - Sindoro-Anggrek Fictional Livery
            14. M1 0 16 XX - Sindoro-Anggrek Fictional Livery
            15. P 0 16 XX - Sindoro-Anggrek Fictional Livery`,
      ko: `패키지 구성품:
            1. K1 0 16 XX
            2. M1 0 16 XX
            3. P 0 16 XX
            4. K3 0 16 XX
            5. K3 0 16 XX - 디파벨
            6. MP3 0 16 XX
            7. K3 0 17 XX
            8. K3 0 17 XX - 디파벨
            9. MP3 0 17 XX
            10. K1 0 09 05
            11. M1 0 08 03
            12. M1 0 82 10
            13. K1 0 16 XX - 신도로-앙그렉 가상 상징 
            14. M1 0 16 XX - 신도로-앙그렉 가상 상징 
            15. P 0 16 XX - 신도로-앙그렉 가상 상징`,
    },
    fullDesc: fullDescStandard1,
  },
  {
    title:"Bisnis Pack",
    price: "IDR 15.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-bisnis_orig.jpg",
    gallery: [
      "/rollingstocks/bisnis01.jpeg",
      "/rollingstocks/bisnis02.jpeg",
      "/rollingstocks/bisnis03.jpg",
      "/rollingstocks/bisnis04.jpg",
      "/rollingstocks/bisnis05.jpg",
      "/rollingstocks/bisnis06.jpg",
      "/rollingstocks/bisnis07.jpg",
      "/rollingstocks/bisnis08.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K2 0 86 XX - V1
            2. K2 0 86 XX - V2
            3. KMP2 0 86 02
            4. MP2 0 86 01
            5. MP2 0 86 03
            6. K2 0 78 XX - V1
            7. K2 0 78 XX - V2
            8. K2 0 78 XX - V3
            9. KM2 0 78 01`,
      en: `Pack Contents:
            1. K2 0 86 XX - V1
            2. K2 0 86 XX - V2
            3. KMP2 0 86 02
            4. MP2 0 86 01
            5. MP2 0 86 03
            6. K2 0 78 XX - V1
            7. K2 0 78 XX - V2
            8. K2 0 78 XX - V3
            9. KM2 0 78 01`,
      ko: `패키지 구성품:
            1. K2 0 86 XX - V1
            2. K2 0 86 XX - V2
            3. KMP2 0 86 02
            4. MP2 0 86 01
            5. MP2 0 86 03
            6. K2 0 78 XX - V1
            7. K2 0 78 XX - V2
            8. K2 0 78 XX - V3
            9. KM2 0 78 01`,
    },
    fullDesc: fullDescStandard1,
  },
  {
    title:"Ekonomi Pack",
    price: "IDR 15.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-ekonomi_orig.jpg",
    gallery: [
      "/rollingstocks/ekonomi01.jpeg",
      "/rollingstocks/ekonomi02.jpeg",
      "/rollingstocks/ekonomi03.jpeg",
      "/rollingstocks/ekonomi04.jpeg",
      "/rollingstocks/ekonomi05.jpeg",
      "/rollingstocks/ekonomi06.jpg",
      "/rollingstocks/ekonomi07.jpg",
      "/rollingstocks/ekonomi08.jpg",
      "/rollingstocks/ekonomi09.jpg",
      "/rollingstocks/ekonomi10.jpg",
      "/rollingstocks/ekonomi11.jpg",
      "/rollingstocks/ekonomi12.jpg",
      "/rollingstocks/ekonomi13.jpg",
      "/rollingstocks/ekonomi14.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K3 0 09 XX - V1 K
            2. K3 0 09 XX - V2 K
            3. K3 0 09 XX - V1 N
            4. K3 0 09 XX - V2 N
            5. KMP3 0 09 XX
            6. K3 0 10 XX - K
            7. K3 0 10 XX - DIFABEL
            8. MP3 0 10 XX`,
      en: `Pack Contents:
            1. K3 0 09 XX - V1 K
            2. K3 0 09 XX - V2 K
            3. K3 0 09 XX - V1 N
            4. K3 0 09 XX - V2 N
            5. KMP3 0 09 XX
            6. K3 0 10 XX - K
            7. K3 0 10 XX - DISABLED
            8. MP3 0 10 XX`,
      ko: `패키지 구성품:
            1. K3 0 09 XX - V1 K
            2. K3 0 09 XX - V2 K
            3. K3 0 09 XX - V1 N
            4. K3 0 09 XX - V2 N
            5. KMP3 0 09 XX
            6. K3 0 10 XX - K
            7. K3 0 10 XX - 디파벨
            8. MP3 0 10 XX`,
    },
    fullDesc: fullDescStandard1,
  },
  {
    title:"Satwa Pack [SPECIAL EDITION]",
    price: "IDR 15.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-satwa-orig_orig.jpg",
    gallery: [
      "/rollingstocks/satwa01.jpg",
      "/rollingstocks/satwa02.jpg",
      "/rollingstocks/satwa03.jpg",
      "/rollingstocks/satwa04.jpg",
      "/rollingstocks/satwa05.jpg",
      "/rollingstocks/satwa06.jpg",
      "/rollingstocks/satwa07.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K1-095XX - Set Gajayana 2009
            2. M1-095XX - Set Gajayana 2009
            3. BP-095XX - Set Gajayana 2009
            4. K1-845XX - Set Sembrani 2010
            5. K1-935XX - Set Sembrani 2010
            6. K1-995XX - Set Sembrani 2010
            7. M1-68509 - Set Sembrani 2010
            8. P-68804 - Set Sembrani 2010
            9. K1-085XX - Set Lawu 2008
            10. M1-08501 - Set Lawu 2008
            11. BP-08501 - Set Lawu 2008`,
      en: `Pack Contents:
            1. K1-095XX - Gajayana 2009 Set
            2. M1-095XX - Gajayana 2009 Set
            3. BP-095XX - Gajayana 2009 Set
            4. K1-845XX - Sembrani 2010 Set
            5. K1-935XX - Sembrani 2010 Set
            6. K1-995XX - Sembrani 2010 Set
            7. M1-68509 - Sembrani 2010 Set
            8. P-68804 - Sembrani 2010 Set
            9. K1-085XX - Lawu 2008 Set
            10. M1-08501 - Lawu 2008 Set
            11. BP-08501 - Lawu 2008 Set`,
      ko: `팩 내용: 
            1. K1-095XX - 가자야나 2009 세트 
            2. M1-095XX - 가자야나 2009 세트 
            3. BP-095XX - 가자야나 2009 세트 
            4. K1-845XX - 셈브라니 2010 세트 
            5. K1-935XX - 셈브라니 2010 세트 
            6. K1-995XX - 셈브라니 2010 세트 
            7. M1-68509 - 셈브라니 2010 세트 
            8. P-68804 - 셈브라니 2010 세트 
            9. K1-085XX - 라우 2008 세트 
            10. M1-08501 - 라우 2008 세트 
            11. BP-08501 - 라우 2008년 세트`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Kedinasan Pack",
    price: "IDR 10.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-kedinasan_orig.jpg",
    gallery: [
      "/rollingstocks/kedinasan01.jpg",
      "/rollingstocks/kedinasan02.jpg",
      "/rollingstocks/kedinasan03.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. MP3 0 10 03 - MARTAPURA
            2. SI 0 16 01 - MENDAWAI
            3. SI 0 11 01 - BARITO
            4. SI 0 11 02 - KAHAYAN
            5. SI 0 09 01 - MAHAKAM
            6. SI 0 09 02 - KAPUAS
            7. SU 0 18 01 - FUDIKA`,
      en: `Pack Contents:
            1. MP3 0 10 03 - MARTAPURA
            2. SI 0 16 01 - MENDAWAI
            3. SI 0 11 01 - BARITO
            4. SI 0 11 02 - KAHAYAN
            5. SI 0 09 01 - MAHAKAM
            6. SI 0 09 02 - KAPUAS
            7. SU 0 18 01 - FUDIKA`,
      ko: `패키지 구성:
            1. MP3 0 10 03 - 마르타푸라
            2. THE 0 16 01 - 멘다와이
            3. SI 0 11 01 - 뉴스
            4. THE 0 11 02 - 라이트
            5. THE 0 09 01 - 코트
            6. THE 0 09 02 - 코트
            7. SU 0 18 01 - 푸디카`,
    },
    fullDesc: fullDescStandard1,
  },
  {
    title:"Rail Hospital Pack",
    price: "IDR 10.000",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-hospital.jpg",
    gallery: [
      "/rollingstocks/pack-hospital.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K1 0 64 20 - Rail Hospital
            2. K1 0 66 05 - Rail Hospital
            3. K1 0 66 15 - Rail Hospital
            4. K1 0 67 06 - Rail Hospital`,
      en: `Pack Contents:
            1. K1 0 64 20 - Rail Hospital
            2. K1 0 66 05 - Rail Hospital
            3. K1 0 66 15 - Rail Hospital
            4. K1 0 67 06 - Rail Hospital`,
      ko: `패키지 구성:
            1. K1 0 64 20 - 철도 병원
            2. K1 0 66 05 - 철도 병원
            3. K1 0 66 15 - 철도 병원
            4. K1 0 67 06 - 철도 병원`,
    },
    fullDesc: fullDescStandard1,
  },
  {
    title:"Bagasi Pack",
    price: "IDR 0 (Bonus)",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: true,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-bagasi_orig.jpg",
    gallery: [
      "/rollingstocks/pack-bagasi_orig.jpg",
    ],
    content: {
      id: `Bonus konten ini bisa didapatkan setelah membeli 3 pack kereta.    

          Isi Pack:
            1. BP 0 07 01
            2. BP 0 07 02
            3. BP 0 09 XX
            4. B 0 07 XX
            5. B 0 09 XX
            6. B 0 14 XX
            7. B 0 54 03 - Bagasi Mobil
            8. B 0 65 01 - Bagasi Mobil
            9. B 0 68 02
            10. B 0 68 06
            11. B 0 68 07
            12. B 0 80 03
            13. B 0 86 XX - V.1
            14. B 0 86 XX - V.2`,
      en: `This bonus content can be obtained after purchasing 3 train packs.

          Pack Contents:
            1. BP 0 07 01
            2. BP 0 07 02
            3. BP 0 09 XX
            4. B 0 07 XX
            5. B 0 09 XX
            6. B 0 14 XX
            7. B 0 54 03 - Car Baggage
            8. B 0 65 01 - Car Baggage
            9. B 0 68 02
            10. B 0 68 06
            11. B 0 68 07
            12. B 0 80 03
            13. B 0 86 XX - V.1
            14. B 0 86 XX - V.2`,
      ko: `이 보너스 콘텐츠는 기차 팩 3개를 구매하면 획득할 수 있습니다.

          팩 구성:
            1. BP 0 07 01
            2. BP 0 07 02
            3. BP 0 09 XX
            4. B 0 07 XX
            5. B 0 09 XX
            6. B 0 14 XX
            7. B 0 54 03 - 차량 수하물
            8. B 0 65 01 - 차량 수하물
            9. B 0 68 02
            10. B 0 68 06
            11. B 0 68 07
            12. B 0 80 03
            13. B 0 86 XX - V.1
            14. B 0 86 XX - V.2`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Kereta Pembangkit Pack",
    price: "IDR 0 (Bonus)",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: true,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-pembangkit-orig_orig.jpg",
    gallery: [
      "/rollingstocks/pembangkit01.jpg",
      "/rollingstocks/pembangkit02.jpg",
      "/rollingstocks/pembangkit03.jpg",
      "/rollingstocks/pembangkit04.jpg",
      "/rollingstocks/pembangkit05.jpg",
      "/rollingstocks/pembangkit06.jpg",
    ],
    content: {
      id: `Bonus konten ini bisa didapatkan setelah membeli 5 pack kereta.
      
          Isi Pack:
            1. P 0 64 02
            2. P 0 67 05
            3. P 0 68 10
            4. P 0 68 14
            5. P 0 78 03
            6. P 0 78 07`,
      en: `This bonus content can be obtained after purchasing 5 train packs.

          Pack Contents:
            1. P 0 64 02
            2. P 0 67 05
            3. P 0 68 10
            4. P 0 68 14
            5. P 0 78 03
            6. P 0 78 07`,
      ko: `이 보너스 콘텐츠는 기차 팩 5개를 구매하면 획득할 수 있습니다.

          팩 구성:
            1. P 0 64 02
            2. P 0 67 05
            3. P 0 68 10
            4. P 0 68 14
            5. P 0 78 03
            6. P 0 78 07`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Kereta Penolong Pack",
    price: "IDR 0 (Bonus)",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: true,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/pack-kereta-penolong_orig.jpg",
    gallery: [
      "/rollingstocks/pack-kereta-penolong_orig.jpg",
    ],
    content: {
      id: `Bonus konten ini bisa didapatkan setelah membeli 6 pack kereta.

          Isi Pack:
            1. SN 0 08 01 - NNW
            2. SN 0 08 02 - NNW
            3. K2 0 65 11 - RESCUE
            4. K2 0 78 43 - RESCUE
            5. B 0 68 03 - RESCUE
            6. B  0 78 13 - RESCUE
            7. B 0 80 04 - RESCUE
            8. B 0 82 18 - RESCUE
            9. ​B 0 86 04 - RESCUE`,
      en: `This bonus content can be obtained after purchasing the 6-pack train.

          Pack Contents:
            1. SN 0 08 01 - NNW
            2. SN 0 08 02 - NNW
            3. K2 0 65 11 - RESCUE
            4. K2 0 78 43 - RESCUE
            5. B 0 68 03 - RESCUE
            6. B 0 78 13 - RESCUE
            7. B 0 80 04 - RESCUE
            8. B 0 82 18 - RESCUE
            9. B 0 86 04 - RESCUE`,
      ko: `이 보너스 콘텐츠는 6팩 열차 구매 후 획득할 수 있습니다.

          팩 구성:
            1. SN 0 08 01 - NNW
            2. SN 0 08 02 - NNW
            3. K2 0 65 11 - RESCUE
            4. K2 0 78 43 - RESCUE
            5. B 0 68 03 - RESCUE
            6. B 0 78 13 - RESCUE
            7. B 0 80 04 - RESCUE
            8. B 0 82 18 - RESCUE
            9. B 0 86 04 - RESCUE`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Kereta Petani",
    price: "IDR 0 (Bonus)",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: true,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/petani01.jpg",
    gallery: [
      "/rollingstocks/petani01.jpg",
      "/rollingstocks/petani02.jpg",
      "/rollingstocks/eksislodayapetani.jpg",
    ],
    content: {
      id: `Bonus konten ini bisa didapatkan di grup user setelah membeli minimal 1 pack kereta.`,
      en: `This bonus content can be obtained in the user group after purchasing at least 1 train pack.`,
      ko: `이 보너스 콘텐츠는 최소 1개의 기차 팩을 구매한 후 사용자 그룹에서 얻을 수 있습니다.`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Kereta Lodaya Livery Krem",
    price: "IDR 0 (Bonus)",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: true,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/lodayakrem01.jpg",
    gallery: [
      "/rollingstocks/lodayakrem01.jpg",
      "/rollingstocks/lodayakrem02.jpg",
      "/rollingstocks/lodayakrem03.jpg",
      "/rollingstocks/eksislodayapetani.jpg",
    ],
    content: {
      id: `Bonus konten ini bisa didapatkan di grup user setelah membeli minimal 1 pack kereta.`,
      en: `This bonus content can be obtained in the user group after purchasing at least 1 train pack.`,
      ko: `이 보너스 콘텐츠는 최소 1개의 기차 팩을 구매한 후 사용자 그룹에서 얻을 수 있습니다.`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Kereta Eksekutif Livery Eksis",
    price: "IDR 0 (Bonus)",
    version: {
      id: "Versi 4.0 FINAL",
      en: "Version 4.0 FINAL",
      ko: "버전 4.0 최종"
    },
    hideBuy: true,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/eksis01.jpg",
    gallery: [
      "/rollingstocks/eksis01.jpg",
      "/rollingstocks/eksis02.jpg",
      "/rollingstocks/eksis03.jpg",
      "/rollingstocks/eksislodayapetani.jpg",
    ],
    content: {
      id: `Bonus konten ini bisa didapatkan di grup user setelah membeli minimal 1 pack kereta.`,
      en: `This bonus content can be obtained in the user group after purchasing at least 1 train pack.`,
      ko: `이 보너스 콘텐츠는 최소 1개의 기차 팩을 구매한 후 사용자 그룹에서 얻을 수 있습니다.`,
    },
    fullDesc: fullDescStandard2,
  },
  {
    title:"Stainless Steel Gen 1 [BETA]",
    price: "IDR 0 (Free)",
    version: {
      id: "Versi Beta",
      en: "Beta Version",
      ko: "베타 버전"
    },
    hideBuy: true,
    hideDownload: false,
    downloadLink: "https://drive.google.com/file/d/1iMFBQT6tmggHMp13hIbS3QBRqJkuisbI/view?usp=sharing",
    bestseller: false,
    subcat: "Kereta Tak Berpenggerak",
    img: "/rollingstocks/ssgen1full.jpg",
    gallery: [
      "/gallery/galeri04.jpg",
      "/gallery/galeri05.jpg",
      "/gallery/galeri10.jpg",
      "/gallery/galeri11.jpg",
      "/rollingstocks/ssgen1lux.jpg",
      "/rollingstocks/ssgen1k1.jpg",
      "/rollingstocks/ssgen1k3.jpg",
      "/rollingstocks/ssgen1m1.jpg",
      "/rollingstocks/ssgen1p.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K1 0 18 01 - Eksekutif
            2. K1 0 18 61 - Luxury
            3. K3 0 18 01 - Premium
            4. M1 0 18 01 - Restorasi
            5. P 0 18 01 - Pembangkit`,
      en: `Pack Contents:
            1. K1 0 18 01 - Executive Class
            2. K1 0 18 61 - Luxury Class
            3. K3 0 18 01 - Premium Class
            4. M1 0 18 01 - Dinning Car
            5. P 0 18 01 - Power Car`,
      ko: `팩 구성:
            1. K1 0 18 01 - 이그제큐티브 클래스
            2. K1 0 18 61 - 럭셔리 클래스
            3. K3 0 18 01 - 프리미엄 클래스
            4. M1 0 18 01 - 다이닝카
            5. P 0 18 01 - 파워카`,
    },
    fullDesc: {
      id: `Konten ini masih versi beta, belum ada skrip, belum ada rantai, s21, dll.
            Dependencies sudah disertakan semua.
            Bogie masih menggunakan K5, jika ingin K10 silahkan diganti sendiri.

            DILARANG MENYEBARLUASKAN KONTEN INI DENGAN CARA DAN BENTUK APAPUN!`,
      en: `This content is still in beta, with no scripts, no chains, no S21, etc.
            All dependencies are included.
            The bogie still uses K5; if you prefer K10, please change it yourself.

            DISTRIBUTION OF THIS CONTENT IN ANY MANNER OR FORM IS PROHIBITED!`,
      ko: `이 콘텐츠는 아직 베타 버전이며 스크립트, 체인, S21 등이 없습니다.
            모든 종속성이 포함되어 있습니다.
            보기는 여전히 K5를 사용합니다. K10을 선호하시는 경우 직접 변경해 주세요.

            이 콘텐츠는 어떠한 방식이나 형태로든 배포하는 것을 금지합니다!`,
    },
  },
  {
    title:"Kereta Inspeksi Pack",
    price: "IDR 10.000",
    version: {
      id: "Versi 1.0 FINAL",
      en: "Version 1.0 FINAL",
      ko: "버전 1.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Rel Diesel",
    img: "/dieselmultipleunit/kais_orig.jpg",
    gallery: [
      "/gallery/galeri55.jpg",
      "/dieselmultipleunit/kais02.jpeg",
      "/dieselmultipleunit/kais03.jpeg",
      "/dieselmultipleunit/kais04.jpeg",
      "/dieselmultipleunit/kais05.jpeg",
      "/dieselmultipleunit/kais06.jpeg",
      "/dieselmultipleunit/kais07.jpeg",
      "/gallery/galeri58.jpg",
      "/dieselmultipleunit/kais09.jpeg",
      "/dieselmultipleunit/kais10.jpeg",
      "/dieselmultipleunit/kais11.jpeg",
      "/dieselmultipleunit/kais12.jpeg",
      "/dieselmultipleunit/kais13.jpeg",
      "/dieselmultipleunit/kais14.jpeg",
      "/dieselmultipleunit/kais15.jpeg",
      "/dieselmultipleunit/kais16.jpeg",
      "/dieselmultipleunit/kais17.jpeg",
    ],
    content: {
      id: `Isi Pack:
            1. K1 3 80 01 - Kereta Inspeksi 2 / Railtwo
            2. K1 3 82 02 - Kereta Inspeksi 2 / Railtwo
            3. K3 3 82 06 - Kereta Inspeksi 3 / Railthree
            4. K3 3 82 14 - Kereta Inspeksi 3 / Railthree
            5. K3 3 82 18 - Kereta Inspeksi 3 / Railthree
            6. K1 3 80 01 - Kereta Istimewa
            7. K1 3 82 02 - Kereta Istimewa
            8. K2 3 82 04 - Kereta Penolong / NR
            9. K2 3 82 20 - Kereta Penolong / NR`,
      en: `Pack Contents:
            1. K138001 - Inspection Cart 2 / Railtwo
            2. K138202 - Inspection Cart 2 / Railtwo
            3. K338206 - Inspection Cart 3 / Railthree
            4. K338214 - Inspection Cart 3 / Railthree
            5. K338218 - Inspection Cart 3 / Railthree
            6. K138001 - Special Cart
            7. K138202 - Special Cart
            8. K238204 - Rescue Cart / NR
            9. K238220 - Rescue Cart / NR`,
      ko: `패키지 구성품:
            1. K138001 - 점검 카트 2 / 레일투
            2. K138202 - 점검 카트 2 / 레일투
            3. K338206 - 점검 카트 3 / 레일쓰리
            4. K338214 - 점검 카트 3 / 레일쓰리
            5. K338218 - 점검 카트 3 / 레일쓰리
            6. K138001 - 특수 카트
            7. K138202 - 특수 카트
            8. K238204 - 구조 카트 / NR
            9. K238220 - 구조 카트 / NR`,
    },
    fullDesc: {
      id: `Fitur:
            1. S21 Siang (terdapat s21 yang bisa dipasang dan dilepas)
            2. S21 Malam Nyala/Mati (terdiri dari 8 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            3. Lampu Rotator Nyala/Mati
            4. Lampu Kabut Nyala/Mati (terpisah dari lampu utama)
            5. HD Digital Skin
            6. Medium Poly
            7. Suara Sirine
            8. Mode Malam Otomatis`,
      en: `Features:
            1. S21 Day (with detachable S21)
            2. S21 Night On/Off (consists of 8 lights, each of which can be turned on and off separately and is shaped like a corona)
            3. Rotator Lights On/Off
            4. Fog Lights On/Off (separate from the main lights)
            5. HD Digital Skin
            6. Medium Poly
            7. Siren Sound
            8. Automatic Night Mode`,
      ko: `특징:
            1. S21 주간등 (분리형 S21 포함)
            2. S21 야간등 (8개의 조명으로 구성, 각 조명은 개별적으로 켜고 끌 수 있으며 코로나 모양)
            3. 회전등 켜기/끄기
            4. 안개등 켜기/끄기 (주 조명과 별도)
            5. HD 디지털 스킨
            6. 중간 폴리
            7. 사이렌 ​​소리
            8. 자동 야간 모드`,
    },
  },
  {
    title:"Rail Clinic Pack",
    price: "IDR 10.000",
    version: {
      id: "Versi 1.0 FINAL",
      en: "Version 1.0 FINAL",
      ko: "버전 1.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Rel Diesel",
    img: "/dieselmultipleunit/rcl_orig.jpg",
    gallery: [
      "/dieselmultipleunit/rcl01.jpg",
      "/dieselmultipleunit/rcl02.jpg",
      "/dieselmultipleunit/rcl03.jpg",
      "/dieselmultipleunit/rcl04.jpg",
      "/gallery/galeri59.jpg",
      "/dieselmultipleunit/rcl06.jpg",
      "/dieselmultipleunit/rcl07.jpg",
      "/dieselmultipleunit/rcl08.jpg",
      "/dieselmultipleunit/rcl09.jpg",
      "/gallery/galeri60.jpg",
      "/dieselmultipleunit/rcl11.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K2 3 80 02 - Rail Clinic 1
            2. K2 3 82 05 - Rail Clinic 1
            3. K2 3 82 17 - Rail Clinic 2
            4. K2 3 87 02 - Rail Clinic 2
            5. K2 3 82 11 - Rail Clinic 3
            6. K3 3 82 05 - Rail Clinic 3
            7. SK 3 82 06 - Rail Clinic 4
            8. SK 3 78 01 - Rail Clinic 4
            9. SK 3 82 05 - Rail Library
            10. SK 3 82 07 - Rail Library
            11. K2 3 78 02 - NR Pikachu
            12. K2 3 80 02 - NR Pikachu`,
      en: `Pack Contents: 
            1. K2 3 80 02 - Rail Clinic 1 
            2. K2 3 82 05 - Rail Clinic 1 
            3. K2 3 82 17 - Rail Clinic 2 
            4. K2 3 87 02 - Rail Clinic 2 
            5. K2 3 82 11 - Rail Clinic 3 
            6. K3 3 82 05 - Rail Clinic 3 
            7. SK 3 82 06 - Rail Clinic 4 
            8. SK 3 78 01 - Rail Clinic 4 
            9. SK 3 82 05 - Rail Library 
            10. SK 3 82 07 - Rail Library 
            11. K2 3 78 02 - NR Pikachu 
            12. K2 3 80 02 - NR Pikachu`,
      ko: `패키지 구성:
            1. K2 3 80 02 - 레일 클리닉 1
            2. K2 3 82 05 - 레일 클리닉 1
            3. K2 3 82 17 - 레일 클리닉 2
            4. K2 3 87 02 - 레일 클리닉 2
            5. K2 3 82 11 - 레일 클리닉 3
            6. K3 3 82 05 - 레일 클리닉 3
            7. SK 3 82 06 - 레일 클리닉 4
            8. SK 3 78 01 - 레일 클리닉 4
            9. SK 3 82 05 - 레일 라이브러리
            10. SK 3 82 07 - 레일 라이브러리
            11. K2 3 78 02 - NR 피카츄
            12. K2 3 80 02 - NR 피카츄`,
    },
    fullDesc: {
      id: `Fitur:
            1. S21 Siang (terdapat s21 yang bisa dipasang dan dilepas)
            2. S21 Malam Nyala/Mati (terdiri dari 8 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            3. Lampu Rotator Nyala/Mati
            4. Lampu Kabut Nyala/Mati (terpisah dari lampu utama)
            5. HD Digital Skin
            6. Medium Poly
            7. Suara Sirine
            8. Mode Malam Otomatis
            9. Semboyan 26 & 27`,
      en: `Feature: 
            1. S21 Daytime (S21 is available for attaching and detaching)
            2. S21 Nighttime On/Off (consists of 8 lights, each of which can be turned on and off separately and has a corona shape)
            3. Rotating Lights On/Off
            4. Fog Lights On/Off (separate from the main lights)
            5. HD Digital Skin
            6. Medium Poly
            7. Siren Sound
            8. Automatic Night Mode
            9. Signal 26 & 27`,
      ko: `특징:
            1. S21 주간 주행 모드 (S21은 탈부착 가능)
            2. S21 야간 주행 모드 (8개의 조명으로 구성되며, 각 조명은 개별적으로 켜고 끌 수 있으며 코로나 형태입니다)
            3. 회전 조명 켜기/끄기
            4. 안개등 켜기/끄기 (주 조명과 분리)
            5. HD 디지털 스킨
            6. 중간 폴리
            7. 사이렌 ​​소리
            8. 자동 야간 모드
            9. 신호 26 & 27`,
    },
  },
  {
    title:"MCW 302",
    price: "IDR 10.000",
    version: {
      id: "Versi 1.0 FINAL",
      en: "Version 1.0 FINAL",
      ko: "버전 1.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Rel Diesel",
    img: "/dieselmultipleunit/mcw302_orig.jpg",
    gallery: [
      "/dieselmultipleunit/mcw01.jpg",
      "/dieselmultipleunit/mcw02.jpg",
      "/dieselmultipleunit/mcw03.jpg",
      "/dieselmultipleunit/mcw04.jpg",
      "/dieselmultipleunit/mcw05.jpg",
      "/dieselmultipleunit/mcw06.jpg",
      "/dieselmultipleunit/mcw07.jpg",
      "/dieselmultipleunit/mcw08.jpg",
      "/dieselmultipleunit/mcw09.jpg",
      "/dieselmultipleunit/mcw10.jpg",
      "/dieselmultipleunit/mcw11.jpg",
      "/dieselmultipleunit/mcw12.jpg",
      "/dieselmultipleunit/mcw13.jpg",
      "/dieselmultipleunit/mcw14.jpg",
      "/dieselmultipleunit/mcw15.jpg",
      "/dieselmultipleunit/mcw16.jpg",
      "/dieselmultipleunit/mcw17.jpg",
      "/dieselmultipleunit/mcw18.jpg",
      "/dieselmultipleunit/mcw19.jpg",
      "/dieselmultipleunit/mcw20.jpg",
      "/dieselmultipleunit/mcw21.jpg",
      "/dieselmultipleunit/mcw22.jpg",
      "/dieselmultipleunit/mcw23.jpg",
      "/dieselmultipleunit/mcw24.jpg",
      "/dieselmultipleunit/mcw25.jpg",
      "/dieselmultipleunit/mcw26.jpg",
      "/dieselmultipleunit/mcw27.jpg",
      "/dieselmultipleunit/mcw28.jpg",
      "/dieselmultipleunit/mcw29.jpg",
      "/dieselmultipleunit/mcw30.jpg",
      "/dieselmultipleunit/mcw31.jpg",
      "/dieselmultipleunit/mcw32.jpg",
      "/dieselmultipleunit/mcw33.jpg",
      "/dieselmultipleunit/mcw34.jpg",
    ],
    content: {
      id: ``,
      en: ``,
      ko: ``,
    },
    fullDesc: {
      id: `Fitur:
            1. S21 Siang (terdapat 2 versi s21 yang bisa dipasang dan dilepas)
            2. S21 Malam Nyala/Mati (terdiri dari 12 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            3. Lampu Semboyan Nyala/Mati (terdiri dari 6 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            4. Semboyan 26/27 (Semboyan Segitiga dekat lampu utama)
            5. Nightmode / mode malam otomatis
            6. HD Digital Skin
            7. Low Poly
            8. Ganti Livery via Surveyor (terdapat lebih dari 30 livery berbeda yang bisa digunakan)
            9. Muncul/Hilang mesh karet sambungan depan (via surveyor)
            10. Muncul/Hilang mesh tutup semboyan 26/27 (via surveyor)`,
      en: `Features:
            1. S21 Day (there are two versions of the S21 that can be attached and removed)
            2. S21 Night On/Off (consists of 12 lights that can be turned on and off individually and have a corona shape)
            3. Slogan Lights On/Off (consists of 6 lights that can be turned on and off individually and have a corona shape)
            4. Slogan 26/27 (Triangular Slogan near the main light)
            5. Night Mode / Automatic Night Mode
            6. HD Digital Skin
            7. Low Poly
            8. Change Livery via Surveyor (there are over 30 different liveries available)
            9. Front connection rubber mesh appears/disappears (via surveyor)
            10. Signal 26/27 cover mesh appears/disappears (via surveyor)`,
      ko: `특징:
            1. S21 주간 (S21은 탈부착 가능한 두 가지 버전이 있습니다)
            2. S21 야간 켜기/끄기 (개별적으로 켜고 끌 수 있는 12개의 조명으로 구성되며 코로나 모양입니다)
            3. 슬로건 조명 켜기/끄기 (개별적으로 켜고 끌 수 있는 6개의 조명으로 구성되며 코로나 모양입니다)
            4. 슬로건 26/27 (메인 조명 근처의 삼각형 슬로건)
            5. 야간 모드 / 자동 야간 모드
            6. HD 디지털 스킨
            7. 로우 폴리
            8. Surveyor를 통한 리버리 변경 (30가지 이상의 다양한 리버리 사용 가능)
            9. 전면 연결 고무 메시가 나타나거나 사라집니다 (Surveyor를 통해)
            10. 신호 26/27 커버 메시가 나타나거나 사라집니다 (Surveyor를 통해)`,
    },
  },
  {
    title:"Minnion Pack",
    price: "IDR 10.000",
    version: {
      id: "Versi 1.0 FINAL",
      en: "Version 1.0 FINAL",
      ko: "버전 1.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Rel Diesel",
    img: "/dieselmultipleunit/minnion_orig.jpg",
    gallery: [
      "/dieselmultipleunit/minnion01.jpg",
      "/dieselmultipleunit/minnion02.jpg",
      "/dieselmultipleunit/minnion03.jpg",
      "/dieselmultipleunit/minnion04.jpg",
      "/dieselmultipleunit/minnion05.jpg",
      "/dieselmultipleunit/minnion06.jpg",
      "/dieselmultipleunit/minnion07.jpg",
      "/dieselmultipleunit/minnion08.jpg",
      "/dieselmultipleunit/minnion09.jpg",
      "/dieselmultipleunit/minnion10.jpg",
      "/dieselmultipleunit/minnion11.jpg",
      "/dieselmultipleunit/minnion12.jpg",
      "/dieselmultipleunit/minnion13.jpg",
      "/dieselmultipleunit/minnion14.jpg",
      "/dieselmultipleunit/minnion15.jpg",
      "/dieselmultipleunit/minnion16.jpg",
      "/dieselmultipleunit/minnion17.jpg",
      "/dieselmultipleunit/minnion18.jpg",
      "/dieselmultipleunit/minnion19.jpg",
      "/dieselmultipleunit/minnion20.jpg",
      "/dieselmultipleunit/minnion21.jpg",
      "/dieselmultipleunit/minnion22.jpg",
      "/dieselmultipleunit/minnion23.jpg",
      "/dieselmultipleunit/minnion24.jpg",
      "/dieselmultipleunit/minnion25.jpg",
      "/dieselmultipleunit/minnion26.jpg",
      "/dieselmultipleunit/minnion27.jpg",
      "/dieselmultipleunit/minnion28.jpg",
      "/dieselmultipleunit/minnion29.jpg",
      "/dieselmultipleunit/minnion30.jpg",
      "/dieselmultipleunit/minnion31.jpg",
      "/dieselmultipleunit/minnion32.jpg",
      "/dieselmultipleunit/minnion33.jpg",
      "/dieselmultipleunit/minnion34.jpg",
      "/dieselmultipleunit/minnion35.jpg",
      "/dieselmultipleunit/minnion36.jpg",
      "/dieselmultipleunit/minnion37.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. SI 3 09 01 - KAIS SEMERU
            2. SI 3 11 01 - KAIS KALDERA TOBA
            3. SI 3 15 01 - KAIS MERBABU
            4. SI 3 15 02 - KAIS MERBABU
            5. SI 3 16 01 - KAIS KELUD
            6. SI 3 16 02 - KAIS KELUD
            7. SU 3 14 01 - KAUR CIREMAI
            8. SU 3 16 01 - KAUR GALUNGGUNG
            9. SU 3 17 02 - KAUR GUNUNG GAJAH`,
      en: `Pack Contents:
            1. SI 3 09 01 - KAIS SEMERU
            2. SI 3 11 01 - KAIS TOBA CALDERA
            3. SI 3 15 01 - KAIS MERBABU
            4. SI 3 15 02 - KAIS MERBABU
            5. SI 3 16 01 - KAIS KELUD
            6. SI 3 16 02 - KAIS KELUD
            7. SU 3 14 01 - KAUR CIREMAI
            8. SU 3 16 01 - KAUR GALUNGGUNG
            9. SU 3 17 02 - KAUR GUNUNG GAJAH`,
      ko: `팩 내용:
            1. SI 3 09 01 - 카이스 세메루
            2. SI 3 11 01 - 카이스 토바 칼데라
            3. 시 3 15 01 - 카이스 메르바부
            4. 시 3 15 02 - 카이스 메르바부
            5. SI 3 16 01 - 카이스 켈루드
            6. SI 3 16 02 - 카이스 켈루드
            7. SU 3 14 01 - 카우르 시레마이
            8. SU 3 16 01 - 카우르 갈룽궁
            9. SU 3 17 02 - 카우르 구룽 가자`,
    },
    fullDesc: {
      id: `Fitur:
            1. S21 Siang (terdapat 2 versi s21 yang bisa dipasang dan dilepas)
            2. S21 Malam Nyala/Mati (terdiri dari 10 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            3. Lampu Semboyan di muka Nyala/Mati
            4. Lampu Kabut Nyala/Mati (terpisah dari lampu utama)
            5. HD Digital Skin
            6. Medium Poly
            7. Suara Sirine`,
      en: `Features:
            1. S21 Day (there are two versions of the S21 that can be attached and removed)
            2. S21 Night On/Off (consists of 10 lights) (each of which can be turned on and off separately and is shaped like a corona)
            3. Front Side Marker Lights (On/Off)
            4. Fog Lights (Separate from the main lights)
            5. HD Digital Skin
            6. Medium Poly
            7. Siren Sound`,
      ko: `특징:
            1. S21 Day (S21에는 탈부착이 가능한 버전이 2가지 있습니다)
            2. S21 Night On/Off (10개의 조명으로 구성) (각각 개별적으로 켜고 끌 수 있으며 코로나 모양입니다)
            3. 전면 사이드 마커등 (켜기/끄기)
            4. 안개등 (주등과 분리)
            5. HD 디지털 스킨
            6. 중간 폴리
            7. 사이렌 ​​소리`,
    },
  },
  {
    title:"Kedung Sepur Pack",
    price: "IDR 5.000",
    version: {
      id: "Versi 1.0 FINAL",
      en: "Version 1.0 FINAL",
      ko: "버전 1.0 최종"
    },
    hideBuy: false,
    hideDownload: true,
    bestseller: false,
    subcat: "Kereta Rel Diesel",
    img: "/dieselmultipleunit/kds01.jpg",
    gallery: [
      "/dieselmultipleunit/kds01.jpg",
      "/dieselmultipleunit/kds02.jpg",
      "/dieselmultipleunit/kds03.jpg",
      "/dieselmultipleunit/kds04.jpg",
      "/dieselmultipleunit/kds05.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. K1 3 80 02 
            2. K1 3 82 01 
            3. K1 3 82 03 
            4. K1 3 82 04 
            5. K1 3 82 05 
            6. K1 3 87 01`,
      en: `Pack Contents: 
            1. K1 3 80 02 
            2. K1 3 82 01 
            3. K1 3 82 03 
            4. K1 3 82 04 
            5. K1 3 82 05 
            6. K1 3 87 01`,
      ko: `패키지 구성:
            1. K1 3 80 02 
            2. K1 3 82 01 
            3. K1 3 82 03 
            4. K1 3 82 04 
            5. K1 3 82 05 
            6. K1 3 87 01`,
    },
    fullDesc: {
      id: `Fitur:
            1. HD Digital Skin
            2. Medium Poly
            3. Mode Malam Otomatis
            4. Semboyan 26 & 27`,
      en: `Feature: 
            1. HD Digital Skin
            2. Medium Poly
            3. Automatic Night Mode
            4. Signal 26 & 27`,
      ko: `특징:
            1. HD 디지털 스킨
            2. 중간 폴리
            3. 자동 야간 모드
            4. 신호 26 & 27`,
    },
  },
  {
    title:"Gerbong Datar (PPC) 42 Ton",
    price: "IDR 0 (Free)",
    version: {
      id: "Versi Beta",
      en: "Beta Version",
      ko: "베타 버전"
    },
    hideBuy: true,
    hideDownload: false,
    downloadLink: "https://drive.google.com/file/d/1_K4bFUNAs3E-DvdbZxLRTIpujI-Ib0Dn/view?usp=sharing",
    bestseller: false,
    subcat: "Gerbong Barang",
    img: "/rollingstocks/gerbongdatar.jpg",
    gallery: [
      "/rollingstocks/gerbongdatar.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. GD 42 11 42 SDT - Livery Hitam
            2. GD 42 11 245 JAKG - Livery Biru
            3. GD 42 11 252 BD - Livery Kuning
            4. GD 42 11 341 MA - Livery Hijau`,
      en: `Pack Contents:
            1. GD 42 11 42 SDT - Black Livery
            2. GD 42 11 245 JAKG - Blue Livery
            3. GD 42 11 252 BD - Yellow Livery
            4. GD 42 11 341 MA - Green Livery`,
      ko: `팩 구성:
            1. GD 42 11 42 SDT - 검은색 도장
            2. GD 42 11 245 JAKG - 파란색 도장
            3. GD 42 11 252 BD - 노란색 도장
            4. GD 42 11 341 MA - 녹색 도장`,
    },
    fullDesc: {
      id: `Konten ini masih versi beta, belum ada skrip, belum ada rantai, s21, dll.
            Dependencies sudah disertakan semua.
            Tersedia komoditi peti kemas ukuran 20ft dan 40ft.

            DILARANG MENYEBARLUASKAN KONTEN INI DENGAN CARA DAN BENTUK APAPUN!`,
      en: `This content is still in beta, with no scripts, no chains, no S21, etc.
            All dependencies are included.
            Commodity containers available in sizes 20ft and 40ft.

            DISTRIBUTION OF THIS CONTENT IN ANY MANNER OR FORM IS PROHIBITED!`,
      ko: `이 콘텐츠는 아직 베타 버전이며 스크립트, 체인, S21 등이 없습니다.
            모든 종속성이 포함되어 있습니다.
            20피트 및 40피트 크기의 상품 컨테이너 제공.

            이 콘텐츠는 어떠한 방식이나 형태로든 배포하는 것을 금지합니다!`,
    },
  },
  {
    title:"Gerbong Ketel (KKW) 30 Ton",
    price: "IDR 0 (Free)",
    version: {
      id: "Versi Beta",
      en: "Beta Version",
      ko: "베타 버전"
    },
    hideBuy: true,
    hideDownload: false,
    downloadLink: "https://drive.google.com/file/d/1tIXnUUOl_vJn9GnZbiP7NAlnrDVpCxuv/view?usp=sharing",
    bestseller: false,
    subcat: "Gerbong Barang",
    img: "/rollingstocks/ketel.jpg",
    gallery: [
      "/rollingstocks/ketel.jpg",
    ],
    content: {
      id: `Isi Pack:
            1. GK 30 84 08 MA
            2. GK 30 84 08 MA - Update`,
      en: `Pack Contents:
            1. GK 30 84 08 MA
            2. GK 30 84 08 MA - Update`,
      ko: `팩 구성:
            1. GK 30 84 08 MA
            2. GK 30 84 08 MA - 업데이트`,
    },
    fullDesc: {
      id: `Konten ini masih versi beta, belum ada skrip, belum ada rantai, s21, dll.
            Dependencies sudah disertakan semua.

            DILARANG MENYEBARLUASKAN KONTEN INI DENGAN CARA DAN BENTUK APAPUN!`,
      en: `This content is still in beta, with no scripts, no chains, no S21, etc.
            All dependencies are included.

            DISTRIBUTION OF THIS CONTENT IN ANY MANNER OR FORM IS PROHIBITED!`,
      ko: `이 콘텐츠는 아직 베타 버전이며 스크립트, 체인, S21 등이 없습니다.
            모든 종속성이 포함되어 있습니다.

            이 콘텐츠는 어떠한 방식이나 형태로든 배포하는 것을 금지합니다!`,
    },
  },
  
];
