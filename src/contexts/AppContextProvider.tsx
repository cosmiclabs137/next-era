import React from "react";

import { DealsContextType, IDeal } from "@/types/deals";
import { IMetrics } from "@/types/metrics";

import { dealFactory } from "@/utils";

export interface AppContextProviderProps {
    children: React.ReactElement<any, any> | string | null;
}

const defaultContext: DealsContextType = {
    deals: [dealFactory(0), dealFactory(1), dealFactory(2)],
    metrics: [{}],
    dealsDispatch: (params: Record<string, number | string>) =>
        console.log("dealsDispatch() called"),
    metricsDispatch: (params: Record<string, number | string>) =>
        console.log("metricsDispatch() called"),
};

export const DealsContext =
    React.createContext<DealsContextType>(defaultContext);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [deals, setDeals] = React.useState<IDeal[]>(defaultContext.deals);
    const [metrics, setMetrics] = React.useState<IMetrics[]>(
        defaultContext.metrics
    );

    const dealsDispatch = () => console.log("dealsDispatch() called");
    const metricsDispatch = () => console.log("metricsDispatch() called");

    return (
        <DealsContext.Provider
            value={{ deals, metrics, dealsDispatch, metricsDispatch }}
        >
            {children}
        </DealsContext.Provider>
    );
};

export default AppContextProvider;
