import styled from 'styled-components';
import { StyleProps } from './Button';

export const Button = styled.button<StyleProps>`
  display: flex;
  position: relative;
  width: 130px;
  height: 35px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ $color }) => $color};
  border: none;
  border-radius: 4px;
  transition: 0.3s;
  font-size: 25px;
  text-transform: uppercase;
  transition: 1s;
  cursor: pointer;

  &::before {
    content: attr(data-title);
    position: absolute;
    top: ${({ top }) => (top ? top : '-30px')};
    right: ${({ right }) => (right ? right : '-70px')};
    padding: 3px 7px;
    border-radius: 10px;
    background-color: gray;
    opacity: 0;
    transition: 0.3s;
    font-size: 14px;
    font-family: inherit;
    text-transform: none;
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: white;
    transition: 0.3s;
    background-color: ${({ $hoverColor }) => $hoverColor};

    &::before {
      opacity: 1;
      transition: 0.3s;
    }
  }
`;
