const SellerMenuContent = [
  {
    id: 1,
    tabIcon: "fas fa-home",
    tabName: "홈",
    arrowIcon: "",
    subCategory: [],
  },
  {
    id: 2,
    tabIcon: "far fa-comment-alt",
    tabName: "공지사항",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "브랜디 공지" },
      { id: 2, subName: "기획전 상품 신청" },
    ],
  },
  {
    id: 3,
    tabIcon: "far fa-chart-bar",
    tabName: "통계",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "기간별 통계" },
      { id: 2, subName: "베스트 상품분석" },
      { id: 3, subName: "판매추세 분석(상품별)" },
    ],
  },
  {
    id: 4,
    tabIcon: "fas fa-cart-arrow-down",
    tabName: "주문관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "전체주문관리" },
      { id: 2, subName: "상품준비관리" },
      { id: 3, subName: "배송준비관리" },
      { id: 4, subName: "배송중관리" },
      { id: 5, subName: "배송완료관리" },
      { id: 6, subName: "구매확정관리" },
    ],
  },
  {
    id: 5,
    tabIcon: "fas fa-shopping-cart",
    tabName: "취소/환불 관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "환불요청관리" },
      { id: 2, subName: "반품진행관리" },
      { id: 3, subName: "환불승인중관리" },
      { id: 4, subName: "환불완료관리" },
      { id: 5, subName: "주문취소중관리" },
      { id: 6, subName: "주문취소완료관리" },
    ],
  },
  {
    id: 6,
    tabIcon: "fas fa-shopping-bag",
    tabName: "상품관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "상품관리" },
      { id: 2, subName: "상품등록" },
    ],
  },
  {
    id: 7,
    tabIcon: "far fa-smile",
    tabName: "고객응대관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "Q&A관리" },
      { id: 2, subName: "텍스트 리뷰" },
      { id: 3, subName: "포토 리뷰" },
    ],
  },
  {
    id: 8,
    tabIcon: "fas fa-calculator",
    tabName: "정산관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "정산 관리" },
      { id: 2, subName: "셀러별 정산요약" },
      { id: 3, subName: "셀러별 판매수수료" },
      { id: 4, subName: "주문별 판매수수료" },
      { id: 5, subName: "셀러별 서버이용료" },
    ],
  },
  {
    id: 9,
    tabIcon: "far fa-eye",
    tabName: "진열관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [{ id: 1, subName: "상품진열관리" }],
  },
  {
    id: 10,
    tabIcon: "far fa-user",
    tabName: "회원관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "셀러 정보 관리" },
      { id: 2, subName: "페널티 셀러 관리" },
      { id: 2, subName: "도매처 관리" },
    ],
  },
  {
    id: 11,
    tabIcon: "far fa-question-circle",
    tabName: "고객센터",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "헬피 신청 안내" },
      { id: 2, subName: "카카오톡 문의" },
      { id: 3, subName: "전화" },
      { id: 4, subName: "MD에게 제안" },
      { id: 5, subName: "오류/수정 제안" },
    ],
  },
];

export default SellerMenuContent;
