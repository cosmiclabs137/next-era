import { IMetrics } from "./metrics";

export interface IDeal {
    id: number;
    name: string;
    sqft: number;
    term: number;
    baseRent: number;
    annualEscalations: number;
    opExPerMonthRsf: number;
    globalInflation: number;
    otherOneTimeLandlordCost: number;
    otherOneTimeTenantCost: number;
    otherMonthlyLandlordCost: number;
    otherMonthlyTenantCost: number;
    monthsFreeRent: number;
    commissionFirst: number;
    commissionSecond: number;
    tenantDiscountRate: number;
    tiCostPerRsf: number;
    tiAllowancePerRsf: number;
    landlordDiscountRate: number;
}

export type DealsContextType = {
    deals: IDeal[];
    metrics: IMetrics[];
    dealsDispatch: (params: Record<string, number | string>) => any;
    metricsDispatch: (params: Record<string, number | string>) => any;
};

export interface DealInputsFormProps {
    deal: IDeal;
    disabled: boolean;
    handleChange: (e: any, key: string | number, type?: string) => void;
}
