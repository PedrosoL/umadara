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
            <Text>
              <div className="congresso">
                COONGRE<span className="fontBasic">SS</span>O
              </div>
            </Text>
          </Row>
          <Text size={40} lineHeight={24}>
            <Space>UUmadaara</Space>
          </Text>
          <Row justify="end">2K23</Row>
        </Space>
      </Text>

      <SocialMedia />

      <Space direction="vertical" align="start" className="hastag">
        <Text size={16}>
          <p style={{ margin: 0 }}>#congressoumadara</p>
        </Text>
      </Space>

      <Playlist />

      <Space direction="vertical" align="end" className="hastag">
        <Text size={16}>
          <p style={{ margin: 0 }}>#vempraumadara</p>
        </Text>
      </Space>

      <Theme />

      <Text size={16}>
        <Space direction="vertical">
          <p style={{ margin: 0, textAlign: "center", padding: "2rem 1rem" }}>
            Assembleia de Deus madureira Araraquara
          </p>
        </Space>
      </Text>
    </div>
  );
}

export default App;
