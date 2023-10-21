import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

const PhoneNumberInput = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        fullWidth
        variant="outlined"
        name="phone"
      />
    );
  }
);

PhoneNumberInput.displayName = "PhoneNumberInput";

export default PhoneNumberInput;
