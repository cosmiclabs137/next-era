"use client";

import React from "react";

import BarChartIcon from "@mui/icons-material/BarChart";
import CalculateIcon from "@mui/icons-material/Calculate";
import TableViewIcon from "@mui/icons-material/TableView";
import { Box, Grid, Tab } from "@mui/material";
import {
    TabContext,
    TabList as MuiTabList,
    TabPanel as MuiTabPanel,
} from "@mui/lab";

import DealForm from "../Forms/DealForm";

const DealTab = () => {
    const [currentTabIndex, setCurrentTabIndex] = React.useState("0");

    const handleTabChange = (e: any, tabIndex: string) =>
        setCurrentTabIndex(tabIndex);

    let dealId = 0;

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={currentTabIndex}>
                <Box>
                    <TabList handleTabChange={handleTabChange} />
                </Box>
                <Grid
                    container
                    flexGrow={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <TabPanels
                        currentTabIndex={currentTabIndex}
                        dealId={dealId}
                    />
                </Grid>
            </TabContext>
        </Box>
    );
};

interface TabListProps {
    handleTabChange: (e: any, tabIndex: string) => void;
}

const TabList = ({ handleTabChange }: TabListProps) => {
    return (
        <MuiTabList onChange={handleTabChange} aria-label="deal tabs" centered>
            <Tab value="0" icon={<TableViewIcon />} label="Inputs" key={0} />
            <Tab value="1" icon={<BarChartIcon />} label="Summary" key={1} />
            <Tab
                value="2"
                icon={<CalculateIcon />}
                label="Calculations"
                key={2}
            />
        </MuiTabList>
    );
};

interface TabPanelProps {
    children: React.ReactElement<any, any> | string | null;
    value: string;
    style?: Record<string, string>;
}

const TabPanel = ({ children, value, style }: TabPanelProps) => {
    return (
        <MuiTabPanel value={value} style={style}>
            <Grid
                component="section"
                item
                // xs={12}
                // elevation={4}
                className="sticky"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    mt: 2,
                }}
            >
                {children}
            </Grid>
        </MuiTabPanel>
    );
};

interface TabPanelsProps {
    currentTabIndex: string;
    dealId: number;
}

const TabPanels = ({ currentTabIndex, dealId }: TabPanelsProps) => {
    return (
        <>
            {currentTabIndex === "0" && (
                <TabPanel value="0">
                    {/* This is where the deal forms go */}
                    <DealForm dealId={dealId} />
                    {/* <InputsContainer /> */}
                </TabPanel>
            )}

            {currentTabIndex === "1" && (
                <TabPanel value="1">
                    This is where the summary goes
                    {/* <Summary
                                tenantDeals={[deferredTenantDeals]}
                                landlordDeals={[
                                    deferredLandlordDeals,
                                ]}
                            /> */}
                </TabPanel>
            )}

            {currentTabIndex === "2" && (
                <TabPanel value="2" style={{ width: "100%" }}>
                    Deals tables go here
                    {/* <DealTablesContainer
                                deals={deferredCalculatedDeals}
                            /> */}
                </TabPanel>
            )}
        </>
    );
};

export default DealTab;
