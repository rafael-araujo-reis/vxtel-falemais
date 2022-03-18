import styles from './styles.module.scss';

interface SignButtonProps {
  title: string;
}
export default function SignButton({ title }: SignButtonProps) {
  return (
    <button className={styles.containerSignButton}>{title}</button>
  );
}