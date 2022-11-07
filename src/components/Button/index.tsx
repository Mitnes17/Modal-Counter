import { FC } from 'react';
import { Props } from './Button';
import * as S from './styled';

export const Button: FC<Props> = ({ $color, $hoverColor, text, onClick }) => {
  return (
    <S.Button
      {...{ $color }}
      {...{ onClick }}
      {...{ $hoverColor }}
    >
      {text}
    </S.Button>
  );
};
