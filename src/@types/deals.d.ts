import { IMetrics } from "./metrics";

export interface IDeal {}

export interface DealsContextType {
    deals: IDeal[];
    metrics: IMetrics[];
    dealsDispatch: (params: Record<string, number | string>) => any;
    metricsDispatch?: (params: Record<string, number | string>) => any;
}
