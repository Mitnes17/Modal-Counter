import { FC } from 'react';
import cat from '../../svg/cat.svg';
import { Props } from './Modal';
import * as S from './styled';

export const Modal: FC<Props> = ({ isCounter, isHidden }) => {
  const active = () => isCounter(!isHidden);

  return (
    <S.Modal
      onClick={active}
      className={isHidden ? 'hidden' : ''}
    >
      <S.Image>
        <img
          src={cat}
          alt='cat'
        />
      </S.Image>
      <h2>Open the counter</h2>
    </S.Modal>
  );
};
