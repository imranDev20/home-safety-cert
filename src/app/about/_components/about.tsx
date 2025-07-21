"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

import Heading from "@/app/_components/common/heading";
import Paragraph from "@/app/_components/common/paragraph";
import AboutPageImage from "@/images/about-page-image.jpeg";
import { INFO } from "@/shared/constants";
import { CheckCircle, Phone } from "@mui/icons-material";
import Image from "next/image";

const About = () => {
	const theme = useTheme();

	return (
		<Container
			sx={{
				my: 8,
			}}
		>
			<Grid container spacing={2}>
				<Grid
					item
					md={6}
					sx={{
						p: 3,
					}}
				>
					<Box
						sx={{
							height: "100%",
							width: "100%",
							position: "relative",
						}}
					>
						<Image src={AboutPageImage} alt="About Home Safety Cert" fill />
					</Box>
				</Grid>
				<Grid container item md={6} spacing={3}>
					<Grid item md={12}>
						<Heading
							headingType="h1"
							sx={{
								mb: 2,
								maxWidth: 600,
							}}
						>
							Welcome to Home Safety Certificate, your trusted local
							electricians serving London
						</Heading>

						<Paragraph sx={{ my: 2 }}>
							With over 6 years of experience, we pride ourselves on delivering
							safe, reliable, and high-quality electrical services for homes and
							businesses. We are fully qualified, Part P registered, and
							compliant with the latest BS7671 wiring regulations.
						</Paragraph>

						<Paragraph sx={{ my: 2 }}>
							Whether you need a full rewire, EV charger installation, consumer
							unit upgrade, or just a faulty socket fixed — no job is too big or
							too small.
						</Paragraph>

						<Typography variant="h6" sx={{ mt: 3, mb: 2, fontWeight: 600 }}>
							What sets us apart:
						</Typography>

						<Box sx={{ mb: 3 }}>
							{[
								"NAPIT approved",
								"Transparent pricing",
								"Friendly, tidy, and punctual service",
							].map((item, index) => (
								<Box
									key={index}
									sx={{ display: "flex", alignItems: "center", mb: 1 }}
								>
									<CheckCircle
										sx={{
											color: "primary.main",
											mr: 1,
											fontSize: 20,
										}}
									/>
									<Typography sx={{ fontSize: 16 }}>{item}</Typography>
								</Box>
							))}
						</Box>

						<Paragraph
							sx={{
								backgroundColor: "background.main",
								px: 2,
								py: 2,
								mt: 3,
								borderLeft: "4px solid",
								borderLeftColor: "primary.main",
								fontSize: 17,
							}}
						>
							At Home Safety Certificate, everything we do, we focus on customer
							satisfaction.
						</Paragraph>
					</Grid>

					<Grid
						container
						item
						md={12}
						columns={14}
						display="flex"
						alignItems="center"
					>
						<Grid item xs={2}>
							<Box
								sx={{
									backgroundColor: "secondary.main",
									height: 55,
									width: 55,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: 2,
								}}
							>
								<Phone
									sx={{
										color: "text.primary",
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Typography
								component="span"
								sx={{
									...theme.typography.body2,
									fontSize: 17,
									mr: 1,
								}}
							>
								Get in touch today for friendly advice:
							</Typography>
							<Typography
								component="a"
								href={"tel:" + INFO.phone.text}
								sx={{
									color: "text.primary",
									fontSize: 22,
									fontWeight: 600,
									textDecoration: "none",
								}}
							>
								{INFO.phone.text}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
