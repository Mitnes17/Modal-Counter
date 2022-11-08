import { useState, FC, useEffect, useCallback, useMemo } from 'react';
import { Button } from '../Button';
import { Props } from './Counter';
import * as S from './styled';

export const Counter: FC<Props> = ({ isCounter, isShown }) => {
  const [count, setCount] = useState(0);

  const buttons = useMemo(
    () => ({
      Escape: () => isCounter(false),
      NumpadAdd: () => setCount(count + 1),
      NumpadSubtract: () => setCount(count - 1),
      Space: () => setCount(0),
      Enter: () => isCounter(true),
    }),
    [count, isCounter]
  );

  const buttonsControl = useCallback(
    (e: any) => buttons[e.code as keyof typeof buttons]?.(),
    [buttons]
  );

  useEffect(() => {
    document.addEventListener('keydown', buttonsControl);

    return () => document.removeEventListener('keydown', buttonsControl);
  }, [buttonsControl]);

  return (
    <S.Counter className={isShown ? 'isShown' : ''}>
      <S.Close onClick={buttons.Escape}>
        <span>Or press "Escape"</span>
      </S.Close>
      <S.H1>Counter</S.H1>
      <S.Count>{count}</S.Count>

      <S.Buttons>
        <Button
          onClick={buttons.NumpadSubtract}
          $color='#266299'
          $hoverColor='#003c82'
          text='-'
          dataTitle='Or press "-"'
        ></Button>
        <Button
          onClick={buttons.NumpadAdd}
          $color='coral'
          $hoverColor='#ff4e0d'
          text='+'
          dataTitle='Or press "+"'
        ></Button>
      </S.Buttons>

      <Button
        onClick={buttons.Space}
        text='reset'
        $color='#755a57'
        $hoverColor='#722f37'
        dataTitle='Or press "Space"'
        top='-15px'
        right='-125px'
      ></Button>
    </S.Counter>
  );
};
