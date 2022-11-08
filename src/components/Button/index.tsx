import { FC } from 'react';
import { Props } from './Button';
import * as S from './styled';

export const Button: FC<Props> = ({
  $color,
  $hoverColor,
  text,
  onClick,
  dataTitle,
  top,
  right,
}) => {
  return (
    <S.Button
      {...{ $color }}
      {...{ onClick }}
      {...{ $hoverColor }}
      {...{ top }}
      {...{ right }}
      data-title={dataTitle}
    >
      {text}
    </S.Button>
  );
};
