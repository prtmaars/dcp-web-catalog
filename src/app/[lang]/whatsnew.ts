export interface MultiLangText {
  id: string;
  en: string;
  ko: string;
}

export type WhatsNewItem = {
  date: string;
  type: "New Content" | "Update" | "Fix" | "Info";
  description: MultiLangText;
};

export const getDefaultColor = (type: WhatsNewItem["type"]) => {
  switch (type) {
    case "New Content": return "#0589ee";
    case "Update": return "#24b93bff";
    case "Fix": return "#ff0000ff";
    case "Info": return "#6b7280";
  }
};

export const whatsNewData: WhatsNewItem[] = [
  {
    date: "2025/11/07",
    type: "Update",
    description: {
      id: "Penambahan kereta dengan liveri fiksi 'Sindoro-Anggrek' pada New Image Pack.",
      en: "Addition of a train with the fictional 'Sindoro-Anggrek' livery to the New Image Pack.",
      ko: "새로운 이미지 팩에 가상의 '신도로-앙그렉' 도장을 한 기차가 추가되었습니다.",
    },
  },
  {
    date: "2025/11/06",
    type: "New Content",
    description: {
      id: "Rilis publik rel kereta tipe R-54.",
      en: "Public release of R-54 type railway tracks.",
      ko: "R-54형 철도 궤도 공개.",
    },
  },
  {
    date: "2025/10/03",
    type: "New Content",
    description: {
      id: "Rilis lokomotif CC 201 89 16 'Lokomotif Frankenstein'.",
      en: "Release of the CC 201 89 16 'Frankenstein Locomotive'.",
      ko: "CC 201 89 16 '프랑켄슈타인 기관차' 출시.",
    },
  },
  {
    date: "2025/10/03",
    type: "Info",
    description: {
      id: "Penyesuaian harga untuk konten lokomotif dan kereta.",
      en: "Price adjustments for locomotive and train content.",
      ko: "기관차 및 열차 콘텐츠 가격 조정.",
    },
  },
  {
    date: "2025/09/28",
    type: "New Content",
    description: {
      id: "Rilis kereta lodaya livery krem dan k1 eksis khusus user DCP.",
      en: "Release of Lodaya with cream livery and K1 'eksis' for DCP users.",
      ko: "DCP 사용자를 위해 크림색 도장과 K1 '엑시스'를 장착한 로다야 출시.",
    },
  },
  {
    date: "2025/08/27",
    type: "Info",
    description: {
      id: "Migrasi website ke dcptrainz.my.id.",
      en: "Website migration to dcptrainz.my.id.",
      ko: "dcptrainz.my.id로 웹사이트 마이그레이션.",
    },
  },
  {
    date: "2025/08/22",
    type: "New Content",
    description: {
      id: "Rilis kereta petani khusus user DCP.",
      en: "Release of farmer's train specifically for DCP users.",
      ko: "DCP 사용자를 위한 농부 열차 출시.",
    },
  },
  {
    date: "2025/07/01",
    type: "Info",
    description: {
      id: "Perpanjangan durasi update lisensi token.",
      en: "Extended duration of token license update.",
      ko: "토큰 라이선스 업데이트 기간이 연장되었습니다.",
    },
  },
  {
    date: "2025/05/30",
    type: "Fix",
    description: {
      id: "Fix bug consist: controller yang terhalang lisensi di layar.",
      en: "Fixed bug on consist: controller that blocked license on screen.",
      ko: "기차 버그 수정: 컨트롤러가 화면에서 라이선스를 차단했습니다.",
    },
  },
  {
    date: "2025/05/04",
    type: "Info",
    description: {
      id: "Update lisensi menjadi sistem lisensi token.",
      en: "License update to token license system.",
      ko: "토큰 라이선스 시스템에 대한 라이선스 업데이트.",
    },
  },
  {
    date: "2025/05/03",
    type: "Update",
    description: {
      id: "Penambahan kereta kompartemen dan panoramic pada Kereta Wisata Pack.",
      en: "Addition of compartment and panoramic trains to the Kereta Wisata Pack.",
      ko: "Kereta Wisata Pack에 객실 및 파노라마 열차가 추가되었습니다.",
    },
  },
  {
    date: "2025/05/01",
    type: "Update",
    description: {
      id: "Penambahan kereta eksekutif modifikasi dan restorasi pada New Image Pack.",
      en: "Added modified executive and dining trains to the New Image Pack.",
      ko: "New Image Pack에 수정 및 복원된 임원 열차를 추가했습니다.",
    },
  },
  {
    date: "2025/02/02",
    type: "New Content",
    description: {
      id: "Rilis lokomotif CC 201 92 06 skema albino.",
      en: "Release of the CC 201 92 06 locomotive albino edition.",
      ko: "CC 201 92 06 기관차 알비노 에디션 출시.",
    },
  },
  {
    date: "2024/12/27",
    type: "Info",
    description: {
      id: "Percobaan penggunaan sistem lisensi token.",
      en: "Trial of using token licensing system.",
      ko: "토큰 라이센싱 시스템 사용 시험.",
    },
  },
  {
    date: "2024/10/10",
    type: "New Content",
    description: {
      id: "Rilis lokomotif CC 201 83 48 dan CC 203 02 03.",
      en: "Release of the CC 201 83 48 and CC 203 02 03 locomotives.",
      ko: "CC 201 83 48 및 CC 203 02 03 기관차 출시.",
    },
  },
  {
    date: "2024/02/27",
    type: "New Content",
    description: {
      id: "Rilis rute relasi Cipatat-Cibeber.",
      en: "Release of the Cipatat-Cibeber route.",
      ko: "Cipatat-Cibeber 노선 출시.",
    },
  },
];
