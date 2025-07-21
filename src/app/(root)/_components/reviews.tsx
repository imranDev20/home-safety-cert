"use client";

import { StarRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "pure-react-carousel/dist/react-carousel.es.css";

const reviews = [
	{
		name: "Justin Timberlake",
		location: "London, GB",
		text: "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving.",
	},
	{
		name: "Justin Timberlake 1",
		location: "London, GB",
		text: "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
	},
	{
		name: "Justin Timberlake 2",
		location: "London, GB",
		text: "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
	},
	{
		name: "Justin Timberlake 3",
		location: "London, GB",
		text: "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
	},
];

const Reviews = () => {
	const theme = useTheme();

	return (
		<Box sx={{ p: 7 }}>
			<Typography
				component="h3"
				variant="h4"
				textAlign="center"
				sx={{ color: "white", zIndex: 10, position: "relative", mb: 4 }}
			>
				Hear From Our Satisfied Customers
			</Typography>

			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={60}
				totalSlides={reviews.length}
			>
				<Slider>
					{reviews.map((review, index) => (
						<Slide index={index} key={index}>
							<Stack
								direction="row"
								justifyContent="center"
								sx={{ color: "#FFDD44", mt: 4 }}
							>
								<StarRounded fontSize="small" />
								<StarRounded fontSize="small" />
								<StarRounded fontSize="small" />
								<StarRounded fontSize="small" />
								<StarRounded fontSize="small" />
							</Stack>

							<Typography
								paragraph
								color="white"
								sx={{
									fontSize: 18,
									position: "relative",
									color: theme.palette.grey[300],
								}}
								mt={1}
								mb={2}
								textAlign="center"
							>
								<Typography
									component={FaQuoteLeft}
									sx={{
										mr: 3,
										fontSize: 20,
										position: "relative",
									}}
								/>
								{review.text}

								<Typography
									component={FaQuoteRight}
									sx={{
										ml: 3,
										fontSize: 20,
										position: "relative",
									}}
								/>
							</Typography>
							<Typography
								textAlign="center"
								component="p"
								sx={{
									color: "secondary.main",
									fontSize: 22,
									fontWeight: 600,
								}}
							>
								{review.name}
								<Box
									component="span"
									sx={{
										fontSize: 14,
										fontWeight: 500,
										color: theme.palette.grey[400],
										ml: 2,
									}}
								>
									32 Salisbury Ave, London
								</Box>
							</Typography>
						</Slide>
					))}
				</Slider>
			</CarouselProvider>
		</Box>
	);
};

export default Reviews;
