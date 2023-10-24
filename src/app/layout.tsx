import * as React from "react";
import ThemeRegistry from "./_components/global/theme-registry";
import DrawerAppBar from "./_components/global/drawer";
import Topbar from "./_components/global/topbar";
import { Metadata } from "next";
import Footer from "./_components/global/footer";
import TopLoader from "./_components/global/top-loader";
import { SnackbarProvider } from "notistack";

export const metadata: Metadata = {
  title: "Property Certification and Gas Safety Services | Home Safety Cert",
  description:
    "Ensure your property meets all certification requirements with our expert services. We specialize in Gas Safety, EICR, and more. Contact us today! Home Safety Cert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <TopLoader />
          <Topbar />
          <DrawerAppBar>{children}</DrawerAppBar>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
