"use client";

import type { ParagraphProps } from "@/types/props";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
