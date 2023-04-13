import styles from './index.less';
const PagesLoading = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
    >
      <div className={styles.container}>
        <span>Loading...</span>
        <div className={styles.circle}>
          <div className={styles.ring} />
        </div>
      </div>
    </div>
  );
};
export default PagesLoading;
