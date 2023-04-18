import styles from './index.less';

import { useAccess } from 'umi';

const KodoTest = (props: any) => {
  const access = useAccess(); // access 实例的成员: canReadFoo, canUpdateFoo, canDeleteFoo

  if (access.canReadFoo) {
    // 任意操作
  }

  return (
    <div className={styles.zhengContainer}>
      <div className={styles.itemCenter}>
        <h1 className={styles.zhengName}>狰</h1>
        <p className={styles.zhengInfo}>
          狰是山海经中记载的中国妖怪，出章莪之山，样子像红色的豹但是有五条尾巴，有一只角，声音像击石。
        </p>
        <hr className={styles.hrStyle} />
        <p>
          <strong>山海经·西山经》西次三经</strong>
        </p>
        又西二百八十里，曰章莪之山，无草木，多瑶碧。所为甚怪。有兽焉，其状如赤豹，五尾一角，其音如击石，其名如“狰”。
        <hr className={styles.hrStyle} />
      </div>
    </div>
  );
};
export default KodoTest;
