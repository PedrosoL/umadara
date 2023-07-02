import S from "./styles.module.scss";

import { Collapse, Space } from "antd";
import { theme } from "../../utils/mock";

import Text from "../Text";
import { CaretRightOutlined } from "@ant-design/icons";

const Theme = () => {
  const items = [
    {
      key: "1",
      label: (
        <Space direction="vertical" size={0}>
          <Text color="var(--primary-100)" size={12}>
            Leia o texto na íntegra
          </Text>
          <Text>Daniel 3</Text>
        </Space>
      ),
      children: <div className={S.text}>{theme}</div>,
    },
  ];

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

      <Collapse
        ghost
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined
            rotate={isActive ? 90 : 0}
            style={{ color: "white" }}
          />
        )}
        items={items}
      />
    </Space>
  );
};

export default Theme;
