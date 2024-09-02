import React from "react";

import { DealInputsFormProps } from "@/@types/deals";

const OtherInputsForm = ({
    deal,
    disabled,
    handleChange,
}: DealInputsFormProps) => {
    console.log(deal, disabled, handleChange);
    return <div>OtherInputsForm</div>;
};

export default OtherInputsForm;
