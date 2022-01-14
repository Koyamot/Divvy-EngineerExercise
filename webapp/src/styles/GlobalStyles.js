import { css } from '@emotion/core'

export const globalStyles = css`
  .globalstyles {
    @font-face {
        font-family: "SquiznorBB";
        src: local("SquiznorBB"),
         url("../fonts/Boov/SquiznorBB.ttf") format("truetype");
        font-weight: normal;
        }
  }

  .en-lang {
    font-family: Times New Roman;
  }

  .bv-lang {
    font-family: SquiznorBB;
    font-size: 32px;
    color: #00C9A7 !important;
    button, select {
      font-family: SquiznorBB;
    }
  }
`
