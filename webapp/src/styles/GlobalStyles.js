import { css } from '@emotion/core'

export const globalStyles = css`
  @font-face {
    font-family: 'SquiznorBB';
    src: local('SquiznorBB'), url('../fonts/Boov/SquiznorBB.ttf') format('truetype');
    font-weight: normal;
  }
  .globalstyles {
    margin: 0 auto;
    padding: 16px 48px;
    height: 100vw;

    .button-controls {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 32px;
    }

    h1 {
      margin-top: 0;
    }

    p {
      margin: 0;
    }

    input, select {
      margin-left: 16px;
      margin-bottom: 16px;
    }

    button {
      margin: 8px 16px;
      width: 120px;
      height: 48px;
      border: none;
      background: #cacbf3;
      border-radius: 8px;
      &:hover {
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }
    }
  }
  .en-lang {
    .table-data:nth-of-type(odd) {
      background: #f7f7ff;
      &:hover {
        background: #ebecff;
      }
    }
    .table-data:nth-of-type(even) {
      background: #cacbf3;
      &:hover {
        background: #c3c4ff;
      }
    }
  }

  .bv-lang {
    background: black url('https://cdn.wallpapersafari.com/27/71/J2EGpL.jpg') no-repeat fixed center;
    font-family: SquiznorBB;
    font-size: 32px;
    color: #00c9a7 !important;
    * button,
    a {
      font-size: 32px;
      font-family: SquiznorBB;
      color: #00c9a7 !important;
      &:hover {
        color: #fd00ff !important;
        transition: 0.3s;
      }
    }

    input {
      background: white;
      border: none;
      font-size: 32px;
      font-family: SquiznorBB;
      color: #00c9a7 !important;
    }

    button {
      cursor: pointer;
      width: 200px;
      height: 80px;
      background: none;
      margin: 0 20px;
      box-shadow: none;
      &:hover {
        box-shadow: none;
        border-color: #fd00ff !important;
        transition: 0.3s;
      }
    }
    .table-data:nth-of-type(odd) {
      &:hover {
        background: #fd00ff;
      }
    }
    .table-data:nth-of-type(even) {
      &:hover {
        background: #fd00ff;
      }
    }
    .inner-modal {
      border-radius: 30% !important;
      background: rgb(255 52 247 / 50%);
      border: 2px solid #00c9a7;
    }

    .payment-type {
      align-items: center !important;
    }

    // animations
    @keyframes hvr-bob {
      0% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
      }
      50% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
      }
      100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
      }
    }
    @-webkit-keyframes hvr-bob-float {
      100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
      }
    }
    @keyframes hvr-bob-float {
      100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
      }
    }
    .hvr-bob {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .hvr-bob:hover,
    .hvr-bob:focus,
    .hvr-bob:active {
      -webkit-animation-name: hvr-bob-float, hvr-bob;
      animation-name: hvr-bob-float, hvr-bob;
      -webkit-animation-duration: 0.3s, 1.5s;
      animation-duration: 0.3s, 1.5s;
      -webkit-animation-delay: 0s, 0.3s;
      animation-delay: 0s, 0.3s;
      -webkit-animation-timing-function: ease-out, ease-in-out;
      animation-timing-function: ease-out, ease-in-out;
      -webkit-animation-iteration-count: 1, infinite;
      animation-iteration-count: 1, infinite;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-direction: normal, alternate;
      animation-direction: normal, alternate;
    }

    @-webkit-keyframes hvr-ripple-out {
      100% {
        top: -12px;
        right: -12px;
        bottom: -12px;
        left: -12px;
        opacity: 0;
      }
    }
    @keyframes hvr-ripple-out {
      100% {
        top: -12px;
        right: -12px;
        bottom: -12px;
        left: -12px;
        opacity: 0;
      }
    }
    .hvr-ripple-out {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      position: relative;
    }
    .hvr-ripple-out:before {
      content: '';
      position: absolute;
      border: 2px solid #fd00ff;
      border-radius: 30%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
    }
    .hvr-ripple-out:hover:before,
    .hvr-ripple-out:focus:before,
    .hvr-ripple-out:active:before {
      -webkit-animation-name: hvr-ripple-out;
      animation-name: hvr-ripple-out;
    }
  }
`

export const formstyles = css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .payment-container,
  .id-type {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .description {
    input {
      width: 80%;
    }
  }
  .payment-type {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: row;
  }
`
