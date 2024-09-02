import React from "react";

import { DealInputsFormProps } from "@/@types/deals";

const BasicInputsForm = ({
    deal,
    disabled,
    handleChange,
}: DealInputsFormProps) => {
    console.log(deal, disabled, handleChange);
    return <div>BasicInputsForm</div>;
};

export default BasicInputsForm;
