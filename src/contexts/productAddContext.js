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
    first: { order: 1, is_main: 1, value: null },
    second: { order: 2, is_main: 0, value: null },
    third: { order: 3, is_main: 0, value: null },
    fourth: { order: 4, is_main: 0, value: null },
    fifth: { order: 5, is_main: 0, value: null },
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
          first: {
            ...state.productImage.first,
            value: action.value,
          },
        },
      };
    case "setProductImageSecond":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          second: {
            ...state.productImage.second,
            value: action.value,
          },
        },
      };
    case "setProductImageThird":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          third: {
            ...state.productImage.third,
            value: action.value,
          },
        },
      };
    case "setProductImageFourth":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          fourth: {
            ...state.productImage.fourth,
            value: action.value,
          },
        },
      };
    case "setProductImageFifth":
      return {
        ...state,
        productImage: {
          ...state.productImage,
          fifth: {
            ...state.productImage.fifth,
            value: action.value,
          },
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
