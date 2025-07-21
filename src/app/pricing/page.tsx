import BackgroundImage from "@/images/about-bg.jpeg";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Heading from "../_components/common/heading";
import PageHeader from "../_components/common/page-header";
import Paragraph from "../_components/common/paragraph";
import PricingTable from "./_components/pricing-table";

export default function PricingPage() {
	return (
		<Container maxWidth={false} disableGutters>
			<PageHeader backgroundImage={BackgroundImage} title="Pricing" />

			<Box
				sx={{
					backgroundColor: "#F7F7F7",
					py: 10,
				}}
			>
				<Heading sx={{ textAlign: "center", mb: 1 }}>
					Transparent Pricing for Peace of Mind
				</Heading>

				<Paragraph
					sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 5 }}
				>
					Explore our pricing options for hassle-free landlord safety
					certifications. We keep it simple and transparent, so you can focus on
					property safety and compliance without any surprises.
				</Paragraph>

				<Typography
					sx={{
						mb: 5,
						textAlign: "center",
					}}
				>
					All prices are excluding VAT
				</Typography>
				<PricingTable />
			</Box>
		</Container>
	);
}
