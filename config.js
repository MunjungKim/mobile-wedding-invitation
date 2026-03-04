const CONFIG = {
  // 신랑 정보
  groom: {
    nameKo: '서동해',
    nameEn: 'DONGHAE',
    role: '장남',
    father: { name: '김영수', bank: '신한은행', account: '110-234-567890' },
    mother: { name: '박미경', bank: '우리은행', account: '1002-345-678901' },
    bank: '국민은행',
    account: '123-456-789012',
  },

  // 신부 정보
  bride: {
    nameKo: '김문정',
    nameEn: 'MUNJEONG',
    role: '장녀',
    father: { name: '이정호', bank: '하나은행', account: '234-567890-12345' },
    mother: { name: '최수진', bank: '농협은행', account: '302-1234-5678-91' },
    bank: '카카오뱅크',
    account: '3333-01-2345678',
  },

  // 예식 정보
  wedding: {
    date: '2027-05-22',
    time: '14:00',
    dateKo: '2027년 5월 22일 토요일 오후 2시',
    dateEn: 'SATURDAY, MAY 22, 2027',
    timeEn: '2:00 PM',
    dDay: '2027-05-22T14:00:00+09:00',
  },

  // 예식장 정보
  venue: {
    name: '팡파르하우스',
    address: '서울특별시 서대문구 연희로26다길 17',
    district: '서울 서대문구',
    tel: '',
    kakaoMapUrl: 'https://map.kakao.com',
    naverMapUrl: 'https://map.naver.com',
    googleMapUrl: 'https://maps.google.com',
  },

  // 교통 정보
  transport: {
    subway: '2호선 홍대입구역 3번 출구에서 도보 15분\n경의중앙선 홍대입구역 3번 출구',
    bus: '연세대 앞 정류장 하차\n간선: 153, 173, 470, 750\n지선: 7024, 7726',
    car: '서울특별시 서대문구 연희로26다길 17\n네비게이션 "팡파르하우스" 검색',
  },

  // 카카오페이 송금 링크 (카카오페이 앱 > 더보기 > 송금코드에서 생성)
  kakaoPay: {
    enabled: false,
    url: '',  // 예: 'https://qr.kakaopay.com/...'
  },

  // Google Sheets RSVP (Google Apps Script 웹앱 URL)
  rsvp: {
    googleSheetUrl: '',  // Apps Script 배포 URL을 여기에 입력
  },
};
