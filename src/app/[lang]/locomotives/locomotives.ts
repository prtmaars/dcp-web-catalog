export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export type ProductType = "standalone" | "all-in-one";
export type ProductVersion = "V.1" | "V.2";
export type ProductStatus = "final" | "discontinued";


export type LocomotiveEdition =
  | "All-in-One Edition"
  | "Red and Blue Edition"
  | "White and Blue Edition"
  | "Vintage Edition"
  | "Albino Edition"
  | "Frankenstein Edition"
  | "Standard Edition";

export interface Locomotives {
  id: number;
  title: string;
  price: string;
  bestseller: boolean;
  type: ProductType;
  version?: ProductVersion;
  status?: ProductStatus;
  edition: LocomotiveEdition;
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

            18. Plat Nomor Lokomotif
            - Posisi bisa digeser atau dinaik/turunkan.
            - Nomor bisa diatur sesuai kemauan perdigitnya.

            19. Cap Depo Lokomotif
            - Posisi bisa digeser atau dinaik/turunkan.
            - Terdapat 15 pilihan depo induk lokomotif.

            20. Informasi Semboyan.
            - Terdapat deskripsi untuk informasi semboyan (S.20 - S.27 dan S.45).
            - Bisa disembunyikan/dimunculkan.

            21. Detail
            - High detail eksterior.
            - High detail kabin interior.
            - High detail bogie dan coupler.

            22. Dependencies
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
            
            18. Locomotive License Plate
            - The position can be moved or raised/lowered.
            - The number can be adjusted according to your preference per digit.

            19. Locomotive Depot Stamp
            - The position can be moved or raised/lowered.
            - There are 15 main locomotive depot options.

            20. Motto Information.
            - There is a description for the motto information (S.20 - S.27 and S.45).
            - Can be hidden/unhidden.

            21. Details
            - Highly detailed exterior.
            - Highly detailed interior cabin.
            - Highly detailed bogie and coupler.

            22. Dependencies
            - All dependencies are included (will not missdep if installed correctly).
            - Engine sound is from IVRD.
            - Horn sound is from IVRD.
            - A PDF tutorial file and a video tutorial are provided for installing add-ons.
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
            
            18. 기관차 번호판
            - 위치를 이동하거나 위아래로 조절할 수 있습니다.
            - 숫자는 각 자릿수별로 원하는 대로 조정할 수 있습니다.

            19. 기관차 차고 스탬프
            - 위치를 이동하거나 위아래로 조절할 수 있습니다.
            - 15가지 주요 기관차 차고 스탬프 옵션이 있습니다.

            20. 표어 정보
            - 표어 정보에 대한 설명이 있습니다(20~27페이지 및 45페이지).
            - 숨기거나 표시할 수 있습니다.

            21. 세부 사항
            - 매우 정교한 외관.
            - 매우 정교한 내부 기관실.
            - 매우 정교한 보기 및 연결기.

            22. 종속성
            - 모든 종속성이 포함되어 있습니다(올바르게 설치하면 종속성 누락 없음).
            - 엔진 사운드는 IVRD에서 가져왔습니다.
            - 경적 사운드는 IVRD에서 가져왔습니다.
            - 애드온 설치를 위한 PDF 튜토리얼 파일과 비디오 튜토리얼이 제공됩니다.
            `,
    };

export const Locomotivess: Locomotives[] = [
  {
    id: 1,
    title: "BB 203 78 01",
    price: "IDR 50.000",
    bestseller: false,
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Red and Blue Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Red and Blue Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Red and Blue Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Red and Blue Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Vintage Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Vintage Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Vintage Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Albino Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Vintage Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Red and Blue Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "White and Blue Edition",
    img: "/locomotives/2030203-5.jpg",
    gallery: [
      "/locomotives/2030203.png",
      "/locomotives/2030203-2.png",
      "/locomotives/2030203-3.png",
      "/locomotives/2030203-4.png",
      "/locomotives/2030203-5.jpg",
      "/locomotives/2030203-6.jpg",
      "/locomotives/2030203-7.jpg",
      "/locomotives/2030203-8.jpg",
      "/locomotives/parade.png",
    ],
    fullDesc: fullDescStandard,
  },
  {
    id: 20,
    title: "CC 204 03 01",
    price: "IDR 50.000",
    bestseller: false,
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "Standard Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "White and Blue Edition",
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
    type: "standalone",
    version: "V.1",
    edition: "White and Blue Edition",
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
    type: "standalone",
    version: "V.2",
    edition: "Frankenstein Edition",
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
  },





  {
    id: 95,
    title: "CC 201 Batch 3",
    price: "IDR 50.000",
    bestseller: true,
    type: "all-in-one",
    version: "V.1",
    status: "final",
    edition: "All-in-One Edition",
    img: "/allinone/c1b3.jpg",
    gallery: [
          "/allinone/c1b3-1.jpeg",
          "/allinone/c1b3-2.jpeg",
          "/allinone/c1b3-3.jpeg",
          "/allinone/c1b3-4.jpeg",
          "/allinone/c1b3-5.jpg",
          "/allinone/c1b3-6.jpg",
          "/allinone/c1b3-7.jpg",
          "/allinone/c1b3-8.jpg",
          "/allinone/c1b3-9.jpg",
          "/allinone/c1b3-10.jpg",
          "/allinone/c1b3-11.jpeg",
          "/allinone/c1b3-12.jpeg",
          "/allinone/c1b3-13.jpg",
    ],
    fullDesc: {
      id: `Fitur :
          (+) High Exterior Details
          (+) Kabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Efek Guncangan saat berjalan

          Script (via Surveyor) :
          (+) Pasang AC
          (+) Pasang Kotak Multiple Unit (MU Box)
          (+) Pasang Teralis
          (+) Pasang Wiper Kaca Tengah
          (+) Ganti Livery (tersedia 17 pilihan)
          (+) Ganti Warna Bogie (tersedia 5 pilihan)
          (+) Ganti Warna Teralis (tersedia 3 pilihan)
          (+) Ganti Warna Cow Catcher (tersedia 2 pilihan)
          (+) Ganti Warna Deckplat
          (+) Ganti Plat Nomor (tersedia penomoran lama dan baru)
          (+) Ganti Cap Dipo Induk
          (+) Ganti Cow Cathcer (Sekop dan Biasa)

          Script (via Driver) :
          (+) Animasi Semboyan Segitiga (dekat lampu utama)
          (+) Animasi Pintu Kabin
          (+) Animasi Jendela Kabin
          (+) Animasi Teralis Kabin
          (+) Animasi Wiper
          (+) Lampu Kabut (terpisah dari lampu utama)
          (+) Lampu Semboyan
          (+) Rantai dan Selang ABAR (sambung/lepas)
          (+) Papan Semboyan 21 Siang

          (-) Bug pada kaca kabin, sehingga tidak dapat melihat corona pada sinyal, dsb. Agar bisa melihat corona sinyal, silahkan hilangkan kaca kabin menggunakan script.

          Keterangan Dependencies :
          (+) Bogie milik DCP
          (+) Engine Sound milik IVRD
          (+) Horn Sound milik IVRD

          Bisa digunakan untuk Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          Lokomotif ini sudah versi final, tidak ada update.
          `,
      en: `Features:
          (+) High Exterior Details
          (+) Cabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Shock Effects when Driving

          Script (via Surveyor):
          (+) Install AC
          (+) Install Multiple Unit Box (MU Box)
          (+) Install Trellis
          (+) Install Center Windshield Wiper
          (+) Change Livery (17 options available)
          (+) Change Bogie Color (5 options available)
          (+) Change Trellis Color (3 options available)
          (+) Change Cow Catcher Color (2 options available)
          (+) Change Deckplate Color
          (+) Change License Plate (old and new numbering available)
          (+) Change Main Depot Stamp
          (+) Change Cow Catcher (Spade and Regular)

          Script (via Driver):
          (+) Triangle Motto Animation (near the headlights)
          (+) Cabin Door Animation
          (+) Window Animation Cabin
          (+) Cabin Trellis Animation
          (+) Wiper Animation
          (+) Fog Lights (separate from the main lights)
          (+) Slogan Lights
          (+) ABAR Chain and Hose (connect/disconnect)
          (+) 21 Siang Slogan Board

          (-) A bug with the cabin window prevents you from seeing the corona on signals, etc. To see the corona on signals, please remove the cabin window using a script.

          Dependencies Description:
          (+) Bogie owned by DCP
          (+) Engine Sound owned by IVRD
          (+) Horn Sound owned by IVRD

          Can be used with Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          This locomotive is the final version, no updates are available.
          `,
      ko: `특징:
          (+) 뛰어난 외관 디테일
          (+) 객실 내부
          (+) 고화질 보기
          (+) 고화질 연결기
          (+) 주행 시 충격 효과

          스크립트(Surveyor 이용):
          (+) 에어컨 설치
          (+) 다중 유닛 박스(MU 박스) 설치
          (+) 트렐리스 설치
          (+) 중앙 와이퍼 설치
          (+) 도색 변경 (17가지 옵션)
          (+) 보기 색상 변경 (5가지 옵션)
          (+) 트렐리스 색상 변경 (3가지 옵션)
          (+) 소 방지 장치 색상 변경 (2가지 옵션)
          (+) 데크 플레이트 색상 변경
          (+) 번호판 변경 (구형 및 신형 번호 사용 가능)
          (+) 차량기지 스탬프 변경
          (+) 소 방지 장치 변경 (삽형 및 일반형)

          스크립트(Driver 이용):
          (+) 삼각형 모토 애니메이션 (헤드라이트 근처)
          (+) 객실 문 애니메이션
          (+) 객실 창문 애니메이션
          (+) 객실 트렐리스 애니메이션
          (+) 와이퍼 애니메이션
          (+) 안개등 (주등과 별도 작동)
          (+) 슬로건 조명
          (+) ABAR 체인 및 호스 (연결/분리)
          (+) 21 Siang 슬로건 안내판

          (-) 운전실 창문 버그로 인해 신호등 등의 코로나 효과를 볼 수 없습니다. 신호등 코로나 효과를 보려면 스크립트를 사용하여 운전실 창문을 제거하십시오.

          필수 구성 요소:
          (+) 보기(Bogie) - DCP 제작
          (+) 엔진 사운드 - IVRD 제작
          (+) 경적 사운드 - IVRD 제작

          Trainz Android, TS12HF4, T:ANE, TRS19, TRS22에서 사용 가능
          이 기관차는 최종 버전이며, 더 이상 업데이트가 제공되지 않습니다.
          `,
    },
  },
  {
    id: 96,
    title: "CC 201 Aerodinamis",
    price: "IDR 50.000",
    bestseller: false,
    type: "all-in-one",
    version: "V.1",
    status: "final",
    edition: "All-in-One Edition",
    img: "/allinone/c1aero.jpg",
    gallery: [
        "/allinone/c1aero-20.jpeg",
        "/allinone/c1aero-1.jpeg",
        "/allinone/c1aero-2.jpeg",
        "/allinone/c1aero-3.jpeg",
        "/allinone/c1aero-4.jpeg",
        "/allinone/c1aero-5.jpeg",
        "/allinone/c1aero-6.jpeg",
        "/allinone/c1aero-7.jpeg",
        "/allinone/c1aero-8.jpeg",
        "/allinone/c1aero-9.jpeg",
        "/allinone/c1aero-10.jpeg",
        "/allinone/c1aero-11.jpeg",
        "/allinone/c1aero-12.jpeg",
        "/allinone/c1aero-13.jpeg",
        "/allinone/c1aero-14.jpeg",
        "/allinone/c1aero-15.jpg",
        "/allinone/c1aero-16.jpg",
        "/allinone/c1aero-17.jpeg",
        "/allinone/c1aero-18.jpeg",
        "/allinone/c1aero-19.jpeg",
    ],
    fullDesc: {
      id: `Fitur :
          (+) High Exterior Details
          (+) Kabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Efek Guncangan saat berjalan

          Script (via Surveyor) :
          (+) Ganti Plat Nomor (tersedia penomoran lama dan baru)
          (+) Ganti Cap Depo Induk
          (+) Ganti Model Spion
          (+) Ganti Model Ventilasi (bawah kaca)
          (+) Ganti Model Handrail Kabin (bawah kaca)
          (+) Ganti Model Lampu Kabut
          (+) Ganti Model Talang Pintu
          (+) Ganti Model Kaca Depan (Kaca Kecil dan Kaca Normal)
          (+) Ganti Model Atap
          (+) Ganti Model Antena
          (+) Ganti Model Suling
          (+) Ganti Model Grill
          (+) Ganti Model Deckplat
          (+) Ganti Model Cow Catcher
          (+) Ganti Warna Cow Catcher
          (+) Ganti Warna Teralis Mesin
          (+) Pasang Teralis Kabin
          (+) Pasang Teralis Lampu Semboyan
          (+) Pasang Lonceng
          (+) Pasang Stopblok
          ​(+) Pasang Hanger Mesin
          (+) Ganti Livery Lokomotif

          Script (via Driver) :
          (+) Nyala Mati Mesin (BETA)
          (+) Nyala Mati Lampu Kabin
          (+) Nyala Mati Lampu Kabut (terpisah dari lampu utama)
          (+) Nyala Mati Lampu Semboyan
          (+) Animasi Semboyan 26 27 Siang
          (+) Animasi Kran Multiple Unit pada Kabin
          (+) Animasi Kipas Kabin
          (+) Animasi Wiper
          (+) Animasi Pintu
          (+) Animasi Jendela
          (+) Animasi Teralis
          (+) Animasi Spion
          (+) Pasang Lepas Semboyan 21 Siang
          (+) Pasang Lepas Rantai
          (+) Pasang Lepas Selang ABAR
          (+) Pasang Lepas Selang Angin Multiple Unit
          (+) Pasang Lepas Kabel Multiple Unit
          (+) Pasang Lepas Stopblok
          (+) Ganti Model Radio
          (+) Ganti Model Tempat Jadwal

          (-) Bug pada kaca kabin, sehingga tidak dapat melihat corona pada sinyal, dsb. Agar bisa melihat corona sinyal, silahkan hilangkan kaca kabin menggunakan script.

          Keterangan Dependencies :
          (+) Bogie milik DCP
          (+) Engine Sound milik IVRD
          (+) Horn Sound milik IVRD

          Bisa digunakan untuk Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          Lokomotif ini sudah versi final, tidak ada update.
          `,
      en: `Features:
          (+) High Exterior Details
          (+) Cabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Shock Effects when Driving

          Script (via Surveyor):
          (+) Change License Plate (old and new numbering available)
          (+) Change Main Depot Stamp
          (+) Change Mirror Model
          (+) Change Ventilation Model (under glass)
          (+) Change Cabin Handrail Model (under glass)
          (+) Change Fog Lamp Model
          (+) Change Door Gutter Model
          (+) Change Windshield Model (Small Glass and Normal Glass)
          (+) Change Roof Model
          (+) Change Antenna Model
          (+) Change Flute Model
          (+) Change Grill Model
          (+) Change Deckplate Model
          (+) Change Cow Catcher Model
          (+) Change Cow Catcher Color
          (+) Change Engine Grille Color
          (+) Install Cabin Grille
          (+) Install Signature Light Grille
          (+) Install Bell
          (+) Install a Stop Block
          ​(+) Install an Engine Hanger
          (+) Change Locomotive Livery

          Script (via Driver):
          (+) Engine On/Off (BETA)
          (+) Cabin Lights On/Off
          (+) Fog Lights On/Off (separate from main lights)
          (+) Motto Lights On/Off
          (+) 26/27 Noon Motto Animation
          (+) Multiple Unit Cabin Faucet Animation
          (+) Cabin Fan Animation
          (+) Wiper Animation
          (+) Door Animation
          (+) Window Animation
          (+) Grille Animation
          (+) Mirror Animation
          (+) Install/Remove the 21 Noon Motto
          (+) Install/Remove the Chain
          (+) Install/Remove the ABAR Hose
          (+) Install/Remove the Multiple Unit Air Hose
          (+) Install/Remove the Multiple Unit Cable
          (+) Install/Remove the Stop Block
          (+) Change the Radio Model
          (+) Change the Schedule Place Model

          (-) Bug on the cabin window, preventing the corona from being visible signals, etc. To see the corona signal, please remove the cabin window using a script.

          Dependencies Description:
          (+) Bogie owned by DCP
          (+) Engine Sound owned by IVRD
          (+) Horn Sound owned by IVRD

          Can be used with Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          This locomotive is the final version, no updates are available.
          `,
      ko: `특징:
          (+) 뛰어난 외관 디테일
          (+) 운전실 내부
          (+) 고화질 보기
          (+) 고화질 연결기
          (+) 주행 시 충격 효과

          스크립트(Surveyor 사용):
          (+) 번호판 변경 (구형 및 신형 번호 사용 가능)
          (+) 차량기지 스탬프 변경
          (+) 사이드미러 모델 변경
          (+) 환풍구 모델 변경 (유리 아래)
          (+) 운전실 난간 모델 변경 (유리 아래)
          (+) 안개등 모델 변경
          (+) 도어 홈 모델 변경
          (+) 앞유리 모델 변경 (소형 유리 및 일반 유리)
          (+) 지붕 모델 변경
          (+) 안테나 모델 변경
          (+) 플루트 모델 변경
          (+) 그릴 모델 변경
          (+) 데크 플레이트 모델 변경
          (+) 소 방지 장치 모델 변경
          (+) 소 방지 장치 색상 변경
          (+) 엔진 그릴 색상 변경
          (+) 운전실 그릴 설치
          (+) 시그니처 라이트 그릴 설치
          (+) 경종 설치
          (+) 정지 블록 설치
          (+) 엔진 격납고 설치
          (+) 기관차 도색 변경

          스크립트(Driver 사용):
          (+) 엔진 켜기/끄기 (베타)
          (+) 운전실 조명 켜기/끄기
          (+) 안개등 켜기/끄기 (주 안개등과 별도 작동) 조명)
          (+) 모토 조명 켜기/끄기
          (+) 정오 26/27시 모토 애니메이션
          (+) 다중 유닛 객실 수도꼭지 애니메이션
          (+) 객실 팬 애니메이션
          (+) 와이퍼 애니메이션
          (+) 문 애니메이션
          (+) 창문 애니메이션
          (+) 그릴 애니메이션
          (+) 거울 애니메이션
          (+) 정오 21시 모토 설치/제거
          (+) 체인 설치/제거
          (+) ABAR 호스 설치/제거
          (+) 다중 유닛 에어 호스 설치/제거
          (+) 다중 유닛 케이블 설치/제거
          (+) 정지 블록 설치/제거
          (+) 라디오 모델 변경
          (+) 스케줄 위치 모델 변경

          (-) 객실 창문에 버그가 있어 코로나 신호 등이 보이지 않습니다. 코로나 신호를 보려면 스크립트를 사용하여 객실 창문을 제거하십시오.

          필수 구성 요소 설명:
          (+) 보기(Bogie) - DCP 제작
          (+) 엔진 사운드 - IVRD 제작
          (+) 경적 사운드 - IVRD 제작

          Trainz Android, TS12HF4, T:ANE, TRS19, TRS22와 호환 가능
          이 기관차는 최종 버전이며, 더 이상 업데이트가 제공되지 않습니다.
          `,
    },
  },
  {
    id: 97,
    title: "CC 203 All-in-One",
    price: "IDR 50.000",
    bestseller: true,
    type: "all-in-one",
    version: "V.1",
    status: "final",
    edition: "All-in-One Edition",
    img: "/allinone/c3aio.jpg",
    gallery: [
        "/allinone/c3aio-1.jpg",
        "/allinone/c3aio-2.png",
        "/allinone/c3aio-3.png",
        "/allinone/c3aio-4.png",
        "/allinone/c3aio-5.png",
        "/allinone/c3aio-6.png",
        "/allinone/c3aio-7.png",
        "/allinone/c3aio-8.png",
        "/allinone/c3aio-9.png",
        "/allinone/c3aio-10.png",
        "/allinone/c3aio-11.png",
        "/allinone/c3aio-12.png",
        "/allinone/c3aio-13.png",
        "/allinone/c3aio-14.png",
        "/allinone/c3aio-15.png",
        "/allinone/c3aio-16.png",
        "/allinone/c3aio-17.jpg",
        "/allinone/c3aio-18.jpg",
        "/allinone/c3aio-19.jpg",
        "/allinone/c3aio-20.jpg",
        "/allinone/c3aio-21.jpg",
        "/allinone/c3aio-22.jpg",
        "/allinone/c3aio-23.jpg",
        "/allinone/c3aio-24.jpg",
        "/allinone/c3aio-25.jpg",
        "/allinone/c3aio-26.jpg",
        "/allinone/c3aio-27.jpg",
        "/allinone/c3aio-28.jpg",
        "/allinone/c3aio-29.jpg",
        "/allinone/c3aio-30.jpeg",
        "/allinone/c3aio-31.jpeg",
    ],
    fullDesc: {
      id: `Fitur :
          (+) High Exterior Details
          (+) Kabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Efek Guncangan saat berjalan

          Script (via Surveyor) :
          (+) Ganti Plat Nomor (tersedia penomoran lama dan baru)
          (+) Ganti Cap Depo Induk
          (+) Ganti Model Atap (AC)
          (+) Ganti Model Kabin
          (+) Ganti Model Jendela
          (+) Ganti Model Spion
          (+) Ganti Model Ventilasi (bawah kaca)
          (+) Ganti Model Handrail Kabin (bawah kaca)
          (+) Ganti Model Lampu Kabut
          (+) Ganti Model Talang Pintu
          (+) Ganti Model Antena
          (+) Ganti Model Tangga
          (+) Ganti Model Grill
          (+) Ganti Model Deckplat
          (+) Ganti Model Cow Catcher
          (+) Ganti Warna Cow Catcher
          (+) Pasang Teralis
          (+) Pasang Lonceng
          (+) Pasang Stopblok
          (+) Ganti Livery Lokomotif

          Script (via Driver) :
          (+) Nyala Mati Mesin (BETA)
          (+) Nyala Mati Lampu Kabin
          (+) Nyala Mati Lampu Kabut (terpisah dari lampu utama)
          (+) Nyala Mati Lampu Semboyan
          (+) Animasi Semboyan 26 27 Siang
          (+) Animasi Kran Multiple Unit pada Kabin
          (+) Animasi Kipas AC
          (+) Animasi Wiper
          (+) Animasi Pintu
          (+) Animasi Jendela
          (+) Animasi Teralis
          (+) Animasi Spion
          (+) Pasang Lepas Semboyan 21 Siang
          (+) Pasang Lepas Rantai
          (+) Pasang Lepas Selang ABAR
          (+) Pasang Lepas Selang Angin Multiple Unit
          (+) Pasang Lepas Kabel Multiple Unit
          (+) Pasang Lepas Stopblok
          (+) Ganti Model Radio
          (+) Ganti Model Tempat Jadwal

          (-) Bug pada kaca kabin, sehingga tidak dapat melihat corona pada sinyal, dsb. Agar bisa melihat corona sinyal, silahkan hilangkan kaca kabin menggunakan script.

          Keterangan Dependencies :
          (+) Bogie milik DCP
          (+) Engine Sound milik IVRD
          (+) Horn Sound milik IVRD

          Bisa digunakan untuk Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          Lokomotif ini sudah versi final, tidak ada update.
          `,
      en: `Features:
          (+) High Exterior Details
          (+) Cabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Shock Effects when Driving

          Script (via Surveyor):
          (+) Change License Plate (old and new numbering available)
          (+) Change Main Depot Stamp
          (+) Change Roof Model (AC)
          (+) Change Cabin Model
          (+) Change Window Model
          (+) Change Mirror Model
          (+) Change Ventilation Model (under glass)
          (+) Change Cabin Handrail Model (under glass)
          (+) Change Fog Lamp Model
          (+) Change Door Gutter Model
          (+) Change Antenna Model
          (+) Change Stair Model
          (+) Change Grill Model
          (+) Change Deckplate Model
          (+) Change Cow Catcher Model
          (+) Change Cow Catcher Color
          (+) Install Trellis
          (+) Install Bell
          (+) Install Stop Block
          (+) Change Locomotive Livery

          Script (via Driver) :
          (+) Engine On/Off (BETA)
          (+) Cabin Lights On/Off
          (+) Fog Lights On/Off (separate from headlights)
          (+) Slogan Lights On/Off
          (+) Animation of Slogan 26/27 Noon
          (+) Animation of Multiple Cabin Units with Valves
          (+) AC Fan Animation
          (+) Wiper Animation
          (+) Door Animation
          (+) Window Animation
          (+) Grille Animation
          (+) Mirror Animation
          (+) Install/Remove Slogan 21 Noon
          (+) Install/Remove Chain
          (+) Install/Remove ABAR Hose
          (+) Install/Remove Air Hose on Multiple Units
          (+) Install/Remove Cable on Multiple Units
          (+) Install/Remove Stop Block
          (+) Change Radio Model
          (+) Change Schedule Location Model

          (-) Bug on the cabin window, preventing you from seeing corona on the signal, etc. To see the corona on the signal, please remove the cabin window using a script.

          Dependencies Description:
          (+) Bogie owned by DCP
          (+) Engine Sound owned by IVRD
          (+) Horn Sound owned by IVRD

          Can be used with Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          This locomotive is the final version, no updates are available.
          `, 
      ko: `특징:
          (+) 뛰어난 외관 디테일
          (+) 객실 내부
          (+) 고화질 보기
          (+) 고화질 연결기
          (+) 주행 시 충격 효과

          스크립트(Surveyor 사용):
          (+) 번호판 변경 (구형 및 신형 번호 사용 가능)
          (+) 차량기지 스탬프 변경
          (+) 지붕 모델 변경 (에어컨)
          (+) 객실 모델 변경
          (+) 창문 모델 변경
          (+) 거울 모델 변경
          (+) 환기구 모델 변경 (유리 아래)
          (+) 객실 난간 모델 변경 (유리 아래)
          (+) 안개등 모델 변경
          (+) 도어 홈 모델 변경
          (+) 안테나 모델 변경
          (+) 계단 모델 변경
          (+) 그릴 모델 변경
          (+) 데크 플레이트 모델 변경
          (+) 소 방지 장치 모델 변경
          (+) 소 방지 장치 색상 변경
          (+) 격자 설치
          (+) 종 설치
          (+) 정지 블록 설치
          (+) 기관차 도색 변경

          스크립트(Driver 사용):
          (+) 엔진 켜기/끄기 (베타)
          (+) 객실 조명 켜기/끄기
          (+) 안개등 켜기/끄기 (전조등과 별도)
          (+) 슬로건 조명 켜기/끄기
          (+) 슬로건 26/27 애니메이션 정오
          (+) 밸브가 있는 여러 객실 유닛 애니메이션
          (+) 에어컨 팬 애니메이션
          (+) 와이퍼 애니메이션
          (+) 문 애니메이션
          (+) 창문 애니메이션
          (+) 그릴 애니메이션
          (+) 거울 애니메이션
          (+) 슬로건 '21 정오' 설치/제거
          (+) 체인 설치/제거
          (+) ABAR 호스 설치/제거
          (+) 여러 유닛에 공기 호스 설치/제거
          (+) 여러 유닛에 케이블 설치/제거
          (+) 정지 블록 설치/제거
          (+) 라디오 모델 변경
          (+) 운행 시간표 위치 모델 변경

          (-) 객실 창문에 버그가 있어 신호등의 코로나 현상 등을 볼 수 없습니다. 신호등의 코로나 현상을 보려면 스크립트를 사용하여 객실 창문을 제거하십시오.

          종속성 설명:
          (+) 보기(Bogie) - DCP 소유
          (+) 엔진 사운드 - IVRD 소유
          (+) 경적 사운드 - IVRD 소유

          Trainz Android, TS12HF4, T:ANE, TRS19, TRS22에서 사용 가능
          이 기관차는 최종 버전이며, 더 이상 업데이트가 제공되지 않습니다.
          `,
    },
  },
  {
    id: 98,
    title: "CC 204 Batch 1",
    price: "IDR 50.000",
    bestseller: false,
    type: "all-in-one",
    version: "V.1",
    status: "final",
    edition: "All-in-One Edition",
    img: "/allinone/c4b1.jpg",
    gallery: [
        "/allinone/c4b1-1.jpeg",
        "/allinone/c4b1-2.jpeg",
        "/allinone/c4b1-3.jpeg",
        "/allinone/c4b1-4.jpeg",
        "/allinone/c4b1-5.jpeg",
        "/allinone/c4b1-6.jpeg",
        "/allinone/c4b1-7.jpeg",
        "/allinone/c4b1-8.jpeg",
        "/allinone/c4b1-9.jpeg",
        "/allinone/c4b1-10.jpeg",
        "/allinone/c4b1-11.jpeg",
        "/allinone/c4b1-12.jpeg",
        "/allinone/c4b1-13.jpeg",
        "/allinone/c4b1-14.jpeg",
        "/allinone/c4b1-15.jpeg",
        "/allinone/c4b1-16.jpeg",
    ],
    fullDesc: {
      id: `Fitur :
          (+) High Exterior Details
          (+) Kabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Efek Guncangan saat berjalan

          Script (via Surveyor) :
          (+) Pasang Kotak Multiple Unit (MU Box)
          (+) Pasang Teralis
          (+) Ganti Livery (tersedia 9 pilihan)
          (+) Ganti Warna Bogie (tersedia 5 pilihan)
          (+) Ganti Warna Teralis (tersedia 3 pilihan)
          (+) Ganti Warna Cow Catcher (tersedia 2 pilihan)
          (+) Ganti Warna Deckplat
          (+) Ganti Plat Nomor (tersedia penomoran lama dan baru)
          (+) Ganti Cap Dipo Induk (tersedia ejaan lama "Dipo" dan ejaan baru "Depo")
          (+) Ganti Cow Cathcer (Sekop dan Biasa)

          Script (via Driver) :
          (+) Animasi Semboyan Segitiga (dekat lampu utama)
          (+) Animasi Pintu Kabin
          (+) Animasi Jendela Kabin
          (+) Animasi Teralis Kabin
          (+) Animasi Wiper
          (+) Lampu Kabut (terpisah dari lampu utama)
          (+) Lampu Semboyan
          (+) Rantai dan Selang ABAR (sambung/lepas)
          (+) Papan Semboyan 21 Siang

          (-) Bug pada kaca kabin, sehingga tidak dapat melihat corona pada sinyal, dsb. Agar bisa melihat corona sinyal, silahkan hilangkan kaca kabin menggunakan script.

          Keterangan Dependencies :
          (+) Bogie milik DCP
          (+) Engine Sound milik IVRD
          (+) Horn Sound milik IVRD

          Bisa digunakan untuk Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          Lokomotif ini sudah versi final, tidak ada update.
          `,
      en: `Features:
          (+) High Exterior Details
          (+) Cabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Shock Effects when Driving

          Script (via Surveyor):
          (+) Install Multiple Unit Boxes (MU Boxes)
          (+) Install Trellis
          (+) Change Livery (9 options available)
          (+) Change Bogie Color (5 options available)
          (+) Change Trellis Color (3 options available)
          (+) Change Cow Catcher Color (2 options available)
          (+) Change Deckplate Color
          (+) Change License Plate (old and new numbering available)
          (+) Change Main Depot Stamp (old spelling "Dipo" and new spelling "Depo" available)
          (+) Change Cow Catcher (Spade and Regular)

          Script (via Driver):
          (+) Triangle Motto Animation (near the headlights)
          (+) Cabin Door Animation
          (+) Window Animation Cabin
          (+) Cabin Trellis Animation
          (+) Wiper Animation
          (+) Fog Lights (separate from the main lights)
          (+) Slogan Lights
          (+) ABAR Chain and Hose (connect/disconnect)
          (+) 21 Siang Slogan Board

          (-) A bug with the cabin window prevents you from seeing the corona on signals, etc. To see the corona on signals, please remove the cabin window using a script.

          Dependencies Description:
          (+) Bogie owned by DCP
          (+) Engine Sound owned by IVRD
          (+) Horn Sound owned by IVRD

          Can be used with Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          This locomotive is the final version, no updates are available.
          `,
      ko: `특징:
          (+) 뛰어난 외부 디테일
          (+) 객실 내부
          (+) 고화질 보기
          (+) 고화질 연결기
          (+) 주행 시 충격 효과

          스크립트(Surveyor 이용):
          (+) 다중 유닛 박스(MU 박스) 설치
          (+) 트렐리스 설치
          (+) 도색 변경 (9가지 옵션)
          (+) 보기 색상 변경 (5가지 옵션)
          (+) 트렐리스 색상 변경 (3가지 옵션)
          (+) 소 방지 장치 색상 변경 (2가지 옵션)
          (+) 데크 플레이트 색상 변경
          (+) 번호판 변경 (구형 및 신형 번호 사용 가능)
          (+) 차량기지 스탬프 변경 (구형 "Dipo" 및 신형 "Depo" 사용 가능)
          (+) 소 방지 장치 변경 (삽형 및 일반형)

          스크립트(Driver 이용):
          (+) 삼각형 모토 애니메이션 (헤드라이트 근처)
          (+) 객실 문 애니메이션
          (+) 객실 창문 애니메이션
          (+) 객실 트렐리스 애니메이션
          (+) 와이퍼 애니메이션
          (+) 안개등 (주등과 별도 작동)
          (+) 슬로건 조명
          (+) ABAR 체인 및 호스 (연결/분리)
          (+) 21 Siang 슬로건 안내판

          (-) 운전실 창문 버그로 인해 신호등 등의 코로나 효과가 보이지 않습니다. 신호등 코로나 효과를 보려면 스크립트를 사용하여 운전실 창문을 제거하십시오.

          필수 구성 요소 설명:
          (+) 보기(Bogie) - DCP 제작
          (+) 엔진 사운드 - IVRD 제작
          (+) 경적 사운드 - IVRD 제작

          Trainz Android, TS12HF4, T:ANE, TRS19, TRS22에서 사용 가능
          이 기관차는 최종 버전이며, 더 이상 업데이트가 제공되지 않습니다.
          `,
    },
  },
  {
    id: 99,
    title: "CC 204 Batch 2",
    price: "IDR 50.000",
    bestseller: false,
    type: "all-in-one",
    version: "V.1",
    status: "final",
    edition: "All-in-One Edition",
    img: "/allinone/c4b2.jpg",
    gallery: [
        "/allinone/c4b2-1.jpeg",
        "/allinone/c4b2-2.jpeg",
        "/allinone/c4b2-3.jpeg",
        "/allinone/c4b2-4.jpeg",
        "/allinone/c4b2-5.jpeg",
        "/allinone/c4b2-6.jpeg",
        "/allinone/c4b2-7.jpeg",
        "/allinone/c4b2-8.jpeg",
        "/allinone/c4b2-9.jpeg",
        "/allinone/c4b2-10.jpeg",
        "/allinone/c4b2-11.jpeg",
        "/allinone/c4b2-12.jpeg",
        "/allinone/c4b2-13.jpeg",
        "/allinone/c4b2-14.jpg",
        "/allinone/c4b2-15.jpg",
        "/allinone/c4b2-16.jpeg",
    ],
    fullDesc: {
      id: `Fitur :
          (+) High Exterior Details
          (+) Kabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Efek Guncangan saat berjalan

          Script (via Surveyor) :
          (+) Ganti Plat Nomor (tersedia penomoran lama dan baru)
          (+) Ganti Cap Depo Induk
          (+) Ganti Model Spion
          (+) Ganti Model Ventilasi (bawah kaca)
          (+) Ganti Model Handrail Kabin (bawah kaca)
          (+) Ganti Model Lampu Kabut
          (+) Ganti Model Talang Pintu
          (+) Ganti Model Antena
          (+) Ganti Model Suling
          (+) Ganti Model Grill
          (+) Ganti Model Deckplat
          (+) Ganti Model Cow Catcher
          (+) Ganti Warna Cow Catcher
          (+) Ganti Warna Teralis Mesin
          (+) Pasang Teralis
          (+) Pasang Lonceng
          (+) Pasang Stopblok
          ​(+) Pasang Hanger Mesin
          (+) Pasang Builder Plat
          (+) Ganti Livery Lokomotif

          Script (via Driver) :
          (+) Nyala Mati Mesin (BETA)
          (+) Nyala Mati Lampu Kabin
          (+) Nyala Mati Lampu Kabut (terpisah dari lampu utama)
          (+) Nyala Mati Lampu Semboyan
          (+) Animasi Semboyan 26 27 Siang
          (+) Animasi Kran Multiple Unit pada Kabin
          (+) Animasi Kipas Kabin
          (+) Animasi Wiper
          (+) Animasi Pintu
          (+) Animasi Jendela
          (+) Animasi Teralis
          (+) Animasi Spion
          (+) Pasang Lepas Semboyan 21 Siang
          (+) Pasang Lepas Rantai
          (+) Pasang Lepas Selang ABAR
          (+) Pasang Lepas Selang Angin Multiple Unit
          (+) Pasang Lepas Kabel Multiple Unit
          (+) Pasang Lepas Stopblok
          (+) Ganti Model Radio
          (+) Ganti Model Tempat Jadwal

          (-) Bug pada kaca kabin, sehingga tidak dapat melihat corona pada sinyal, dsb. Agar bisa melihat corona sinyal, silahkan hilangkan kaca kabin menggunakan script.

          Keterangan Dependencies :
          (+) Bogie milik DCP
          (+) Engine Sound milik IVRD
          (+) Horn Sound milik IVRD

          Bisa digunakan untuk Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          Lokomotif ini sudah versi final, tidak ada update.
          `,
      en: `Features:
          (+) High Exterior Details
          (+) Cabin Interior
          (+) HD Bogie
          (+) HD Coupler
          (+) Shock Effects when Driving

          Script (via Surveyor):
          (+) Change License Plate (old and new numbering available)
          (+) Change Main Depot Stamp
          (+) Change Mirror Model
          (+) Change Ventilation Model (under glass)
          (+) Change Cabin Handrail Model (under glass)
          (+) Change Fog Lamp Model
          (+) Change Door Gutter Model
          (+) Change Antenna Model
          (+) Change Flute Model
          (+) Change Grill Model
          (+) Change Deckplate Model
          (+) Change Cow Catcher Model
          (+) Change Cow Catcher Color
          (+) Change Engine Trellis Color
          (+) Install Trellis
          (+) Install Bell
          (+) Install Stop Block
          ​(+) Install Engine Hanger
          (+) Install Builder Plate
          (+) Change Locomotive Livery

          Script (via Driver):
          (+) Engine On/Off (BETA)
          (+) Cabin Lights On/Off
          (+) Fog Lights On/Off (separate from headlights)
          (+) Slogan Lights On/Off
          (+) 26/27 Noon Slogan Animation
          (+) Multiple Unit Cabin Faucet Animation
          (+) Cabin Fan Animation
          (+) Wiper Animation
          (+) Door Animation
          (+) Window Animation
          (+) Grille Animation
          (+) Mirror Animation
          (+) Install/Remove Slogan 21 Noon
          (+) Install/Remove Chain
          (+) Install/Remove ABAR Hose
          (+) Install/Remove Air Hose on Multiple Units
          (+) Install/Remove Cable on Multiple Units
          (+) Install/Remove Stop Block
          (+) Change Radio Model
          (+) Change Schedule Location Model

          (-) Bug on the cabin window, preventing you from seeing corona on the signal, etc. To see the corona on the signal, please remove the cabin window using the script.

          Dependencies:
          (+) DCP Bogie
          (+) IVRD Engine Sound
          (+) IVRD Horn Sound

          Can be used with Trainz Android, TS12HF4, T:ANE, TRS19, TRS22
          This locomotive is the final version, there are no updates.
          `,
      ko: `특징:
          (+) 뛰어난 외관 디테일
          (+) 객실 내부
          (+) 고화질 보기
          (+) 고화질 연결기
          (+) 주행 시 충격 효과

          스크립트(Surveyor 사용):
          (+) 번호판 변경 (구형 및 신형 번호 사용 가능)
          (+) 차량기지 스탬프 변경
          (+) 사이드미러 모델 변경
          (+) 환기구 모델 변경 (유리 아래)
          (+) 객실 난간 모델 변경 (유리 아래)
          (+) 안개등 모델 변경
          (+) 도어 홈 모델 변경
          (+) 안테나 모델 변경
          (+) 플루트 모델 변경
          (+) 그릴 모델 변경
          (+) 데크 플레이트 모델 변경
          (+) 소 방지 장치 모델 변경
          (+) 소 방지 장치 색상 변경
          (+) 엔진 트렐리스 색상 변경
          (+) 트렐리스 설치
          (+) 종 설치
          (+) 정지 블록 설치
          (+) 엔진 격납고 설치
          (+) 제작사 명판 설치
          (+) 기관차 도색 변경

          스크립트(Driver 사용):
          (+) 엔진 켜기/끄기 (베타)
          (+) 객실 조명 켜기/끄기
          (+) 안개등 켜기/끄기 (헤드라이트와 별개)
          (+) 슬로건 조명 켜기/끄기
          (+) 정오 26/27시 슬로건 애니메이션
          (+) 다중 유닛 객실 수도꼭지 애니메이션
          (+) 객실 팬 애니메이션
          (+) 와이퍼 애니메이션
          (+) 도어 애니메이션
          (+) 창문 애니메이션
          (+) 그릴 애니메이션
          (+) 미러 애니메이션
          (+) 정오 21시 슬로건 설치/제거
          (+) 체인 설치/제거
          (+) ABAR 호스 설치/제거
          (+) 다중 유닛 에어 호스 설치/제거
          (+) 다중 유닛 케이블 설치/제거
          (+) 스톱 블록 설치/제거
          (+) 라디오 모델 변경
          (+) 스케줄 위치 모델 변경

          (-) 객실 창문에 버그가 있어 신호등의 코로나 현상 등을 볼 수 없습니다. 신호등의 코로나 현상을 보려면 스크립트를 사용하여 객실 창문을 제거하십시오.

          필수 구성 요소:
          (+) DCP 보기
          (+) IVRD 엔진 사운드
          (+) IVRD 경적 사운드

          Trainz Android, TS12HF4, T:ANE, TRS19, TRS22와 호환 가능
          이 기관차는 최종 버전이며, 더 이상 업데이트는 없습니다.
          `,
    },
  }
  
];
