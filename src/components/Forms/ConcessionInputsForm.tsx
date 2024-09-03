import React from "react";

import { Tooltip, Typography } from "@mui/material";

import { dollarAdornment } from "../Adornments/Adornments";
import Collapsible from "../Collapsible/Collapsible";
import InputWithTooltip from "../Inputs/InputWithTooltip";

import { DealInputsFormProps } from "@/types/deals";

const ConcessionInputsForm = ({
    deal,
    disabled,
    handleChange,
}: DealInputsFormProps) => {
    const tooltipFontSize: string = "0.8rem";
    return (
        <Collapsible id="concessions-input-panel-content" summary="Concessions">
            <Tooltip
                arrow
                followCursor
                title="Landlord concessions"
                placement="top"
                describeChild={true}
            >
                <Typography variant="body1" fontSize={tooltipFontSize}>
                    Landlord
                </Typography>
            </Tooltip>
            <InputWithTooltip
                label="Other one-time landlord cost"
                value={deal?.otherOneTimeLandlordCost}
                handleChange={(e) =>
                    handleChange(e, "otherOneTimeLandlordCost")
                }
                inputProps={{ min: 0, step: 0.01 }}
                adornment={{ startAdornment: dollarAdornment }}
                title="Another one-time cost for landlord to be paid up front (e.g., lease buyout)."
                disabled={disabled}
            />

            <InputWithTooltip
                label="Other monthly landlord cost"
                value={deal?.otherMonthlyLandlordCost}
                handleChange={(e) =>
                    handleChange(e, "otherMonthlyLandlordCost")
                }
                inputProps={{ min: 0, step: 0.01 }}
                adornment={{ startAdornment: dollarAdornment }}
                title="Another monthly cost for landlord (e.g., parking discount)."
                disabled={disabled}
            />
            <InputWithTooltip
                label="TI allowance per RSF"
                value={deal?.tiAllowancePerRsf}
                handleChange={(e) => handleChange(e, "tiAllowancePerRsf")}
                inputProps={{ min: 0, step: 0.01 }}
                adornment={{ startAdornment: dollarAdornment }}
                title="The cost per rentable square foot that the landlord will pay."
                disabled={disabled}
            />
            <InputWithTooltip
                label="Months free rent"
                value={deal?.monthsFreeRent}
                handleChange={(e) => handleChange(e, "monthsFreeRent")}
                inputProps={{ min: 0, step: 1 }}
                title="The number of free months. (Front loaded, evenly spread, back loaded)?"
                disabled={disabled}
            />
            <Tooltip
                arrow
                followCursor
                title="Tenant concessions"
                placement="top"
                describeChild={true}
            >
                <Typography variant="body1" fontSize={tooltipFontSize}>
                    Tenant
                </Typography>
            </Tooltip>

            <InputWithTooltip
                label="Other one-time tenant cost."
                value={deal?.otherOneTimeTenantCost}
                handleChange={(e) => handleChange(e, "otherOneTimeTenantCost")}
                inputProps={{ min: 0, step: 0.01 }}
                adornment={{ startAdornment: dollarAdornment }}
                title="Another one-time cost for tenant to be paid up front (e.g., key money)."
                disabled={disabled}
            />
            <InputWithTooltip
                label="Other monthly tenant cost"
                value={deal?.otherMonthlyTenantCost}
                handleChange={(e) => handleChange(e, "otherMonthlyTenantCost")}
                inputProps={{ min: 0, step: 0.01 }}
                adornment={{ startAdornment: dollarAdornment }}
                title="Another monthly cost for tenant (e.g., parking)."
                disabled={disabled}
            />

            <InputWithTooltip
                label="TI cost per RSF"
                value={deal?.tiCostPerRsf}
                handleChange={(e) => handleChange(e, "tiCostPerRsf")}
                inputProps={{ min: 0, step: 0.01 }}
                adornment={{ startAdornment: dollarAdornment }}
                title="The cost per rentable square foot that the tenant will pay."
                disabled={disabled}
            />
        </Collapsible>
    );
};

export default ConcessionInputsForm;
