import React from "react";

import { Grid } from "@mui/material";

import DealForm from "../Forms/DealForm";
import { DealsContext } from "@/contexts/AppContextProvider";

import { IDeal } from "@/types/deals";

const classes = {
    root: {
        flexGrow: 1,
    },
    gridItem: {
        padding: 5,
        textAlign: "center",
    },
};

const DealFormsContainer = () => {
    const { deals } = React.useContext(DealsContext);

    return (
        <div style={classes.root}>
            <Grid container justifyContent="center" spacing={2}>
                {deals.map((deal: IDeal) => (
                    <Grid
                        item
                        key={deal.id}
                        sx={classes.gridItem}
                        xs={12}
                        md={3}
                    >
                        <DealForm dealId={deal.id} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default DealFormsContainer;
