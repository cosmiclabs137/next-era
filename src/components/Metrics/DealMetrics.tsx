import React from "react";

import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { toCurrency } from "../../finance";

import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const MetricsText = ({ children }: any) => (
    <Typography variant="subtitle1" color="InfoText" gutterBottom>
        {children}
    </Typography>
);

const Item = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: "0.7rem",
}));

import { IMetrics } from "@/types/metrics";

interface DealMetricsProps {
    metrics: IMetrics;
}

const DealMetrics = ({ metrics }: DealMetricsProps) => {
    const landlord = metrics?.landlord;
    const tenant = metrics?.tenant;

    return (
        <Stack direction="row" spacing={2} justifyContent="space-around">
            <Item>
                <Tooltip
                    arrow
                    followCursor
                    title="Landlord net effective rate / RSF."
                    placement="top"
                    describeChild
                >
                    <span>
                        <MetricsText>
                            Landlord: {toCurrency(landlord)}
                        </MetricsText>
                    </span>
                </Tooltip>
            </Item>

            <Item>
                <Tooltip
                    arrow
                    followCursor
                    title="Tenant net effective rate / RSF."
                    placement="top"
                    describeChild
                >
                    <span>
                        <MetricsText>Tenant: {toCurrency(tenant)}</MetricsText>
                    </span>
                </Tooltip>
            </Item>
        </Stack>
    );
};

export default DealMetrics;
