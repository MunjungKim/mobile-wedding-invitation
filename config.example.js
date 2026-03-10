const CONFIG = {
  // 신랑 정보
  groom: {
    nameKo: '홍길동',
    nameEn: 'GILDONG',
    role: '장남',
    father: { name: '홍아버지', bank: '신한은행', account: '000-000-000000' },
    mother: { name: '홍어머니', bank: '우리은행', account: '0000-000-000000' },
    bank: '국민은행',
    account: '000-000-000000',
  },

  // 신부 정보
  bride: {
    nameKo: '김영희',
    nameEn: 'YOUNGHEE',
    role: '장녀',
    father: { name: '김아버지', bank: '하나은행', account: '000-000000-00000' },
    mother: { name: '김어머니', bank: '농협은행', account: '000-0000-0000-00' },
    bank: '카카오뱅크',
    account: '0000-00-0000000',
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
    name: '예식장 이름',
    address: '서울특별시 OO구 OO로 00',
    district: '서울 OO구',
    tel: '',
    kakaoMapUrl: 'https://map.kakao.com',
    naverMapUrl: 'https://map.naver.com',
    googleMapUrl: 'https://maps.google.com',
  },

  // 교통 정보
  transport: {
    subway: '지하철 정보를 입력하세요',
    bus: '버스 정보를 입력하세요',
    car: '자가용 정보를 입력하세요',
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

  // 커플 퀴즈 (비워두면 기본 퀴즈 사용)
  // quiz: [
  //   {q:'질문', opts:['보기1','보기2','보기3','보기4'], answer:0, explain:'해설'},
  // ],
};
