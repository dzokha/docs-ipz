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
    title: 'Nghiên cứu & Giải pháp Chuyên sâu',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Có thể đổi thành icon về DNA/Shield sau
    description: (
      <>
        Nơi hệ thống hóa và công bố các công trình R&D cốt lõi về <b>Tin sinh học (Bioinformatics)</b> và <b>An ninh mạng Chuyên sâu</b>. Chúng tôi chuyển hóa lý thuyết toán tin phức tạp thành các giải pháp công nghệ có khả năng ứng dụng thực tế cao.
      </>
    ),
  },
  {
    title: 'Tài sản Trí tuệ & Chiến lược Số',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Có thể đổi thành icon về Patent/Brand sau
    description: (
      <>
        Khai thác giá trị thương mại từ dữ liệu lớn thông qua phân tích <b>Báo cáo Sáng chế (Patents)</b> và bảo hộ <b>Sở hữu Trí tuệ</b>. Từ đó, định hình và tư vấn chiến lược xây dựng thương hiệu số bền vững cho tổ chức.
      </>
    ),
  },
  {
    title: 'Hệ sinh thái Tri thức Mở',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Có thể đổi thành icon về Open Source/Community sau
    description: (
      <>
        Hiện thực hóa sứ mệnh "Chuyển hóa dữ liệu thành giá trị" thông qua việc chia sẻ các gói thư viện mã nguồn mở <b>(Python Packages)</b>, kho tài nguyên kỹ thuật dùng chung và chuỗi ấn phẩm khoa học phi lợi nhuận cho cộng đồng.
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
