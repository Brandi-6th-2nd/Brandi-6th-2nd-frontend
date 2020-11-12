// 초기값
export const productAddInitialState = {
  sellOption: "1",
  displayOption: "1",
  categoryData: {
    first: null,
    second: null,
  },
  currentFirstCategory: 0,
  currentSecondCategory: 0,
  productInfoType: "detailRefer",
  manufacturer: "",
  manufactureDate: "",
  countryOption: "korea",
  productName: "",
  productDesc: "",
  productImage: {
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
  },
  productDetailInfo: "simple",
  productDetailInfoImage: null,
};

export const productAddReducer = (state, action) => {
  // console.log("product", state, action);

  switch (action.type) {
    case "setSellOption":
      return {
        ...state,
        sellOption: action.value,
      };
    case "setDisplayOption":
      return {
        ...state,
        displayOption: action.value,
      };
    case "setFirstCategoryData":
      return {
        ...state,
        categoryData: {
          ...state.categoryData,
          first: action.value,
        },
      };
    case "setSecondCategoryData":
      return {
        ...state,
        categoryData: {
          ...state.categoryData,
          second: action.value,
        },
      };
    case "setCurrentFirstCategory":
      return {
        ...state,
        currentFirstCategory: action.value,
      };
    case "setCurrentSecondCategory":
      return {
        ...state,
        currentSecondCategory: action.value,
      };
    case "setProductInfoType":
      return {
        ...state,
        productInfoType: action.value,
      };
    case "setManufacturer":
      return {
        ...state,
        manufacturer: action.value,
      };
    case "setManufactureDate":
      return {
        ...state,
        manufactureDate: action.value,
      };
    case "setCountryOption":
      return {
        ...state,
        countryOption: action.value,
      };
    case "setProductName":
      return {
        ...state,
        productName: action.value,
      };
    case "setProductDesc":
      return {
        ...state,
        productDesc: action.value,
      };
    case "setProductImageFirst":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          first: action.value,
        },
      };
    case "setProductImageSecond":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          second: action.value,
        },
      };
    case "setProductImageThird":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          third: action.value,
        },
      };
    case "setProductImageFourth":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          fourth: action.value,
        },
      };
    case "setProductImageFifth":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          fifth: action.value,
        },
      };
    case "setProductDetailInfo":
      return {
        ...state,
        productDetailInfo: action.value,
      };
    case "setProductDetailInfoImage":
      return {
        ...state,
        productDetailInfoImage: action.value,
      };
    case "reset":
      return productAddInitialState;
    default:
      return state;
  }
};
