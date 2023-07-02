import "./App.css";

import Text from "./components/Text";
import Theme from "./components/Theme";
import Playlist from "./components/Playlist";
import { Row, Space } from "antd";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="app">
      <Text>
        <Space direction="vertical" size={0} className="title">
          <Row justify="start">
            <Text lineHeight={4}>CONGRESSO</Text>
          </Row>
          <Text size={40} lineHeight={24}>
            <Space>Umadaara</Space>
          </Text>
          <Row justify="end">2K23</Row>
        </Space>
      </Text>

      <Playlist />

      <Space direction="vertical" align="end" className="hastag">
        <Text size={16}>
          <p style={{ margin: 0 }}>#vempraumadara</p>
        </Text>
      </Space>

      <Theme />

      <Space direction="vertical" align="start" className="hastag">
        <Text size={16}>
          <p style={{ margin: 0 }}>#congressoumadara</p>
        </Text>
      </Space>

      <SocialMedia />

      <Text size={16}>
        <Space direction="vertical">
          <p style={{ margin: 0, textAlign: "center", padding: "2rem 0" }}>
            Assembleia de Deus madureira Araraquara
          </p>
        </Space>
      </Text>
    </div>
  );
}

export default App;
