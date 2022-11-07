import { useState, FC } from 'react';
import { Button } from '../Button';
import { Props } from './Counter';
import * as S from './styled';

export const Counter: FC<Props> = ({ isCounter, isShown }) => {
  const [count, setCount] = useState(0);

  const minus = () => setCount(count - 1);

  const plus = () => setCount(count + 1);

  const reset = () => setCount(0);

  const close = () => isCounter(!isShown);

  return (
    <S.Counter className={isShown ? 'isShown' : ''}>
      <S.Close onClick={close}></S.Close>
      <S.H1>Counter</S.H1>
      <S.Count>{count}</S.Count>

      <S.Buttons>
        <Button
          onClick={minus}
          $color='#266299'
          $hoverColor='#003c82'
          text='-'
        ></Button>
        <Button
          onClick={plus}
          $color='coral'
          $hoverColor='#ff4e0d'
          text='+'
        ></Button>
      </S.Buttons>

      <Button
        onClick={reset}
        text='reset'
        $color='#755a57'
        $hoverColor='#722f37'
      ></Button>
    </S.Counter>
  );
};
