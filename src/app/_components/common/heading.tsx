import { HeadingProps } from "@/types/props";
import { Typography } from "@mui/material";

const Heading = ({ children, headingType, ...props }: HeadingProps) => {
  return (
    <Typography
      component={headingType ? headingType : "h2"}
      sx={{ fontSize: 30, color: "black.main", fontWeight: 600, ...props?.sx }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
