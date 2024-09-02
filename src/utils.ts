import { IDeal } from "@/@types/deals";

const isNewYear = (period: number) => period > 11 && period % 12 === 0;

function range(stop: number, start: number = 0, step: number = 1) {
    const arr: Array<number> = [];

    if (start < stop) {
        for (let i = start; i < stop; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i > stop; i += step) {
            arr.push(i);
        }
    }

    return arr;
}

const arrayFrom = (array: Array<number>, fill: number = 0) =>
    Array.from(new Float32Array(array.length).fill(fill));

const cumsum = (array: Array<number>): Array<number> => {
    let total: number = 0;
    const sums: Array<number> = [];

    array.forEach((value: number) => {
        total += value;
        sums.push(total);
    });

    return sums;
};

function dealFactory(id: number): IDeal {
    return {
        id: id,
        name: `Deal ${id + 1}`,
        sqft: 2794,
        term: 65,
        baseRent: 3.45,
        annualEscalations: 3,
        opExPerMonthRsf: 0,
        globalInflation: 0,
        otherOneTimeLandlordCost: 0,
        otherOneTimeTenantCost: 0,
        otherMonthlyLandlordCost: 0,
        otherMonthlyTenantCost: 0,
        monthsFreeRent: 5,
        commissionFirst: 4,
        commissionSecond: 0,
        tenantDiscountRate: 7,
        tiCostPerRsf: 0,
        tiAllowancePerRsf: 0,
        landlordDiscountRate: 5,
    };
}

export { arrayFrom, dealFactory, isNewYear, range, cumsum };
