import { Button, IconButton } from "Components/Atoms/Button";
import Filter from "Components/Atoms/SvgIcons/Filter";
import Typography from "Components/Atoms/Typography";
import Pagination from "Components/Molecules/Pagination";
import SearchInput from "Components/Molecules/SearchInput";
import Table from "Components/Organisms/Table";
import React from "react";
import { Flex } from "styles/layouts/Flex";
import { Section, Container, TableWrapper } from "./style";
import { motion } from "framer-motion";
import { animateSlideInRight } from "styles/Base/Animation";

const columns = [
  {
    label: "Transaction ID",
    path: "transactionId",
  },
  {
    label: "Source",
    path: "source",
  },
  {
    label: "Customer name",
    path: "customerName",
  },
  {
    label: "Customer email",
    path: "customerEmail",
  },
  {
    label: "Amount",
    path: "amount",
  },
  {
    label: "Request date",
    path: "requestDate",
  },
  {
    label: "Status",
    path: "status",
  },
];

const data = [
  {
    id: "1",
    transactionId: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending",
  },
  {
    id: "1",
    transactionId: "GB124QWERTY12346",
    source: "UBA",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Successful",
  },
  {
    id: "1",
    transactionId: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending",
  },
  {
    id: "1",
    transactionId: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending",
  },
];

interface DashboardProps {}
const Transactions: React.FC<DashboardProps> = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={animateSlideInRight.variants}
      transition={animateSlideInRight.transition}
    >
      <Section>
        <Container>
          <TableWrapper>
            <div className="title">
              <Typography
                as="h5"
                className="heading-8"
                text="Transaction history"
              />
            </div>
            <div className="actions">
              <div>
                <SearchInput />
              </div>
              <Flex gap="1.2rem" flexRowAiCenter>
                <IconButton
                  className="btn-primary btn-sm"
                  label="Filter"
                  iconPosition="right"
                  icon={<Filter />}
                />
                <Button className="btn-primary btn-sm" label="Export" />
              </Flex>
            </div>
            <div>
              <Table data={data} columns={columns} />
            </div>

            <div className="pagination">
              <Pagination />
            </div>
          </TableWrapper>
        </Container>
      </Section>
    </motion.section>
  );
};

export default Transactions;
