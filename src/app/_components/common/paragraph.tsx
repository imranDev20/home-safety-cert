"use client";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ParagraphProps } from "@/types/props";

const Paragraph = ({ children, lineHeight, ...props }: ParagraphProps) => {
  const theme = useTheme();

  return (
    <Typography
      paragraph
      sx={{
        ...theme.typography.body2,
        lineHeight: lineHeight ? lineHeight : 1.8,
        ...props?.sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
