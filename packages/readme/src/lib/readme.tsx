import styles from './readme.module.css';

/* eslint-disable-next-line */
export interface ReadmeProps {}

export function Readme(props: ReadmeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Readme!</h1>
    </div>
  );
}

export default Readme;
