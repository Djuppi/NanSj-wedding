import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import Images from "../Images";

const SundayContainer = () => (
  <StyledPicInfoContainer
    orderImageDesktop={2}
    orderInfoDesktop={1}
    image={Images.sunday}
    id="program"
  >
    <Typography
      variant="h4"
      component="h2"
      sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
    >
      Søndag
    </Typography>

    <List>
      <ListItem>
        <ListItemIcon>
          <img src={Images.cheers} width={20} alt="champagne glasses" />
        </ListItemIcon>
        <ListItemText primary="10:00 - Brunch på Lille Restrup Hovedgaard" />
      </ListItem>
    </List>
    <Typography fontSize="small" fontStyle="italic">
      Brunchen er inkludert i prisen for overnattende gjester og koster 148,- DKK for ikke overnattende gjester som ønsker å delta.
    </Typography>
  </StyledPicInfoContainer>
);

export default SundayContainer;
