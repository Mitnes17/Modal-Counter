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

  &::after {
    content: attr(data-title);
    position: absolute;
    top: calc(-50% + 10px);
    right: -50%;
    padding: 3px 7px;
    border-radius: 10px;
    background-color: gray;
    opacity: 0;
    transition: 0.3s;
    font-size: 14px;
    font-family: inherit;
    text-transform: none;
    pointer-events: none;

    &:focus {
      outline: none;
    }
  }

  &:hover {
    background-color: #ff4e0d;
    transition: 0.3s;

    &::after {
      opacity: 1;
      transition: 0.3s;

      &:focus {
        outline: none;
      }
    }
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
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
