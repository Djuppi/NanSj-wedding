import { Link, Typography, useTheme } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Images from "../Images";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import { tokens } from "../theme";

const InfoContainer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <StyledPicInfoContainer
      orderImageDesktop={2}
      orderInfoDesktop={1}
      image={Images.skodsborg}
      id="info"
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
      >
        Lokaler
      </Typography>
      <Typography color="black">
          Vielse: Hvam kirke, Bækgaardsvej 5B, 9620 Aalestrup
      </Typography>
      <Typography>
        Bryllupsfest: Lille Restrup Hovedgaard, Lille Restrupvej 71, 9620 Aalestrup
      </Typography>
    </StyledPicInfoContainer>
  );
};

export default InfoContainer;
