import { Link, Typography, useTheme } from "@mui/material";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import Images from "../Images";
import { tokens } from "../theme";

const TransportContainer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <StyledPicInfoContainer
      orderImageDesktop={2}
      orderInfoDesktop={1}
      image={Images.transport}
      id={"arriving"}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
      >
        Adkomst
      </Typography>
      <Typography variant="h5" component="h3">
        Med bil
      </Typography>
      <Typography>
        Det er parkeringsmuligheter på/ved både kirken og hovedgaarden.
      </Typography>
      <Typography variant="h5" component="h3">
        Med offentlig transport:
      </Typography>
      <Typography>
        Skal du til Lille Restrup Hovedgaard med buss, er Aalestrup Busterminal
        nærmeste stasjon. Fra busterminalen er det 20 minutters gange via
        Himmerlandsstien.
      </Typography>
      <Typography>
        Skal du til Hvam kirke med buss, er nærmeste stopp Hvamvej 104 (Viborg
        kom). Deretter ca ti minutters gange til kirken.
      </Typography>
      <Typography variant="h5" component="h3">
        Transport fra kirke til fest:
      </Typography>
      <Typography>
        Trenger du å sitte på med noen/har du ledig plass i din bil? Gi oss
        gjerne beskjed på mail til <Link sx={{ color: colors.brown[500], textDecoration: "none" }} href="mailto:sjurognanna@hotmail.com"> sjurognanna@hotmail.com</Link>.
      </Typography>
    </StyledPicInfoContainer>
  );
};

export default TransportContainer;
