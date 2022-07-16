import { Global, css } from "@emotion/react";

const KonerGlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Happiness-Sans-Title";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2")
          format("woff2");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "ONE-Mobile-POP";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff")
          format("woff");
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
);

export default KonerGlobalStyle;
