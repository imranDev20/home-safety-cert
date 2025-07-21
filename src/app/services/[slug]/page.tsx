"use client";

import Heading from "@/app/_components/common/heading";
import Paragraph from "@/app/_components/common/paragraph";
import { SERVICES } from "@/shared/constants";
import {
	BusinessCenter,
	CheckCircle,
	Engineering,
	Schedule,
	Security,
} from "@mui/icons-material";
import {
	Box,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
	params: {
		slug: string;
	};
};

const serviceContent = {
	"electric-certificate": {
		title: "Electric Certificate (EICR)",
		subtitle:
			"Ensure electrical safety with our comprehensive EICR certification",
		mainContent: [
			"An Electrical Installation Condition Report (EICR) is a detailed inspection and testing of your property's electrical systems. This comprehensive assessment ensures your electrical installation is safe, identifies potential hazards, and confirms compliance with current wiring regulations.",
			"Our qualified electricians conduct thorough inspections using advanced testing equipment to assess the condition of your electrical circuits, protective devices, and safety systems. We check everything from the consumer unit to individual outlets, ensuring complete electrical safety.",
			"Regular EICR testing is not just a legal requirement for landlords – it's essential for protecting lives and property. Our certified engineers provide detailed reports highlighting any issues and recommended remedial actions.",
		],
		features: [
			"Carried out by qualified, Part P registered electricians",
			"Compliance with BS 7671 wiring regulations",
			"Digital reports delivered within 24-48 hours",
			"Stay compliant and avoid legal risks",
			"Comprehensive testing of all electrical circuits",
		],
		whatsIncluded: [
			"Visual inspection of electrical installation",
			"Testing of protective devices and RCD functionality",
			"Circuit testing and insulation resistance checks",
			"Earth continuity and polarity verification",
			"Detailed condition report with recommendations",
		],
		whoNeeds: [
			"Landlords and property managers",
			"Homeowners planning renovations",
			"Commercial property owners",
			"Insurance claim requirements",
			"Property sales and purchases",
		],
	},
	"portable-appliance-testing": {
		title: "PAT Testing Certification",
		subtitle: "Professional portable appliance testing for workplace safety",
		mainContent: [
			"Portable Appliance Testing (PAT) is the examination of electrical appliances and equipment to ensure they are safe for use. This testing is essential for maintaining workplace safety and meeting health and safety regulations.",
			"Our certified engineers test all portable electrical equipment including computers, kettles, printers, extension leads, and other appliances used in your workplace or rental property. We provide comprehensive testing that identifies potential electrical faults before they become dangerous.",
			"Regular PAT testing helps prevent electrical accidents, reduces insurance liability, and ensures compliance with the Electricity at Work Regulations 1989.",
		],
		features: [
			"Certified and experienced PAT testing engineers",
			"Compliance with IET Code of Practice",
			"Digital certificates delivered within 24-48 hours",
			"Detailed appliance inventory and labeling",
			"Competitive pricing for multiple appliances",
		],
		whatsIncluded: [
			"Visual inspection of all portable appliances",
			"Electrical safety testing using calibrated equipment",
			"Pass/Fail labels applied to tested items",
			"Comprehensive test results database",
			"Digital certificate of compliance",
		],
		whoNeeds: [
			"Offices and commercial premises",
			"Rental properties and HMOs",
			"Schools and educational facilities",
			"Healthcare facilities",
			"Hotels and hospitality venues",
		],
	},
	"emergency-light-certificate": {
		title: "Emergency Light Certification",
		subtitle:
			"Expert certification for fully functional emergency lighting systems",
		mainContent: [
			"Emergency lighting plays a crucial role during power failures, ensuring safe evacuation in case of fire or emergency. According to the Regulatory Reform (Fire Safety) Order 2005, all commercial properties, HMOs, and multi-occupancy buildings must have fully functioning and regularly tested emergency lighting systems.",
			"Our qualified fire safety engineers conduct comprehensive inspections and testing of your emergency lighting installation to ensure compliance with BS 5266-1:2016 standards. We test backup batteries, duration performance, and automatic operation systems.",
			"A valid Emergency Lighting Certificate issued by our qualified engineers provides legal compliance and peace of mind that your emergency lighting will function when needed most.",
		],
		features: [
			"Carried out by qualified, experienced fire safety engineers",
			"Compliance with BS 5266-1:2016 standards",
			"Digital reports delivered within 24-48 hours",
			"Stay compliant and keep people safe",
			"Avoid legal risks and penalties",
		],
		whatsIncluded: [
			"Full inspection of emergency light fittings and backup batteries",
			"Duration test (minimum 3-hour simulation)",
			"Testing of escape route lighting and signage",
			"Automatic operation system verification",
			"Certification of compliance with current standards",
		],
		whoNeeds: [
			"HMOs and rental flats",
			"Offices, shops, and warehouses",
			"Schools and educational facilities",
			"Hotels, restaurants, and care homes",
			"Any property with designated fire escape routes",
		],
	},
	"fire-alarm-certificate": {
		title: "Fire Alarm Certificate",
		subtitle: "Get reliable certification for your fire alarm system",
		mainContent: [
			"Fire alarm systems are critical for early fire detection and building evacuation. Regular testing and certification ensures your fire alarm system functions correctly when lives depend on it. Our qualified fire safety engineers provide comprehensive inspection and certification services.",
			"We test all components of your fire alarm system including smoke detectors, heat detectors, manual call points, and control panels. Our thorough inspection process ensures compliance with BS 5839 Part 1 (non-domestic) & Part 6 (domestic) standards.",
			"Our fire alarm certification provides legal compliance for landlords, property managers, and business owners while ensuring the safety of all building occupants.",
		],
		features: [
			"Carried out by qualified, experienced fire safety engineers",
			"Compliance with BS 5839 Part 1 (non-domestic) & Part 6 (domestic)",
			"Digital reports delivered within 24-48 hours",
			"Stay compliant and keep people safe",
			"Avoid legal risks and ensure occupant safety",
		],
		whatsIncluded: [
			"Complete inspection of fire alarm control panel",
			"Testing of all smoke and heat detectors",
			"Manual call point functionality testing",
			"Sounder and beacon operation verification",
			"System connectivity and battery backup testing",
		],
		whoNeeds: [
			"Commercial properties and offices",
			"HMOs and multi-occupancy buildings",
			"Educational facilities and schools",
			"Healthcare facilities and care homes",
			"Hotels, restaurants, and hospitality venues",
		],
	},
};

export default function SingleServicePage({ params }: Props) {
	const { slug } = params;

	// Find the service by slug
	const service = SERVICES.find((s) => s.slug === slug);
	const content = serviceContent[slug as keyof typeof serviceContent];

	// If service or content doesn't exist, show not found
	if (!service || !content) {
		notFound();
	}

	return (
		<Container sx={{ my: 8 }}>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Heading headingType="h1" sx={{ mb: 2, textAlign: "center" }}>
						{content.title}
					</Heading>
					<Typography
						variant="h5"
						sx={{
							textAlign: "center",
							color: "text.secondary",
							mb: 4,
							fontWeight: 400,
						}}
					>
						{content.subtitle}
					</Typography>
				</Grid>

				<Grid item xs={12} md={8}>
					{content.mainContent.map((paragraph, index) => (
						<Paragraph key={index} sx={{ mb: 2 }}>
							{paragraph}
						</Paragraph>
					))}

					<Box sx={{ mt: 4 }}>
						<Heading headingType="h3" sx={{ mb: 2, fontSize: 24 }}>
							💡 What&lsquo;s Included in the Certificate?
						</Heading>
						<List>
							{content.whatsIncluded.map((item, index) => (
								<ListItem key={index} sx={{ py: 0.5 }}>
									<ListItemIcon>
										<CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
									</ListItemIcon>
									<ListItemText primary={item} />
								</ListItem>
							))}
						</List>
					</Box>

					<Box sx={{ mt: 4 }}>
						<Heading headingType="h3" sx={{ mb: 2, fontSize: 24 }}>
							🏢 Who Needs It?
						</Heading>
						<List>
							{content.whoNeeds.map((item, index) => (
								<ListItem key={index} sx={{ py: 0.5 }}>
									<ListItemIcon>
										<BusinessCenter
											sx={{ color: "primary.main", fontSize: 20 }}
										/>
									</ListItemIcon>
									<ListItemText primary={item} />
								</ListItem>
							))}
						</List>
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<Box
						sx={{
							backgroundColor: "background.paper",
							p: 3,
							borderRadius: 2,
							boxShadow: 1,
							border: "1px solid",
							borderColor: "divider",
						}}
					>
						<Heading headingType="h4" sx={{ mb: 2, fontSize: 20 }}>
							✔ Why Choose Home Safety Cert?
						</Heading>
						<List>
							{content.features.map((feature, index) => (
								<ListItem key={index} sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 32 }}>
										<CheckCircle sx={{ color: "success.main", fontSize: 18 }} />
									</ListItemIcon>
									<ListItemText
										primary={feature}
										sx={{ "& .MuiListItemText-primary": { fontSize: 14 } }}
									/>
								</ListItem>
							))}
						</List>
					</Box>

					{service.detailedPackages && (
						<Box
							sx={{
								backgroundColor: "primary.main",
								color: "primary.contrastText",
								p: 3,
								borderRadius: 2,
								mt: 3,
							}}
						>
							<Heading
								headingType="h4"
								sx={{
									mb: 2,
									fontSize: 18,
									color: "inherit",
								}}
							>
								Starting from £{service.startingPrice}
							</Heading>
							<Typography variant="body2" sx={{ mb: 2, color: "white" }}>
								Professional certification with digital reports delivered within
								24-48 hours.
							</Typography>
							<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
								<Schedule sx={{ fontSize: 20, color: "white" }} />
								<Typography variant="body2" sx={{ color: "white" }}>
									Fast appointments available
								</Typography>
							</Box>
						</Box>
					)}
				</Grid>
			</Grid>
		</Container>
	);
}
