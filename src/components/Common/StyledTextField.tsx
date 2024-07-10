import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Field, useField } from "formik";
import { tokens } from "../../theme.js";
import { useTheme } from "@mui/material/styles";
import { BorderBottom } from "@mui/icons-material";

const StyledTextField = styled(TextField)<TextFieldProps & { colors: any }>(
  ({ colors }) => ({
    width: "80%",
    "& label.Mui-focused": {
      color: colors.orange[500],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.orange[500],
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.orange[500],
      },
    },
  })
);

export default function CssTextField(props: any) {
  const { name, label, ...rest } = props;
  const [field] = useField(name);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Field
      variant="standard"
      label={label}
      {...field}
      {...rest}
      as={StyledTextField}
      autoComplete="off"
      colors={colors}
    />
  );
}
