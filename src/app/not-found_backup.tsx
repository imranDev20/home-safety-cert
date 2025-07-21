"use client";

import notFoundAnimation from "@/assets/not-found-animation.json";
import { Box, Button, Container } from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<Container
			maxWidth="sm"
			sx={{
				mt: 6,
				mb: 10,
			}}
		>
			{isClient && <Lottie animationData={notFoundAnimation} loop={true} />}
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button LinkComponent={Link} sx={{ mt: 3 }} variant="blue" href="/">
					Back to Home Page
				</Button>
			</Box>
		</Container>
	);
}
