import { useEffect } from "react";
import Router, { useRouter } from "next/router";

import { Box, CircularProgress } from "@mui/material";

type ComponentType = React.ComponentType<any>;

export default function withAuth(Component: ComponentType) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const intendedPath = router.asPath;

    console.log(props);

    return <Component {...props} />;
  };
}
