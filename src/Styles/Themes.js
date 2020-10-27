import { css } from "styled-components";

// 최하단에 사용 설명 적어두었음. 필요시 다른 스타일을 더 추가해서 사용 가능
const Themes = {
  table: () => {
    return css`
      width: 100%;
    `;
  },
  th: () => {
    return css`
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      vertical-align: middle;
      background: #eeeeee;
      border: 1px solid #dddddd;
      padding: 10px;
    `;
  },
  td: () => {
    return css`
      font-size: 13px;
      vertical-align: middle;
      border: 1px solid #dddddd;
      padding: 8px;
    `;
  },
  select: (width = null, height = null) => {
    return css`
      width: ${width};
      height: ${height};
      padding: 2px 10px;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      outline: none;
      font-weight: 400;
      &:focus {
        border: 0.5px solid #adb3af;
        transition: border 0.2s ease-in-out;
      }
    `;
  },
  input: () => {
    return css`
      width: 100%;
      height: 30px;
      text-align: left;
      padding-left: 10px;
      cursor: text;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      background: #ffffff;

      &:focus {
        border: 0.5px solid #adb3af;
        transition: border 0.2s ease-in-out;
      }
    `;
  },
};

export default Themes;

// Themes.js 상에서 다음과 같이 사용할 수 있음
// justify, align, direction 인자들의 초기값을 null로 설정하고, css 속성들에서 각각 인자들을 받음.
// flex: (justify = null, align = null, direction = null) => {
//   return css`
//     display: flex;
//     justify-content: ${justify};
//     align-items: ${align};
//     flex-direction: ${direction};
//   `;
// },

// 위의 스타일을 사용하려는 컴포넌트에서 다음과 같이 설정하여 사용 가능
// space-between 인자는 justify-contet: space-between,
// center 인자는 align-items: center 로 적용됨
// const MainHeaderWrapper = styled.div`
//   ${({ theme }) => theme.flex(`space-between`, `center`)}
//   margin: 0 auto;
//   padding: 14px 0px;
// `;
