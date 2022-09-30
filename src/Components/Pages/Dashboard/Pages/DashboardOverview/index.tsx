import React from "react";
import {
  Section,
  Container,
  Overviews,
  SalesSectionLayout,
  GraphContainer,
  SendWireCard,
} from "./style";
import Typography from "Components/Atoms/Typography";
import OverviewCard from "Components/Molecules/OverviewCard";
import { Flex } from "styles/layouts/Flex";
import Divider from "Components/Atoms/Divider";
import TabNav from "Components/Molecules/TabNav";
import { Button, IconButton } from "Components/Atoms/Button";
import { ArrowDown, CaretSmall } from "Components/Atoms/SvgIcons";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { animateSlideInRight } from "styles/Base/Animation";
import { motion } from "framer-motion";

Chart.register(CategoryScale);

const data = {
  id: 1,
  title: "Average response Time",
  performance: "+4.14%",
  priorityType: 1,
  chart: {
    options: {
      responsive: true,
    },
    data: {
      labels: ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"],
      datasets: [
        {
          label: "",
          data: [10, 15, 40, 17, 30, 25, 25, 23],
          borderColor: "rgb(240, 93, 35)",
          backgroundColor: "rgba(240, 93, 35, 0.5)",
        },
      ],
    },
  },
};

interface DashboardProps {}
const DashboardOverview: React.FC<DashboardProps> = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={animateSlideInRight.variants}
      transition={animateSlideInRight.transition}
    >
      {/* Overview Section */}
      <Section>
        <Container>
          <Typography
            as="h5"
            className="heading-3 mb-20"
            text="Sales overview"
          />
          <Overviews>
            <OverviewCard title={`Today's sales`} value={`₦1,652.50`} />
            <OverviewCard
              title={`24 Aug - 01 Sep 21`}
              value={`₦1,652.50`}
              dark={true}
              duration={`This week`}
              graph="/assets/images/graph-1.svg"
            />
            <OverviewCard
              title={`24 Aug - 01 Sep 21`}
              value={`₦1,652.50`}
              duration={`This month`}
              graph="/assets/images/graph-2.svg"
            />
            <OverviewCard
              title={`Today's sales`}
              value={`₦1,652.50`}
              duration={`Last month`}
              graph="/assets/images/graph-3.svg"
            />
          </Overviews>
        </Container>
      </Section>
      {/* Sales Section */}
      <Section className="mt-40">
        <Container>
          <SalesSectionLayout>
            <div className="left">
              {/* Top */}
              <Flex
                gap="1rem"
                className="mb-20 responsive-flex-row"
                flexRowJcBetweenAiCenter
              >
                <Flex
                  gap="1rem"
                  className="responsive-flex-row"
                  flexRowAiCenter
                >
                  <Typography as="h5" className="heading-3" text="Sales" />
                  <Divider />
                  <TabNav navs={["7 days", "30 days"]} />
                  <IconButton
                    label="USD"
                    icon={<CaretSmall />}
                    iconPosition="right"
                    className="btn-primary btn-icon btn-sm"
                  />
                </Flex>
                <div>
                  <IconButton
                    className="btn-primary btn-sm"
                    label="Download report"
                    icon={<ArrowDown />}
                  />
                </div>
              </Flex>
              {/* Graph */}
              <GraphContainer>
                <Line options={data.chart.options} data={data.chart.data} />
              </GraphContainer>
            </div>
            <div className="right">
              <SendWireCard>
                <Typography as="h3" className="heading-7 max-width-200">
                  KlashaWire - send money to businesses globally from Africa
                </Typography>
                <Button className="btn-dark btn-sm mt-90" label="Send a Wire" />
              </SendWireCard>
            </div>
          </SalesSectionLayout>
        </Container>
      </Section>
    </motion.section>
  );
};

export default DashboardOverview;
