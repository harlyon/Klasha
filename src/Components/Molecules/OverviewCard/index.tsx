import Typography from "Components/Atoms/Typography";
import React from "react";
import { Wrapper } from "./style";

interface OverviewCardProps {
  title?: string;
  value?: string;
  duration?: string;
  dark?: Boolean;
  graph?: any;
}
const OverviewCard: React.FC<OverviewCardProps> = ({
  dark,
  duration,
  graph,
}) => {
  return (
    <Wrapper dark={dark}>
      <Typography
        as="h6"
        className={`heading-4 mb-15 ${dark && "color-white"}`}
        text={`Today's sales`}
      />
      {graph && (
        <div className="graph">
          <img src={`${graph}`} alt="" />
        </div>
      )}
      {duration && (
        <Typography
          as="h4"
          className={`heading-6 mb-5 ${dark && "color-white"}`}
          text={`This month`}
        />
      )}
      <Typography
        as="h4"
        className={`heading-5 ${dark && "color-white"}`}
        text={`₦1,652.50`}
      />
    </Wrapper>
  );
};

export default OverviewCard;
