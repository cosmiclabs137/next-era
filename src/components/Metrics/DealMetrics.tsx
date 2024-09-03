import React from "react";

import { IMetrics } from "@/types/metrics";

interface DealMetricsProps {
    metrics: IMetrics;
}

const DealMetrics = ({ metrics }: DealMetricsProps) => {
    console.log(metrics);
    return <div>DealMetrics</div>;
};

export default DealMetrics;
