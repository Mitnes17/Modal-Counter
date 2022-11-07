import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  column-gap: 20px;
  top: 40%;
  left: calc(50% - 100px);
  width: 200px;
  height: 100px;
  opacity: 1;
  padding-left: 20px;
  border-radius: 7px;
  border: 1px solid black;
  background-color: coral;
  transition: 0.4s;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: #ff4e0d;
    transition: 0.3s;
  }

  &.hidden {
    opacity: 0;
    transition: 0.4s;
  }
`;

export const Image = styled.figure`
  width: 50px;
  height: 50px;
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }
`;
