import styles from './styles.module.scss';

interface ButtonProps {
  titleButton: string;
  colorButton: 'yellow' | 'green';
}

let styleButton: string;

export default function Button({ titleButton, colorButton }: ButtonProps) {

  switch (colorButton) {
    case 'yellow':
      styleButton = styles.colorButtonYellow;
      break;
    case 'green':
      styleButton = styles.colorButtonGreen;
      break;
  }

  return (
    <button className={styleButton}>{titleButton}</button>
  );
}