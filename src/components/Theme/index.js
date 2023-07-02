import S from "./styles.module.scss";

import { Space } from "antd";
import { theme } from "../../utils/mock";

import Text from "../Text";

const Theme = () => {
  return (
    <Space direction="vertical" size={24} className={S.bible}>
      <Space direction="vertical">
        <Space size={0} direction="vertical">
          <Text size={14} color="var(--primary-100)">
            TEMA
          </Text>
          <div>
            <Text size={12}>
              TEMOS UMA IDENTIDADE, NÃO NOS CURVAMOS AO MUNDO
            </Text>
          </div>
        </Space>
        <Space size={0} direction="vertical">
          <Text size={14} color="var(--primary-100)">
            DIVISA
          </Text>
          <div>
            <Text size={12}>SÓ AO SENHOR ADORAREMOS!</Text>
          </div>
        </Space>
      </Space>

      <Space direction="vertical" size={8} className={S.text}>
        <Text>Daniel 3</Text>
        <div>{theme}</div>
      </Space>
    </Space>
  );
};

export default Theme;
