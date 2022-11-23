import { FC } from 'react';
import { Props } from './Modal';
import * as S from './styled';

export const Modal: FC<Props> = ({ isCounter, isHidden }) => {
  const active = () => isCounter(!isHidden);

  return (
    <S.Modal
      onClick={active}
      className={isHidden ? 'hidden' : ''}
      data-title='Or press "Enter"'
    >
      <S.Image>
        <img
          src={require('../../svg/cat.svg').default}
          alt='cat'
        />
      </S.Image>
      <h2>Open the counter</h2>
    </S.Modal>
  );
};
