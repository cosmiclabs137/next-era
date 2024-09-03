import React from "react";

import { Paper, Typography } from "@mui/material";

import BasicInputsForm from "./BasicInputsForm";
import ConcessionInputsForm from "./ConcessionInputsForm";
import OtherInputsForm from "./OtherInputsForm";

import DealMenu from "../Menus/DealMenu";
import DealMetrics from "../Metrics/DealMetrics";

import { DealsContext } from "@/contexts/AppContextProvider";

import { dealFactory } from "@/utils";

interface DealFormProps {
    dealId: number;
    disable?: Record<string, boolean>;
}

const DealForm = ({
    dealId,
    disable = { metrics: false, name: false },
}: DealFormProps) => {
    const [disabled, setDisabled] = React.useState(false);

    const { deals, metrics, dealsDispatch, metricsDispatch } =
        React.useContext(DealsContext);
    console.log("DealForm: ", metrics);

    // // NOTE: this is a hack just to "get things working..."
    const deal = [dealFactory(0)][dealId];

    const handleChange = (
        e: any,
        key: string | number,
        type: string = "number"
    ) => {
        const value = e.target.value;

        dealsDispatch({
            type: "updated",
            value: type === "string" ? value : Number(value),
            key: key,
            id: dealId,
        });
    };

    return (
        <Paper sx={{ p: 2 }}>
            {!disable.name && (
                <Typography variant="h6">
                    {deal?.name.length > 0 ? deal?.name : "New Deal"}
                </Typography>
            )}
            <DealMenu
                dealId={dealId}
                disabled={disabled}
                setDisabled={setDisabled}
            />
            {!disable.metrics && (
                <DealMetrics metrics={[{ landlord: {}, tenant: {} }][dealId]} />
            )}
            <form>
                <BasicInputsForm
                    deal={deal}
                    handleChange={handleChange}
                    disabled={disabled}
                />
                <ConcessionInputsForm
                    deal={deal}
                    handleChange={handleChange}
                    disabled={disabled}
                />
                <OtherInputsForm
                    deal={deal}
                    handleChange={handleChange}
                    disabled={disabled}
                />
            </form>
            <DealMenu
                dealId={dealId}
                disabled={disabled}
                setDisabled={setDisabled}
            />
        </Paper>
    );
};

export default DealForm;
