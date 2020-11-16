import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#F64C75')};
    }
  }
`;


export const FormContent = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        background: rgba(255,255,255,0);
        border: 1;
        border-radius: 4px; 
        height: 44px;
        padding: 0 15px;
        margin: 0 0 10px;

    }

    button {
        margin: 5px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &hover {
            background: ${darken(0.03, '#3b9eff')};
        }
    }


    a {
        color: #FFF;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }
`;




export const Background = 'rgb(138, 5, 190)';
export const Highlight = 'white';
export const Primary = 'rgb(138, 5, 190)';
export const Secondary = '#5a037c';
export const Font = 'Roboto, sans-serif';
export const FontNumber = 'Fjalla One, sans-serif';
export const SecondaryFont = 'Bebas Neue, cursive';
export const TitleFont = 'Fjalla One, sans-serif';
