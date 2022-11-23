export type StyleProps = {
  $color: string;
  $hoverColor: string;
  top?: string;
  right?: string;
};

export type Props = StyleProps & {
  text: string;
  onClick: () => void;
  dataTitle: string;
};
