import { FaInfoCircle, FaMinusCircle } from 'react-icons/fa';
import styles from './styles.module.scss';

interface HasCoverageProps {
  hasCoverage: boolean;
  type?: 'info' | 'error';
  message?: string;
}

export default function BoxAlert(hasCoverage: HasCoverageProps) {
  return (
    hasCoverage.type === 'info' ? (
      <div className={styles.boxAlertInfo}>
        <FaInfoCircle color="#FF9C07" fontSize="3rem" />
        <p>
          {hasCoverage.message}
        </p>
      </div>
    ) : (
      <div className={styles.boxAlertError}>
        <FaMinusCircle color="#FF5D53" fontSize="3rem" />
        <p>
          {hasCoverage.message}
        </p>
      </div>
    )
  );
}