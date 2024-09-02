import React, { Dispatch, SetStateAction } from "react";

interface DealMenuProps {
    dealId: number;
    disabled: boolean;
    setDisabled: Dispatch<SetStateAction<boolean>>;
}

const DealMenu = ({ dealId, disabled, setDisabled }: DealMenuProps) => {
    console.log(dealId, disabled, setDisabled);
    return <div>DealMenu</div>;
};

export default DealMenu;
