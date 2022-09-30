import React from "react";
import DashboardLayout from "Components/Templates/DashboardLayout";

import { Routes, Route } from "react-router-dom";
import DashboardOverview from "./Pages/DashboardOverview";
import Transactions from "./Pages/Transactions";

interface DashboardProps {}
const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
