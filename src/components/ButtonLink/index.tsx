import styles from './styles.module.scss';

interface ButtonLinkProps {
  titleButton: string;
  colorButton: 'yellow' | 'green';
  clickAncora: string;
}

let styleButtonLink: string;

export default function ButtonLink({ titleButton, colorButton, clickAncora }: ButtonLinkProps) {

  switch (colorButton) {
    case 'yellow':
      styleButtonLink = styles.colorButtonYellow;
      break;
    case 'green':
      styleButtonLink = styles.colorButtonGreen;
      break;
  }

  return (
    <a
      href={clickAncora}
      className={styleButtonLink}
    >
      {titleButton}
    </a>
  );
}