export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface RollingStock {
  id: number;
  title: string;
  price: string;
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
    id: 1,
    title:"Kereta Wisata Pack",
    price: "IDR 30.000",
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
    id: 2,
    title:"New Image Pack",
    price: "IDR 20.000",
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
            12​. M1 0 82 10`,
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
            12​. M1 0 82 10`,
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
            12. M1 0 82 10`,
    },
    fullDesc: fullDescStandard1,
  },
  {
    id: 3,
    title:"Eksekutif Pack",
    price: "IDR 30.000",
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
    id: 4,
    title:"Bisnis Pack",
    price: "IDR 20.000",
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
    id: 5,
    title:"Ekonomi Pack",
    price: "IDR 20.000",
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
    id: 6,
    title:"Kedinasan Pack",
    price: "IDR 20.000",
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
    id: 7,
    title:"Satwa Pack [SPECIAL EDITION]",
    price: "IDR 20.000",
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
    id: 8,
    title:"Bagasi Pack",
    price: "IDR 0 (Bonus)",
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
    id: 9,
    title:"Kereta Pembangkit Pack",
    price: "IDR 0 (Bonus)",
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
    id: 10,
    title:"Kereta Penolong Pack",
    price: "IDR 0 (Bonus)",
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
  
];
