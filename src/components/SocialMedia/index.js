import S from "./styles.module.scss";

import { Image, Space } from "antd";
import Text from "../Text";

const SocialMedia = () => {
  return (
    <div className={S.container}>
      <Space
        direction="vertical"
        size={0}
        // align="center"
        className={S.socialTitle}
      >
        <Text size={14}>SIGA-NOS</Text>
        <Text size={10}>NAS</Text>
        <Text size={24} color="var(--white2)" lineHeight={16}>
          REDES SOCIAIS
        </Text>
      </Space>

      <Space direction="vertical" className={S.socialMedias}>
        <a href="https://www.instagram.com/umadara_/" alt="Instagram">
          <Space>
            <Image
              preview={false}
              src="/assets/instagram_icon.png"
              width={40}
              height={40}
            />
            <Text size={20}>@umadara_</Text>
          </Space>
        </a>

        <a href="https://www.facebook.com/umadaraoficial" alt="Facebook">
          <Space>
            <Image
              preview={false}
              src="/assets/face_icon.png"
              width={40}
              height={40}
            />
            <Text size={20}>umadaraoficial</Text>
          </Space>
        </a>
      </Space>
    </div>
  );
};

export default SocialMedia;
