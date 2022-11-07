import styled from 'styled-components';
import { StyleProps } from './Button';

export const Button = styled.button<StyleProps>`
  display: flex;
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

  &:hover {
    color: black;
    transition: 0.3s;
    background-color: ${({ $hoverColor }) => $hoverColor};
  }
`;
