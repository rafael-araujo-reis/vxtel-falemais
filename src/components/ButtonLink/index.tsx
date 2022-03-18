import styles from './styles.module.scss';

interface ButtonLinkProps {
  titleButton: string;
  colorButton: 'yellow' | 'green';
  click: 'string';
}

let styleButtonLink: string;

export default function ButtonLink({ titleButton, colorButton, click }: ButtonLinkProps) {

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
      href={click}
      className={styleButtonLink}
    >
      {titleButton}
    </a>
  );
}