import styled from 'styled-components';

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 500px;
  margin: 40px auto 50px;
  border: 1px solid gray;
  position: relative;
  border-radius: 9px;
  background-color: #d0e3eb;
  box-shadow: 0 4px 2px -2px #e4d9d9, 0 6px 3px -2px #ac9d9d;
  transition: 0.4s;
  opacity: 0;

  &.isShown {
    opacity: 1;
    transition: 0.4s;
  }
`;

export const H1 = styled.h1`
  font-style: bold;
`;

export const Count = styled.h2`
  font-size: 80px;
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 60px;
`;

export const Close = styled.button`
  position: absolute;
  width: 25px;
  height: 20px;
  right: 20px;
  top: 20px;
  border: none;
  background-color: inherit;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -5;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: black;
    transform: rotate(135deg);
    transition: 0.3s;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -5;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: black;
    transform: rotate(-135deg);
    transition: 0.3s;
  }

  &:hover {
    &::after,
    &::before {
      width: 120%;
      background-color: red;
      transition: 0.3s;
    }

    span {
      opacity: 1;
      transition: 0.3s;
    }
  }

  span {
    position: absolute;
    top: -10px;
    right: -130px;
    padding: 3px 7px;
    background-color: gray;
    color: white;
    border-radius: 10px;
    opacity: 0;
    font-size: 14px;
    transition: 0.3s;
    text-transform: none;
    pointer-events: none;
  }
`;
