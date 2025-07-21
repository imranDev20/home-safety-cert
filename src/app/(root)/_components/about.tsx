"use client";
import Heading from "@/app/_components/common/heading";
import Paragraph from "@/app/_components/common/paragraph";
import AboutImage from "@/images/home-page-image.jpg";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { RxCheck } from "react-icons/rx";

const features = [
	{ id: 1, text: "Same & next day appointment" },
	{ id: 2, text: "Fixed & instant price quote" },
	{ id: 3, text: "Registered & expert professionals" },
	{ id: 5, text: "Certificate expiry reminder service" },
	{ id: 6, text: "No contracts" },
];

const About = () => {
	return (
		<Container sx={{ my: 15 }}>
			<Grid container>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						justifyContent: "center",
						p: 3,
					}}
				>
					<Box
						sx={{
							position: "relative",
							width: "100%",
							height: "100%",
							borderRadius: 3,
							overflow: "hidden",
						}}
					>
						<Image
							src={AboutImage}
							alt="Home Safety Image"
							fill
							style={{
								objectFit: "contain",
							}}
						/>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Heading>
						About Home Safety Cert - Our Commitment to Safety and Service
					</Heading>

					<Paragraph
						sx={{
							my: 3,
						}}
					>
						At Home Safety Cert, we specialize in landlord safety
						certifications. As per legal requirements, landlords must obtain
						various certificates to rent or sell a property. The majority of
						these certificates need annual revalidation. Managing these
						certifications has become increasingly challenging for landlords and
						estate agents due to complex laws and timelines. Our goal is to
						alleviate the burden of property certifications, providing you with
						peace of mind.
					</Paragraph>

					<Grid container spacing={4}>
						<Grid item sm={6}>
							{features.slice(0, 3).map((item) => (
								<Typography
									key={item.id}
									sx={{
										fontSize: 16,
										color: "primary.main",
										my: 1.5,
										fontWeight: 500,
										display: "flex",
										alignItems: "center",
									}}
									color="initial"
								>
									<RxCheck fontSize={22} style={{ marginRight: 5 }} />
									{item.text}
								</Typography>
							))}
						</Grid>
						<Grid item sm={6}>
							{features.slice(3, 6).map((item) => (
								<Typography
									key={item.id}
									sx={{
										fontSize: 16,
										color: "primary.main",
										my: 1.5,
										fontWeight: 500,
										display: "flex",
										alignItems: "center",
									}}
									color="initial"
								>
									<RxCheck fontSize={22} style={{ marginRight: 5 }} />
									{item.text}
								</Typography>
							))}
						</Grid>
					</Grid>
					<Button
						variant="blue"
						color="primary"
						sx={{ mt: 3 }}
						LinkComponent={Link}
						href="/about"
						endIcon={<CgArrowLongRight />}
					>
						Read More
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
