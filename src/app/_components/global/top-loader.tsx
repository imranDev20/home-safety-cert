"use client";

import { useTheme } from "@mui/material/styles";
import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function TopLoader() {
	const theme = useTheme();
	return (
		<NextTopLoader
			color={theme.palette.secondary.main}
			initialPosition={0.08}
			crawlSpeed={200}
			height={3}
			crawl={true}
			showSpinner={true}
			easing="ease"
			speed={200}
			shadow={`0 0 10px ${theme.palette.secondary.main},0 0 5px ${theme.palette.secondary.main}`}
		/>
	);
}
