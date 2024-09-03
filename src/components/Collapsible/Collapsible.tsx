import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CollapsibleProps {
    children:
        | React.ReactElement<any, any>[]
        | React.ReactElement<any, any>
        | string
        | null;
    defaultExpanded?: boolean;
    id: string;
    summary: string;
}

const Collapsible = ({
    id,
    summary,
    children,
    defaultExpanded = false,
}: CollapsibleProps) => {
    return (
        <Accordion defaultExpanded={defaultExpanded}>
            <AccordionSummary
                id={id}
                aria-label={id}
                expandIcon={<ExpandMoreIcon />}
            >
                {summary}
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
};

export default Collapsible;
