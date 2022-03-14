import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.colors.secondary};
        border-radius:14px;
    }
}
`;
export const Devices = {
  Mobile: "only screen and (min-width: 576px)",
  Tablets: "only screen and (min-width: 768px)",
  Laptops: "only screen and (min-width: 992px)",
  Large: "only screen and (min-width: 1400px)",
};

export const FontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
};

export const BorderRadius = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
  full: "50rem",
};
export const BorderWidth = {
  default: "1px",
  0: "0px",
  2: "2px",
  4: "4px",
  8: "8px",
};
export const Width = {
  "1/5": "20%",
  "1/4": "25%",
  "2/5": "40%",
  "2/4": "50%",
  "3/5": "60%",
  "3/4": "75%",
  "4/5": "80%",
  "5/5": "100%",
};
export const ZIndex = {
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
};

//   Clases css
export const Disabled = css`
  opacity: 0.5;
  cursor: default;
`;

export const widthFunction= (width) => {
  switch (width) {
    case "xs":
      return (width ='4%' );
    case "md":
      return (width ='8%' );
    case "lg":
      return (width ='16%' );
    case "1/5":
      return (width = Width["1/5"]);
    case "2/4":
      return (width = Width["2/4"]);
    case "2/5":
      return (width = Width["2/5"]);
    case "3/4":
      return (width = Width["3/4"]);
    case "3/5":
      return (width = Width["3/5"]);
    case "4/5":
      return (width = Width["4/5"]);
    case "100%":
      return (width = `100%`);
    default:
      return (width = "none");
  }
};