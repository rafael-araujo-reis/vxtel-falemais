import styles from './styles.module.scss';

interface InputRangeProps {
  minutes: number;
  handleSelectMinutes: (props: any) => void;
}

export default function InputRange({ minutes, handleSelectMinutes }: InputRangeProps) {
  return (
    <div className={styles.rangeWrap} data-testid="pure_input_range">
      <div className={styles.rangeValue} id={'rangeV'}>{minutes}</div>
      <input
        id="range"
        type="range"
        min="0"
        max="500"
        value={minutes}
        step="10"
        className="thumb thumb--zindex-4"
        onChange={handleSelectMinutes} />
    </div>
  );
}