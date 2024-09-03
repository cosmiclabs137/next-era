import {
    FilledInputProps,
    InputProps,
    OutlinedInputProps,
    TextFieldVariants,
} from "@mui/material";

export enum PlacementTypes {
    bottom_end = "bottom-end",
    bottom_start = "bottom-start",
    bottom = "bottom",
    left_end = "left-end",
    left_start = "left-start",
    left = "left",
    right_end = "right-end",
    right_start = "right-start",
    right = "right",
    top_end = "top-end",
    top_start = "top-start",
    top = "top",
}

type AdornmentType =
    | Partial<InputProps>
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | undefined;

export interface AdornmentProps {
    startAdornment?: AdornmentType;
    endAdornment?: AdornmentType;
}

export interface InputWithTooltipProps {
    value: number | string;
    handleChange:
        | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined;
    label: React.ReactNode | string;
    title: React.ReactNode;
    adornment?:
        | Partial<InputProps>
        | Partial<FilledInputProps>
        | Partial<OutlinedInputProps>
        | undefined;
    type?: string;
    variant?: TextFieldVariants | undefined;
    inputProps?: { min: number; step: number };
    InputProps?: AdornmentProps;
    placement?: PlacementTypes;
    sx?: Object;
    describeChild?: boolean;
    disabled: boolean;
}
