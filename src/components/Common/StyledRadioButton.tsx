import { Radio, RadioProps } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { tokens } from "../../theme.js";

const StyledRadioButton = styled(Radio)<RadioProps & { colors: any }>(
  ({ colors }) => ({
    "&.Mui-checked": {
      color: colors.orange[500],
    },
  })
);

export default function StyledRadio(props: any) {
  const { name, label, ...rest } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return <StyledRadioButton {...rest} colors={colors} />;
}
