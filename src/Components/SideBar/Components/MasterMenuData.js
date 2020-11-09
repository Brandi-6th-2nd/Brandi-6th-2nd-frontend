const MasterMenuContent = [
  {
    id: 1,
    tabIcon: "fas fa-home",
    tabName: "홈",
    arrowIcon: "",
    homeUrl: "/home",
  },
  {
    id: 2,
    tabIcon: "far fa-chart-bar",
    tabName: "통계",
    arrowIcon: "fas fa-angle-left",
    subCategory: [{ id: 1, subName: "시간단위분석" }],
  },
  {
    id: 3,
    tabIcon: "fas fa-cart-arrow-down",
    tabName: "주문관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "결제완료관리", url: "/productPrep" },
      { id: 2, subName: "상품준비관리", url: "/productPrep" },
      { id: 3, subName: "배송중관리", url: "/productPrep" },
      { id: 4, subName: "배송완료관리", url: "/productPrep" },
      { id: 5, subName: "구매확정관리", url: "/productPrep" },
    ],
  },
  {
    id: 4,
    tabIcon: "fas fa-shopping-cart",
    tabName: "취소/환불 관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "환불요청관리" },
      { id: 2, subName: "환불완료관리" },
      { id: 3, subName: "주문취소완료관리" },
    ],
  },
  {
    id: 5,
    tabIcon: "fas fa-shopping-bag",
    tabName: "상품관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "상품관리", url: "/productManage" },
      { id: 2, subName: "상품등록", url: "/productAdd" },
    ],
  },
  {
    id: 6,
    tabIcon: "far fa-smile",
    tabName: "고객응대관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "Q&A관리" },
      { id: 2, subName: "텍스트 리뷰" },
    ],
  },
  {
    id: 7,
    tabIcon: "fas fa-gift",
    tabName: "기획전/쿠폰관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "기획전 관리" },
      { id: 2, subName: "쿠폰 관리" },
    ],
  },
  {
    id: 8,
    tabIcon: "far fa-user",
    tabName: "회원관리",
    arrowIcon: "fas fa-angle-left",
    subCategory: [
      { id: 1, subName: "회원 관리_커뮤니티", url: "/accountManage" },
      { id: 2, subName: "셀러 계정 관리", url: "/accountManage" },
    ],
  },
];

export default MasterMenuContent;
