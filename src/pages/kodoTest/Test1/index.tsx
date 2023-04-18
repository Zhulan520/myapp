import styles from './index.less';

import { Access, useAccess } from 'umi';

const KodoTest = (props: any) => {
  const access = useAccess(); // access 实例的成员: canReadFoo, canUpdateFoo, canDeleteFoo

  if (access.canReadFoo) {
    // 任意操作
  }

  return (
    <div>
      <Access accessible={access.canReadFoo} fallback={<div>没有浏览底部内容的权限</div>}>
        底部内容
      </Access>
      <Access
        accessible={access.canUpdateFoo()}
        fallback={<div className={styles.test}>没有更新权限</div>}
      >
        有更新权限
      </Access>
    </div>
  );
};
export default KodoTest;
