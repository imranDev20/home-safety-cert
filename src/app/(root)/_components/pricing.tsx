"use client";
import Heading from "@/app/_components/common/heading";
import type { CenterProps } from "@/app/pricing/_components/pricing-table";
import { SERVICES } from "@/shared/constants";
import Masonry from "@mui/lab/Masonry";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { CgArrowLongRight } from "react-icons/cg";

const Center = ({ children, sx }: CenterProps) => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", ...sx }}>
			{children}
		</Box>
	);
};

const Pricing = () => {
	return (
		<Box
			sx={{
				bgcolor: "background.main",
				py: 10,
				mt: 10,
				backgroundImage: "url('background.svg')",
			}}
		>
			<Container>
				<Heading sx={{ textAlign: "center" }}>Our Pricing Plans</Heading>
				<Typography
					sx={{
						mb: 5,
						textAlign: "center",
					}}
				>
					All prices are excluding VAT
				</Typography>
				<Masonry columns={3} spacing={3}>
					{SERVICES.map((service, index) => {
						const {
							Icon,
							id,
							startingPrice,
							name,
							detailedPackages,
							additionalPackage,
						} = service;
						return (
							<Card
								key={id}
								elevation={0}
								sx={{
									mx: "auto",
									maxWidth: 700,
									mb: 10,
									borderRadius: 0,
									boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
									transition: "250ms all",
									":hover": {
										cursor: "pointer",
										"& .MuiCardHeader-root": {
											backgroundColor: "primary.main",
										},
										"& .MuiCardHeader-title": {
											color: "white",
										},
									},
								}}
							>
								<CardHeader
									sx={{ backgroundColor: "#f7f7f7", transition: "250ms all" }}
									titleTypographyProps={{
										sx: {
											fontSize: 20,
											textAlign: "center",
											color: "text.primary",
											transition: "250ms all",
										},
									}}
									title={name}
								/>
								<CardContent
									sx={{
										p: 0,
									}}
								>
									<Center sx={{ my: 3 }}>
										<Icon
											sx={{
												fontSize: 66,
											}}
										/>
									</Center>

									<Box
										sx={{
											textAlign: "center",
											my: 3,
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Typography
											sx={{
												fontSize: 13,
												mr: 1,
												color: "text.main",
												lineHeight: 1.2,
												fontWeight: 500,
											}}
										>
											Starts <br />
											From
										</Typography>
										<Typography sx={{ fontSize: 32, color: "text.primary" }}>
											£{startingPrice}.00
										</Typography>
									</Box>

									<Box sx={{ mb: 2 }}>
										{detailedPackages?.map((pack) => (
											<Grid
												container
												key={pack.name}
												spacing={3}
												sx={{
													borderBottom: "1px solid",
													borderBottomColor: "#F1F1F1",
													px: 3,
													py: 1,
													"&:last-of-type": {
														borderBottom: "none",
													},
												}}
											>
												<Grid item xs={9}>
													<Typography>{pack.name}</Typography>
												</Grid>
												<Grid item xs={1} />
												<Grid item xs={2}>
													<Typography
														sx={{
															color: "primary.main",
															fontWeight: 600,
														}}
													>
														{pack.price ? `£${pack.price}` : "Quote Price"}
													</Typography>
												</Grid>
											</Grid>
										))}
									</Box>

									{additionalPackage && additionalPackage.length > 0 && (
										<Typography
											sx={{
												px: 3,
												textAlign: "center",
												fontSize: 20,
												fontWeight: 500,
											}}
										>
											Additional Services
										</Typography>
									)}

									<Box sx={{ mb: 4, mt: 2 }}>
										{additionalPackage?.map((pack) => (
											<Grid
												container
												key={pack.name}
												spacing={3}
												sx={{
													borderBottom: "1px solid",
													borderBottomColor: "#F1F1F1",
													px: 3,
													py: 1,
													"&:last-of-type": {
														borderBottom: "none",
													},
												}}
											>
												<Grid item xs={9}>
													<Typography>{pack.name}</Typography>
												</Grid>
												<Grid item xs={1} />
												<Grid item xs={2}>
													<Typography
														sx={{
															color: "primary.main",
															fontWeight: 600,
														}}
													>
														{pack.price ? `£${pack.price}` : "Quote Price"}
													</Typography>
												</Grid>
											</Grid>
										))}
									</Box>

									<Center>
										<Button
											endIcon={<CgArrowLongRight />}
											variant="blue-outlined"
										>
											Get Started
										</Button>
									</Center>
								</CardContent>
							</Card>
						);
					})}
				</Masonry>
			</Container>
		</Box>
	);
};

export default Pricing;
