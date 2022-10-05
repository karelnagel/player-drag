import { Composition } from "remotion";
import { MyComposition } from "./MyComp";
import "../styles/global.css";
import { defaultProps } from "../types/MyComp";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={defaultProps}
      />
    </>
  );
};
