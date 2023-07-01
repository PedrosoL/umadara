import S from "./styles.module.scss";

import { Image, Row, Space } from "antd";
import Text from "../Text";

const Music = ({ title, subTitle, letter }) => {
  return (
    <Row className={S.music}>
      <Space>
        <Image
          preview={false}
          src="/assets/playlist_umadara.jpg"
          width={64}
          height={64}
        />
        <Space direction="vertical" align="start" size={0}>
          <Text size={16}>{title}</Text>
          <Text size={12}>{subTitle}</Text>
        </Space>
      </Space>
    </Row>
  );
};

export default Music;
