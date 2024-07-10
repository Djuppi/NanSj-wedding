import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import Images from "../Images";

const DinnerContainer = () => (
  <StyledPicInfoContainer
    orderImageDesktop={2}
    orderInfoDesktop={1}
    image={Images.weddingDinner}
    id="dinner"
  >
    <Typography
      variant="h4"
      component="h2"
      sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
    >
      Middag og fest
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <img src={Images.dinner} width={20} alt="menu" />
        </ListItemIcon>
        <ListItemText primary="17:30 - Middag" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.dj} width={20} alt="disk" />
        </ListItemIcon>
        <ListItemText primary="Når middagen er ferdig - Brudevals" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.cake} width={20} alt="cake" />
        </ListItemIcon>
        <ListItemText primary="Når brudevalsen er ferdig - Dansegulvet åpnes" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.nightFood} width={20} alt="food bowl" />
        </ListItemIcon>
        <ListItemText primary="02:00 - Pizza serveres til nattmat	" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.moon} width={20} alt="moon" />
        </ListItemIcon>
        <ListItemText primary="Sent - Festen avsluttes" />
      </ListItem>
    </List>
    <Typography fontSize="small" fontStyle="italic">
      *Programmet ikke er 100% fastsatt, og endringer
      kan forekomme.
    </Typography>
  </StyledPicInfoContainer>
);

export default DinnerContainer;
