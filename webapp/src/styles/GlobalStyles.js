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

    p {
      margin: 0;
    }

    input {
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
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.2);
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
      height: 100px;
      padding: 16px 24px;
      background: none;
      border: 2px solid #00c9a7;
      border-radius: 30%;
      margin: 0 20px;
      &:hover {
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
