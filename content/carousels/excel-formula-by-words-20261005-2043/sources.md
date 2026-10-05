# sources — excel-formula-by-words-20261005-2043 (방향 A, pastel)

## 사실 확인 (2026-10-05 조회, Microsoft Support 공식 문서)
- XLOOKUP: https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
  - 구문: =XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
  - 공식 문서 Note: "XLOOKUP is not available in Excel 2016 and Excel 2019." → 슬라이드 7 "엑셀 2019 이하엔 XLOOKUP 없음"
  - 사용 가능: Microsoft 365(Windows·Mac), Excel 2024, Excel 2021, iPad/iPhone/Android
  - if_not_found 생략 시 #N/A 반환 → 예시 수식에 "없음" 지정
- VLOOKUP: https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1
  - 구문: VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]), FALSE = 정확히 일치
  - 찾는 값은 table_array 첫 열에 있어야 함 → A:C 범위, 3번째 열(C열 부서)
- IFERROR: https://support.microsoft.com/en-us/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
  - 구문: IFERROR(value, value_if_error), #N/A·#VALUE! 등 오류일 때 지정 값 반환. Excel 2016 이상 등에서 사용
- COUNTIFS: https://support.microsoft.com/en-us/office/countifs-function-dda3dc6e-f74e-4aee-88bc-aa8c2a866842
  - 구문: COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]…), 조건 범위는 같은 크기여야 함
  - 조건 예: ">32", "apples" 형식 → 예시 ">=80", "영업팀"
- SUMIFS(9장 언급): https://support.microsoft.com/en-us/office/sumifs-function-c9e748f5-7ea7-455d-9406-611cebce642b
- ChatGPT·Copilot 무료 사용 가능: 10/5 12:43 세트 sources(/workspace/carousel/free-ai-before-paying-20261005-1243/sources.md)
  - https://chatgpt.com/pricing/ (Free 플랜), https://support.microsoft.com/en-US/Microsoft-365-Copilot/what-s-the-difference-between-microsoft-copilot-free-and-copilot-in-microsoft-365

## 수식 구문 점검 (직접 확인)
- =XLOOKUP(F2,A:A,C:C,"없음") — 인수 4개, 괄호·따옴표 짝 맞음. F열 입력이라 순환 참조 없음
- =IFERROR(VLOOKUP(F2,A:C,3,FALSE),"없음") — 괄호 2쌍 짝 맞음, A:C의 3번째 열 = C
- =COUNTIFS(C:C,"영업팀",D:D,">=80") — 범위 2개 크기 같음(전체 열)
- 한국어판 엑셀도 함수 이름은 영어, 인수 구분은 쉼표(지역 설정이 다르면 세미콜론일 수 있음)

## 예시·불확실한 점
- 표 구성(A열 이름·B열 사번·C열 부서), "영업팀", 점수 80은 모두 지어낸 (예시)
- AI가 만든 수식이 항상 맞는다는 보장은 없음 → 슬라이드 7 "몇 줄은 직접 계산해 대조"
- 무료 플랜 한도·모델은 수시로 바뀜(이번 세트는 한도 숫자 언급 안 함)
- 엑셀 안의 Copilot(유료 구독 기능)은 다루지 않음. 캡션의 Copilot은 무료 Microsoft Copilot 채팅
- 실행 테스트: LibreOffice Calc 25.2로 (예시) 표를 만들어 세 수식을 계산 → XLOOKUP·IFERROR(VLOOKUP) 모두 "영업팀"/"없음" 정상, COUNTIFS 결과 2(정답과 일치)
