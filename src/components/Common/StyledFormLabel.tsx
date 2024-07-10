import { styled, useTheme } from "@mui/material/styles";
import { FormLabelProps, FormLabel } from "@mui/material";
import { tokens } from "../../theme.js";

const StyledFormLabel = styled(FormLabel)<FormLabelProps & { colors: any }>(
  ({ colors }) => ({
    "&.Mui-focused": {
      // increase the specificity for the pseudo class
      color: colors.orange[500],
    },
  })
);

export default function CustomFormLabel(label: string, id: string) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <StyledFormLabel id={id} colors={colors}>
      {label}
    </StyledFormLabel>
  );
}
