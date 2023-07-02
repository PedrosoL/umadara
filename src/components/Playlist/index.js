import S from "./styles.module.scss";

import Text from "../Text";
import { Collapse, Space } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { items } from "../../utils/mock";

const Playlist = () => {
  return (
    <Space className={S.container} direction="vertical" size={16}>
      <div style={{ padding: "0 2rem" }}>
        <Text size={24}>Letras</Text>
      </div>

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

export default Playlist;
