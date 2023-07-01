import S from "./styles.module.scss";

import { Space } from "antd";
import { theme } from "../../utils/mock";

import Text from "../Text";

const Theme = () => {
  return (
    <Space direction="vertical" size={24} className={S.bible}>
      <Text size={24}>Tema</Text>
      <Space direction="vertical" size={8}>
        <Text>Daniel 3</Text>
        <div>{theme}</div>
      </Space>
    </Space>
  );
};

export default Theme;
