import React from "react";

import { DealInputsFormProps } from "@/@types/deals";

const ConcessionInputsForm = ({
    deal,
    disabled,
    handleChange,
}: DealInputsFormProps) => {
    console.log(deal, disabled, handleChange);
    return <div>ConcessionInputsForm</div>;
};

export default ConcessionInputsForm;
