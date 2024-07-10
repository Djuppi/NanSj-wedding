import { List, ListItem, Typography } from "@mui/material";
import Images from "../Images";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";

const AccommodationContainer = () => {
  return (
    <StyledPicInfoContainer
      orderImageDesktop={1}
      orderInfoDesktop={2}
      image={Images.accommodation}
      id="accommodation"
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
      >
        Overnatting
      </Typography>
      <Typography>
        Lille Restrup Hovedgaard tilbyr våre gjester overnatting på stedet.
        Prisen inkluderer brunch klokken 10.00 søndag formiddag (og morgenmat
        lørdag dersom man ankommer fredag)
      </Typography>
      <List>
        <ListItem>
          <Typography>Kr. 898,- DKK per natt for et dobbeltrom</Typography>
        </ListItem>
        <ListItem>
          <Typography>Kr. 358,- DKK per ekstra person på rommet</Typography>
        </ListItem>
      </List>
      <Typography fontStyle="italic">
        Dersom du/dere ønsker å overnatte kan dette fylles inn via
        RSVP skjema.
      </Typography>
    </StyledPicInfoContainer>
  );
};

export default AccommodationContainer;
