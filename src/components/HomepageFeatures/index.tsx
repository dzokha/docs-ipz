import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Trải nghiệm Người dùng Tối ưu',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cấu trúc được thiết kế tinh gọn và trực quan, giúp người dùng tiếp cận thông tin kỹ thuật một cách nhanh chóng và liền mạch.
      </>
    ),
  },
  {
    title: 'Tập trung vào Giá trị Nội dung',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chúng tôi tối ưu hóa quy trình quản lý tri thức, cho phép bạn dành trọn nguồn lực vào việc phát triển nội dung và giải pháp thay vì loay hoay với hạ tầng.
      </>
    ),
  },
  {
    title: 'Nền tảng Công nghệ Tiên tiến',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Vận hành trên nền tảng React hiện đại, hỗ trợ khả năng tùy biến linh hoạt và sẵn sàng mở rộng quy mô hệ thống theo tốc độ tăng trưởng của sản phẩm.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
