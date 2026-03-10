/**
 * Google Apps Script - RSVP 데이터를 Google Sheets에 저장
 *
 * 사용법:
 * 1. Google Sheets에서 새 스프레드시트 생성
 * 2. 확장 프로그램 > Apps Script 클릭
 * 3. 이 코드를 붙여넣기
 * 4. 배포 > 새 배포 > 웹 앱 선택
 *    - 실행 권한: 나 (본인 계정)
 *    - 액세스 권한: 모든 사용자
 * 5. 배포 후 나오는 URL을 config.js의 rsvp.googleSheetUrl에 입력
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // 첫 행이 비어있으면 헤더 추가
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['타임스탬프', '성함', '참석여부', '식사여부', '인원수']);
  }

  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name,
    data.attend === 'yes' ? '참석' : '불참',
    data.meal === 'yes' ? '식사 함' : '식사 안 함',
    data.guests + '명'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput('RSVP API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
