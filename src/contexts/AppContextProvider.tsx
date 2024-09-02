import React from "react";

import { DealsContextType, IDeal } from "@/@types/deals";
import { IMetrics } from "@/@types/metrics";

interface AppContextProviderProps {
    children: React.ReactElement<any, any> | string | null;
}

export const DealsContext = React.createContext<DealsContextType | null>(null);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [deals] = React.useState<IDeal[]>([]);
    const [metrics] = React.useState<IMetrics[]>([]);

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
