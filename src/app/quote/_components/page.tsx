// "use client";
// import { useEffect, useRef, useState } from "react";
// import Box from "@mui/material/Box";
// import { Card, CardContent, Container, Grid } from "@mui/material";
// import PageHeader from "../_components/common/page-header";
// import BackgroundImage from "@/images/about-bg.jpeg";
// import Heading from "../_components/common/heading";
// import Paragraph from "../_components/common/paragraph";
// import RightSidebarStepper from "./_components/right-sidebar-stepper";
// import ServiceDetails from "./_components/service-details";
// import PersonalDetails from "./_components/personal-details";
// import { Order } from "@/types/misc";
// import { useSearchParams } from "next/navigation";
// import Payments from "./_components/payments";
// import Confirmation from "./_components/confirmation";

// export default function QuotePage() {
//   const searchParams = useSearchParams();
//   const serviceRef = useRef(null);

//   const [order, setOrder] = useState<Order>({
//     isGas: false,
//     isEpc: false,
//     isEicr: false,
//     appliances: "",
//     fuseBoards: "",
//     bedRooms: "",
//     tflZone: "",
//     time: "",
//     isServiceStepComplete: false,
//     name: "",
//     email: "",
//     phone: "",
//     house: "",
//     postCode: "",
//     city: "",
//     isPersonalStepComplete: false,
//     date: null,
//   });

//   const activeStep = parseInt(searchParams.get("active_step") as string) || 1;

//   useEffect(() => {
//     window.scrollTo(0, 300);
//   }, [activeStep]);

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#F7F7F7",
//       }}
//     >
//       <PageHeader backgroundImage={BackgroundImage} title="Request a Quote" />

//       <Heading sx={{ textAlign: "center", mb: 1, mt: 7 }}>
//         3 Simple Steps to Your Quote
//       </Heading>
//       <Paragraph sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 5 }}>
//         Obtaining a quote for our landlord safety certification services is
//         quick and easy. Follow our three simple steps to get a quote tailored to
//         your needs.
//       </Paragraph>

//       <Container
//         maxWidth="md"
//         sx={{
//           pb: 7,
//         }}
//       >
//         <Grid
//           container
//           spacing={3}
//           sx={{
//             position: "relative",
//           }}
//         >
//           <Grid item md={8}>
//             <Card
//               elevation={0}
//               sx={{
//                 boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
//               }}
//             >
//               <CardContent
//                 sx={{
//                   p: 3,
//                 }}
//               >
//                 {activeStep === 1 || Number.isNaN(activeStep) ? (
//                   <ServiceDetails order={order} setOrder={setOrder} />
//                 ) : null}
//                 {activeStep === 2 && order.isServiceStepComplete ? (
//                   <PersonalDetails order={order} setOrder={setOrder} />
//                 ) : null}

//                 {activeStep === 3 &&
//                 order.isServiceStepComplete &&
//                 order.isPersonalStepComplete ? (
//                   <Confirmation order={order} />
//                 ) : null}

//                 {order.isPersonalStepComplete &&
//                   order.isServiceStepComplete && (
//                     <Payments activeStep={activeStep} order={order} />
//                   )}
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item md={4}>
//             <RightSidebarStepper activeStep={activeStep} />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
