import { conversionPixelToRem } from "../../utils/functions";

const Container = ({ padding, children }) => {
  return (
    <div
      style={{
        padding: `${conversionPixelToRem(padding[0])}rem ${conversionPixelToRem(
          padding[1]
        )}rem`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
