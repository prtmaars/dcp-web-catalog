export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export interface Locomotives {
  id: number;
  title: string;
  price: string;
  bestseller: boolean;
  version: MultiLangText;
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

export const fullDescVersion2 = {
      id: `Fitur Lokomotif:

            1. Tombol Suara S.40 dan S.41
            - Ketika tombol diklik akan muncul suara.
            - Terdapat 2 versi S.40.
            - Tombol berada pada mini UI.

            2. Mode Realistik HSD dan Pemasir
            - HSD berkurang ketika loko berjalan, seperti aslinya.
            - Pasir berkurang ketika pemasir diaktifkan (Hanya berfungsi di TANE, TRS19, TRS22).
            - HSD dan pasir bisa diisi ulang.
            - Tombol isi ulang akan muncul ketika loko menginjak trigger.
            - Lokomotif tidak bisa berjalan ketika HSD habis.
            - Pemasir tidak bisa membantu loko selip ketika pasirnya habis.
            - Fitur ini bisa dimatikan.

            3. Mesin Lokomotif
            - Bisa dinyalakan/dimatikan.
            - Loko tidak bisa berjalan ketika mesin mati.
            - HSD tidak akan berkurang ketika mesin loko mati.

            4. Mode Kobong
            - Lokomotif akan kobong ketika mode ini dinyalakan (Berpotensi Bug di TRS22).

            5. Kecerahan Lampu Kabin
            - Diatur menggunakan slider.
            - Bisa dipecah menjadi kecerahan RGB.

            6. Kontrol Kamera
            - Kamera seperti freeintcam di PC.
            - Bisa maju-mundur, naik-turun, kanan-kiri.
            - Bisa direset ke posisi awal.
            - Tombol berada pada mini UI.

            7. Masinis dan Asisten
            - Bisa dihilangkan/dimunculkan.
            - Bisa menghadap SH/LH.
            - Kursi kabin otomatis mengikuti arah hadap masinis.

            8. Deadman
            - Suara deadman yang akan berbunyi setiap waktu tertentu.
            - Indikator deadman (Pengawas Keamanan) pada meja layan menyala ketika suara berbunyi.
            - Fitur ini bisa dimatikan.

            9. Radio Lokomotif
            - Suara radio loko berbunyi pada waktu random.
            - Indikator pada radio loko menyala.
            - Suara dan indikator sudah terintegrasi, akan menyala seperti aslinya.
            - Jam pada radio loko menyala, mengikuti jam pada Trainz.
            - Fitur ini bisa dimatikan.

            10. Animasi Kabin Interior
            - Tuas pada meja layan bergerak sesuai kontrol.
            - Tuas horn bergerak ketika horn dibunyikan.
            - Suara decitan roda ketika emergency brake.
            - Speedometer menyala dengan ketelitian 0.1 kmh.
            - Layar komponen MEDHA menyala.
            - Indikator peringatan pada dinding lokomotif menyala secara random.
            - Indikator selip roda pada meja layan menyala ketika lokomotif selip.
            - Layar suhu pada kontroller AC kabin menyala.
            - Animasi kedip2 dan layar menyala pada locotrack.

            11. Petugas Luar Kabin
            - Bisa dimunculkan/dihilangkan.
            - Terdapat 6 posisi muncul petugas.
            - Terdapat 3 pilihan petugas (Petugas Langsir 1 dan 2, Masinis/Asisten).
            - Petugas bisa digeser posisinya dan diputar arah hadapnya.
            - Posisi geser dan arah hadap bisa direset

            12. Lampu Semboyan Lokomotif
            - Terdapat 3 mode (Manual, Otomatis, dan Mode Strobo).
            - Tombol manual terdapat pada mini UI.
            - Mode otomatis, lampu menyala sesuai pilihan semboyan.
            - Mode strobo, lampu menyala random seperti strobo.
            - Lampu kabut dinyalakan manual.

            13. Semboyan Siang Lokomotif
            - Terdapat 2 mode (Manual dan Otomatis).
            - Mode otomatis, mesh muncul sesuai pilihan semboyan.
            - Terdapat papan S.21, S.22, dan S.24.
            - Terdapat papan "Stop Blok Terpasang".
            - Terdapat papan "Rem Parkir Terikat".
            - Animasi Semboyan segitiga di samping lampu utama.

            14. Komponen Tambahan Lokomotif
            - Stopblok pada roda, bisa dipasang/lepas.
            - Rantai, bisa dipasang/lepas.
            - Selang ABAR, bisa dipasang/lepas.

            15. Wiper Lokomotif
            - Bisa dinyalakan/dimatikan.
            - Posisi wiper pintu tetap menempel pada pintu ketika pintu dibuka.

            16. Pintu dan Jendela Lokomotif
            - Bisa dibuka sesuai kemauan.
            - Diatur menggunakan slider.

            17. Bendera Indonesia
            - Bisa dimunculkan/dihilangkan.
            - Terdapat 4 posisi muncul bendera.
            - Terdapat animasi berkibar.
            - Arah bendera bisa diputar sesuai kemauan.

            18. Cap Depo Lokomotif
            - Posisi bisa digeser atau dinaik/turunkan.
            - Terdapat 15 pilihan depo induk lokomotif.

            19. Informasi Semboyan.
            - Terdapat deskripsi untuk informasi semboyan (S.20 - S.27 dan S.45).
            - Bisa disembunyikan/dimunculkan.

            20. Detail
            - High detail eksterior.
            - High detail kabin interior.
            - High detail bogie dan coupler.

            21. Dependencies
            - Seluruh dependencies disertakan lengkap (tidak akan missdep kalau pasangnya benar).
            - Enginesound menggunakan milik IVRD.
            - Hornsound menggunakan milik IVRD.
            - Diberikan file pdf tutorial dan video tutorial pemasangan addons.
          `,
      en: `Locomotive Features:

            1. S.40 and S.41 Sound Buttons
            - A sound is played when the button is clicked.
            - There are two versions of the S.40.
            - The button is located on the mini UI.

            2. Realistic HSD and Sander Mode
            - HSD decreases as the locomotive moves, just like the real thing.
            - Sand decreases when the sander is activated (Only works on TANE, TRS19, TRS22).
            - HSD and sand are refillable.
            - The refill button appears when the locomotive presses the trigger.
            - The locomotive cannot move when the HSD runs out.
            - The sander cannot help the locomotive skid when the sand runs out.
            - This feature can be turned off.

            3. Locomotive Engine
            - Can be turned on/off.
            - The locomotive cannot move when the engine is off.
            - HSD will not decrease when the locomotive engine is off.

            4. Combo Mode
            - The locomotive will be combo when this mode is activated (Potentially bug in TRS22).

            5. Cabin Light Brightness
            - Adjusted using a slider.
            - Can be split into RGB brightness settings.

            6. Camera Control
            - The camera is similar to Freeintcam on a PC.
            - Can move forward and backward, up and down, and left and right.
            - Can be reset to its original position.
            - The buttons are located on the mini UI.

            7. Driver and Assistant
            - Can be removed or displayed.
            - Can face SH/LH.
            - The cabin seat automatically follows the driver's direction of face.

            8. Deadman
            - The deadman sound will sound at certain times.
            - The deadman indicator (Safety Supervisor) on the service desk lights up when the sound sounds.
            - This feature can be turned off.

            9. Locomotive Radio
            - The locomotive radio sound will sound at random times.
            - The indicator on the locomotive radio lights up.
            - Sounds and indicators are integrated and will light up like the original.
            - The clock on the locomotive radio lights up, following the Trainz clock.
            - This feature can be turned off.

            10. Interior Cabin Animation
            - The lever on the service desk moves according to the controls.
            - The horn lever moves when the horn is sounded.
            - Wheels squeal during emergency braking.
            - The speedometer lights up with an accuracy of 0.1 km/h.
            - The MEDHA component screen lights up.
            - The warning indicator on the locomotive wall lights up randomly.
            - The wheel slip indicator on the service desk lights up when the locomotive slips.
            - The temperature display on the cabin AC controller lights up.
            - The animation flashes and the screen lights up on the locomotive.

            11. Outside Cabin Attendant
            - Can be made to appear/disappear.
            - There are 6 positions for the attendant to appear.
            - There are 3 attendant options (Shutter Attendant 1 and 2, Engineer/Assistant).
            - The attendant can be moved and rotated.
            - The shift position and facing direction can be reset.

            12. Locomotive Signal Lights
            - There are 3 modes (Manual, Automatic, and Strobe Mode).
            - The manual button is located on the mini UI.
            - Automatic mode: the lights turn on according to the selected signal.
            - Strobe mode: the lights turn on randomly like a strobe.
            - The fog lights are turned on manually.

            13. Locomotive Signal Lights
            - There are 2 modes (Manual and Automatic).
            - Automatic mode: the mesh appears according to the selected signal.
            - There are S.21, S.22, and S.24 signs.
            - There is a "Stop Block Engaged" sign.
            - There is a "Parking Brake Engaged" sign.
            - Animated triangular signal next to the headlights.

            14. Additional Locomotive Components
            - Stop blocks on the wheels, can be installed/removed.
            - Chains, can be installed/removed.
            - ABAR hoses, can be installed/removed.

            15. Locomotive Wiper
            - Can be turned on/off.
            - The door wiper remains attached to the door when the door is opened.

            16. Locomotive Doors and Windows
            - Can be opened as desired.
            - Adjusted using a slider.

            17. Indonesian Flag
            - Can be displayed/displayed.
            - There are 4 flag display positions.
            - There is a waving animation.
            - The flag direction can be rotated as desired.

            18. Locomotive Depot Stamp
            - The position can be shifted or raised/lowered.
            - There are 15 main locomotive depot options.

            19. Signalling Information.
            - There is a description for the Signalling information (S.20 - S.27 and S.45).
            - Can be hidden/displayed.

            20. Details
            - High-detail exterior.
            - High-detail interior cabin.
            - High-detail bogie and coupler.

            21. Dependencies
            - All dependencies are included (no missdep if installed correctly).
            - Enginesound uses IVRD's.
            - Hornsound uses IVRD's.
            - A PDF tutorial and video tutorial on installing the add-ons are provided.
          `,
      ko: `기관차 기능:

            1. S.40 및 S.41 사운드 버튼
            - 버튼을 클릭하면 사운드가 재생됩니다.
            - S.40에는 두 가지 버전이 있습니다.
            - 버튼은 미니 UI에 있습니다.

            2. 사실적인 HSD 및 샌더 모드
            - 실제 기관차처럼 기관차가 움직이면 HSD가 감소합니다.
            - 샌더가 작동하면 모래가 감소합니다(TANE, TRS19, TRS22에서만 작동).
            - HSD와 모래는 재충전 가능합니다.
            - 기관차가 트리거를 누르면 재충전 버튼이 나타납니다.
            - HSD가 고갈되면 기관차가 움직일 수 없습니다.
            - 모래가 고갈되면 샌더가 기관차의 미끄러짐을 방지할 수 없습니다.
            - 이 기능은 끌 수 있습니다.

            3. 기관차 엔진
            - 켜고 끌 수 있습니다.
            - 엔진이 꺼져 있으면 기관차가 움직일 수 없습니다.
            - 기관차 엔진이 꺼져 있어도 HSD는 감소하지 않습니다.

            4. 콤보 모드
            - 이 모드가 활성화되면 기관차가 콤보 모드로 작동합니다(TRS22의 버그일 수 있음).

            5. 객실 조명 밝기
            - 슬라이더를 사용하여 조절합니다.
            - RGB 밝기 설정으로 분할할 수 있습니다.

            6. 카메라 제어
            - 카메라는 PC의 Freeintcam과 유사합니다.
            - 앞뒤, 상하, 좌우로 이동할 수 있습니다.
            - 원래 위치로 재설정할 수 있습니다.
            - 버튼은 미니 UI에 있습니다.

            7. 운전석 및 조수석
            - 제거 또는 표시 가능.
            - 상하좌우 방향 가능.
            - 객실 좌석은 운전자의 얼굴 방향을 자동으로 따릅니다.

            8. 데드맨
            - 데드맨 경고음이 특정 시간에 울립니다.
            - 경고음이 울리면 서비스 데스크의 데드맨 표시등(안전 관리자)이 켜집니다.
            - 이 기능은 끌 수 있습니다.

            9. 기관차 라디오
            - 기관차 라디오 소리가 무작위로 울립니다.
            - 기관차 라디오의 표시등이 켜집니다.
            - 소리와 표시등이 통합되어 있으며, 기존과 동일하게 켜집니다.
            - 기관차 라디오의 시계가 Trainz 시계에 따라 켜집니다.
            - 이 기능은 끌 수 있습니다.

            10. 실내 객실 애니메이션
            - 서비스 데스크의 레버가 조종 장치에 따라 움직입니다.
            - 경적 레버가 경적을 울리면 움직입니다.
            - 비상 제동 시 바퀴에서 끽끽거리는 소리가 납니다.
            - 속도계가 0.1km/h 단위로 켜집니다.
            - MEDHA 구성 요소 화면이 켜집니다.
            - 기관차 벽면의 경고 표시등이 무작위로 켜집니다.
            - 기관차가 미끄러지면 서비스 데스크의 바퀴 미끄러짐 표시등이 켜집니다.
            - 객실 AC 컨트롤러의 온도 표시기가 켜집니다.
            - 애니메이션이 깜박이고 기관차 화면에 불이 들어옵니다.

            11. 외부 객실 승무원
            - 나타나거나 사라지도록 설정할 수 있습니다.
            - 승무원은 6가지 위치로 나타날 수 있습니다.
            - 승무원 옵션은 3가지(셔터 승무원 1, 2, 기관사/보조)가 있습니다.
            - 승무원은 이동 및 회전할 수 있습니다.
            - 변속 위치 및 방향은 재설정할 수 있습니다.

            12. 기관차 신호등
            - 수동, 자동, 스트로브 모드의 3가지 모드가 있습니다.
            - 수동 버튼은 미니 UI에 있습니다.
            - 자동 모드: 선택한 신호에 따라 조명이 켜집니다.
            - 스트로브 모드: 스트로브처럼 조명이 무작위로 켜집니다.
            - 안개등은 수동으로 켜집니다.

            13. 기관차 신호등
            - 수동 및 자동의 2가지 모드가 있습니다.
            - 자동 모드: 선택한 신호에 따라 메시가 나타납니다.
            - S.21, S.22, S.24 표지판이 있습니다.
            - "정지 블록 작동" 표지판이 있습니다.
            - "주차 브레이크 작동" 표지판이 있습니다.
            - 헤드라이트 옆에 삼각형 애니메이션 신호가 있습니다.

            14. 기관차 추가 구성품
            - 바퀴에 있는 정지 블록은 설치/제거할 수 있습니다.
            - 체인은 설치/제거할 수 있습니다.
            - ABAR 호스는 설치/제거할 수 있습니다.

            15. 기관차 와이퍼
            - 켜고 끌 수 있습니다.
            - 문이 열려 있어도 와이퍼는 문에 부착된 상태로 유지됩니다.

            16. 기관차 문 및 창문
            - 원하는 대로 열 수 있습니다.
            - 슬라이더를 사용하여 조정합니다.

            17. 인도네시아 국기
            - 표시/전시 가능
            - 깃발 표시 위치는 4가지입니다.
            - 깃발 흔들기 애니메이션이 있습니다.
            - 깃발 방향을 원하는 대로 회전할 수 있습니다.

            18. 기관차 차고지 스탬프
            - 위치를 이동하거나 올리거나 내릴 수 있습니다.
            - 주요 기관차 차고지 옵션은 15가지입니다.

            19. 신호 정보
            - 신호 정보(S.20 - S.27 및 S.45)에 대한 설명이 있습니다.
            - 숨기거나 표시할 수 있습니다.

            20. 세부 정보
            - 고세밀 외관
            - 고세밀 내부 객실
            - 고세밀 보기 및 연결기

            21. 종속성
            - 모든 종속성이 포함되어 있습니다(정상적으로 설치된 경우 오류 없음).
            - Enginesound는 IVRD를 사용합니다.
            - Hornsound는 IVRD를 사용합니다.
            - 애드온 설치에 대한 PDF 튜토리얼과 비디오 튜토리얼이 제공됩니다.
            `,
    };

export const Locomotivess: Locomotives[] = [
  {
    id: 1,
    title: "BB 203 78 01",
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: true,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: true,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: true,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
    subcat: "White and Blue Edition",
    img: "/locomotives/2030203.jpg",
    gallery: [
      "/locomotives/2030203.jpg",
      "/locomotives/2030203-2.jpg",
      "/locomotives/2030203-3.jpg",
      "/locomotives/2030203-4.jpg",
      "/locomotives/2030203-5.jpg",
      "/locomotives/2030203-6.jpg",
      "/locomotives/2030203-7.png",
      "/locomotives/2030203-8.png",
      "/locomotives/parade.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 20,
    title: "CC 204 03 01",
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
    price: "IDR 50.000",
    bestseller: false,
    version: {
      id: "Versi 1.0",
      en: "Version 1.0",
      ko: "버전 1.0"
    },
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
  },
  {
    id: 26,
    title: "CC 201 89 16",
    price: "IDR 70.000",
    bestseller: true,
    version: {
      id: "🔥 Versi 2.0",
      en: "🔥 Version 2.0",
      ko: "🔥 버전 2.0"
    },
    subcat: "Frankenstein Edition",
    img: "/locomotives/2018916-1.jpg",
    gallery: [
      "/locomotives/2018916-1.jpg",
      "/locomotives/2018916-2.jpg",
      "/locomotives/2018916-3.jpg",
      "/locomotives/2018916-4.jpg",
      "/locomotives/2018916-5.jpg",
      "/locomotives/2018916-6.jpg",
      "/locomotives/2018916-7.jpg",
      "/locomotives/2018916-8.jpg",
      "/locomotives/2018916-9.jpg",
      "/locomotives/2018916-10.jpg",
      "/locomotives/2018916-11.jpg",
      "/locomotives/2018916-12.jpg",
      "/locomotives/2018916-13.jpg",
    ],
    fullDesc: fullDescVersion2,
  }
  
];
