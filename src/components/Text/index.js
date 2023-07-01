import { conversionPixelToRem } from "../../utils/functions";
import { Typography } from "antd";

const Text = ({
  size = 16,
  color = "#fefefe",
  bold = false,
  lineHeight,
  children,
  ...props
}) => (
  <Typography.Text
    style={{
      fontSize: `${conversionPixelToRem(size)}rem`,
      fontWeight: `${bold ? 700 : 500}`,
      color: color,
      lineHeight: `${lineHeight && lineHeight}px`,
    }}
    {...props}
  >
    {children}
  </Typography.Text>
);

export default Text;
