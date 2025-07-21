"use client";

import NextAppDirEmotionCacheProvider from "@/configs/emotion-cache";
import theme from "@/configs/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type * as React from "react";

export default function ThemeRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</NextAppDirEmotionCacheProvider>
		</LocalizationProvider>
	);
}
