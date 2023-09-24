"use client";
import { styled, useTheme } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaqAccordionProps } from "@/types/props";
import { SyntheticEvent, useState } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid rgba(0, 0, 0, .125)",

  "&:last-of-type": {
    borderBottom: "none",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    ".MuiTypography-root": {
      fontSize: 20,
      fontWeight: 500,
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const theme = useTheme();

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              px: 0,
            }}
          >
            <Typography>{faq.ques}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{}}>
            <Typography
              sx={{
                ...theme.typography.body2,
                fontSize: 17,
              }}
            >
              {faq.ans}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
