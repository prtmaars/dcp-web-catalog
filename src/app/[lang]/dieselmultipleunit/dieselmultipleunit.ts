export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface DieselMultipleUnit {
  id: number;
  title: string;
  price: string;
  img: string;
  gallery: string[];
  fullDesc: MultiLangText;
}

export const dieselMultipleUnit: DieselMultipleUnit[] = [
  {
    id: 1,
    title:"Kereta Inspeksi Pack",
    price: "IDR 20.000",
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
    fullDesc: {
      id: `Isi Pack:
            1. K1 3 80 01 - Kereta Inspeksi 2 / Railtwo
            2. K1 3 82 02 - Kereta Inspeksi 2 / Railtwo
            3. K3 3 82 06 - Kereta Inspeksi 3 / Railthree
            4. K3 3 82 14 - Kereta Inspeksi 3 / Railthree
            5. K3 3 82 18 - Kereta Inspeksi 3 / Railthree
            6. K1 3 80 01 - Kereta Istimewa
            7. K1 3 82 02 - Kereta Istimewa
            8. K2 3 82 04 - Kereta Penolong / NR
            9. K2 3 82 20 - Kereta Penolong / NR

            Fitur:
            1. S21 Siang (terdapat s21 yang bisa dipasang dan dilepas)
            2. S21 Malam Nyala/Mati (terdiri dari 8 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            3. Lampu Rotator Nyala/Mati
            4. Lampu Kabut Nyala/Mati (terpisah dari lampu utama)
            5. HD Digital Skin
            6. Medium Poly
            7. Suara Sirine
            8. Mode Malam Otomatis`,
      en: `Pack Contents:
            1. K138001 - Inspection Cart 2 / Railtwo
            2. K138202 - Inspection Cart 2 / Railtwo
            3. K338206 - Inspection Cart 3 / Railthree
            4. K338214 - Inspection Cart 3 / Railthree
            5. K338218 - Inspection Cart 3 / Railthree
            6. K138001 - Special Cart
            7. K138202 - Special Cart
            8. K238204 - Rescue Cart / NR
            9. K238220 - Rescue Cart / NR

            Features:
            1. S21 Day (with detachable S21)
            2. S21 Night On/Off (consists of 8 lights, each of which can be turned on and off separately and is shaped like a corona)
            3. Rotator Lights On/Off
            4. Fog Lights On/Off (separate from the main lights)
            5. HD Digital Skin
            6. Medium Poly
            7. Siren Sound
            8. Automatic Night Mode`,
      ko: `패키지 구성품:
            1. K138001 - 점검 카트 2 / 레일투
            2. K138202 - 점검 카트 2 / 레일투
            3. K338206 - 점검 카트 3 / 레일쓰리
            4. K338214 - 점검 카트 3 / 레일쓰리
            5. K338218 - 점검 카트 3 / 레일쓰리
            6. K138001 - 특수 카트
            7. K138202 - 특수 카트
            8. K238204 - 구조 카트 / NR
            9. K238220 - 구조 카트 / NR

            특징:
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
    id: 2,
    title:"Rail Clinic Pack",
    price: "IDR 20.000",
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
    fullDesc: {
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
            12. K2 3 80 02 - NR Pikachu

            Fitur:
            1. S21 Siang (terdapat s21 yang bisa dipasang dan dilepas)
            2. S21 Malam Nyala/Mati (terdiri dari 8 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            3. Lampu Rotator Nyala/Mati
            4. Lampu Kabut Nyala/Mati (terpisah dari lampu utama)
            5. HD Digital Skin
            6. Medium Poly
            7. Suara Sirine
            8. Mode Malam Otomatis
            9. Semboyan 26 & 27`,
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
            12. K2 3 80 02 - NR Pikachu 

            Feature: 
            1. S21 Daytime (S21 is available for attaching and detaching)
            2. S21 Nighttime On/Off (consists of 8 lights, each of which can be turned on and off separately and has a corona shape)
            3. Rotating Lights On/Off
            4. Fog Lights On/Off (separate from the main lights)
            5. HD Digital Skin
            6. Medium Poly
            7. Siren Sound
            8. Automatic Night Mode
            9. Mottos 26 & 27`,
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
            12. K2 3 80 02 - NR 피카츄

            특징:
            1. S21 주간 주행 모드 (S21은 탈부착 가능)
            2. S21 야간 주행 모드 (8개의 조명으로 구성되며, 각 조명은 개별적으로 켜고 끌 수 있으며 코로나 형태입니다)
            3. 회전 조명 켜기/끄기
            4. 안개등 켜기/끄기 (주 조명과 분리)
            5. HD 디지털 스킨
            6. 중간 폴리
            7. 사이렌 ​​소리
            8. 자동 야간 모드
            9. 모토 26 & 27`,
    },
  },
  {
    id: 3,
    title:"MCW 302",
    price: "IDR 20.000",
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
            10. Slogan 26/27 cover mesh appears/disappears (via surveyor)`,
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
            10. Slogan 26/27 커버 메시가 나타나거나 사라집니다 (Surveyor를 통해)`,
    },
  },
  {
    id: 4,
    title:"Minnion Pack",
    price: "IDR 20.000",
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
    fullDesc: {
      id: `Isi Pack:
            1. SI 3 09 01 - KAIS SEMERU
            2. SI 3 11 01 - KAIS KALDERA TOBA
            3. SI 3 15 01 - KAIS MERBABU
            4. SI 3 15 02 - KAIS MERBABU
            5. SI 3 16 01 - KAIS KELUD
            6. SI 3 16 02 - KAIS KELUD
            7. SU 3 14 01 - KAUR CIREMAI
            8. SU 3 16 01 - KAUR GALUNGGUNG
            9. SU 3 17 02 - KAUR GUNUNG GAJAH

            Fitur:
            1. S21 Siang (terdapat 2 versi s21 yang bisa dipasang dan dilepas)
            2. S21 Malam Nyala/Mati (terdiri dari 10 lampu yang masing-masing bisa dinyalakan dan dimatikan secara terpisah dan berbentuk corona)
            3. Lampu Semboyan di muka Nyala/Mati
            4. Lampu Kabut Nyala/Mati (terpisah dari lampu utama)
            5. HD Digital Skin
            6. Medium Poly
            7. Suara Sirine`,
      en: `Pack Contents:
            1. SI 3 09 01 - KAIS SEMERU
            2. SI 3 11 01 - KAIS TOBA CALDERA
            3. SI 3 15 01 - KAIS MERBABU
            4. SI 3 15 02 - KAIS MERBABU
            5. SI 3 16 01 - KAIS KELUD
            6. SI 3 16 02 - KAIS KELUD
            7. SU 3 14 01 - KAUR CIREMAI
            8. SU 3 16 01 - KAUR GALUNGGUNG
            9. SU 3 17 02 - KAUR GUNUNG GAJAH

            Features:
            1. S21 Day (there are two versions of the S21 that can be attached and removed)
            2. S21 Night On/Off (consists of 10 lights) (each of which can be turned on and off separately and is shaped like a corona)
            3. Front Side Marker Lights (On/Off)
            4. Fog Lights (Separate from the main lights)
            5. HD Digital Skin
            6. Medium Poly
            7. Siren Sound`,
      ko: `팩 내용:
            1. SI 3 09 01 - 카이스 세메루
            2. SI 3 11 01 - 카이스 토바 칼데라
            3. 시 3 15 01 - 카이스 메르바부
            4. 시 3 15 02 - 카이스 메르바부
            5. SI 3 16 01 - 카이스 켈루드
            6. SI 3 16 02 - 카이스 켈루드
            7. SU 3 14 01 - 카우르 시레마이
            8. SU 3 16 01 - 카우르 갈룽궁
            9. SU 3 17 02 - 카우르 구룽 가자

            특징:
            1. S21 Day (S21에는 탈부착이 가능한 버전이 2가지 있습니다)
            2. S21 Night On/Off (10개의 조명으로 구성) (각각 개별적으로 켜고 끌 수 있으며 코로나 모양입니다)
            3. 전면 사이드 마커등 (켜기/끄기)
            4. 안개등 (주등과 분리)
            5. HD 디지털 스킨
            6. 중간 폴리
            7. 사이렌 ​​소리`,
    },
  },
  
];
