import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Images from "../Images";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";

const CeremonyContainer = () => {
  return (
    <StyledPicInfoContainer
      orderImageDesktop={1}
      orderInfoDesktop={2}
      image={Images.ceremony}
      id="program"
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
      >
        Tidsplan
      </Typography>
      <List sx={{ width: {xs: "100%", lg: "80%"} }}>
        <ListItem>
          <ListItemIcon>
            <img src={Images.meetUp} width={20} alt="Brides couple" />
          </ListItemIcon>
          <ListItemText primary="13:00 - Vielse i Hvam kirke" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src={Images.rings} width={20} alt="Wedding rings" />
          </ListItemIcon>
          <ListItemText primary="14:00 - Ankomst Lille Restrup Hovedgaard med servering og fotografering" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src={Images.camera} width={20} alt="camera" />
          </ListItemIcon>
          <ListItemText primary="15:30 - Bryllupskake og velkomstdrink" />
        </ListItem>
      </List>
      {/* <Typography fontSize={"small"} fontStyle={"italic"}>
        Vi ber om at telefoner blir i lommen under vielsen. Det blir mulighet for å ta bilder i etterkant.
    
      </Typography> */}
    </StyledPicInfoContainer>
  );
};

export default CeremonyContainer;
