import { Typography } from "@mui/material";
import Images from "../Images";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";

const InfoContainer = () => {

  return (
    <StyledPicInfoContainer
      orderImageDesktop={2}
      orderInfoDesktop={1}
      image={Images.Kirke}
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
