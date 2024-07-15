import "./App.css";
import StyledAppBar from "@components/Common/StyledAppBar";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RSVP from "@components/RSVP";
import InfoContainer from "@components/InfoContainer";
import CeremonyContainer from "@components/CeremonyContainer";
import IMAGES from "./Images";
import Footer from "@components/Footer";
import AccommodationContainer from "@components/AccommodationContainer";
import DinnerContainer from "@components/DinnerContainer";
import WishesContainer from "@components/WishesContainer";
import TransportContainer from "@components/TransportContainer";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { tokens } from "./theme";
import SundayContainer from "@components/SundayContainer";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});


function App() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <StyledAppBar />
        <Box
          sx={{
            margin: "10rem 0 5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
          }}
          id="home"
        >
          <LazyLoadImage
            src={IMAGES.lemon}
            alt="eucaluptus"
            effect="opacity"
            width={isMediumScreen ? 125 : 250}
            style={{
              position: "absolute",
              left: isMediumScreen ? "5px" : "70px",
              top: isMediumScreen ? "90px" : "70px",
            }}
          />
          <LazyLoadImage
            src={IMAGES.portrait}
            alt="bride and groom"
            effect="opacity"
            width={isLargeScreen ? 200 : 300}
            style={{
              position: "absolute",
              right: isMediumScreen ? "5px" : "70px",
              top: isMediumScreen ? "40px" : "70px",
              clipPath: "circle(50% at 50% 50%)",
              filter: "grayscale(.3) opacity(0.9)"
            }}
          />

          <Typography
            sx={{ fontWeight: "500"}}
            variant="h4"
            color="black"
            className="calligraphy-font"
          >
            Nanna & Sjur
          </Typography>
          <Divider
            variant="middle"
            sx={{
              background:
                `linear-gradient(45deg, transparent, ${colors.green[200]}, transparent)`,
              height: "2px",
              borderColor: "transparent",
              borderRadius: "30%",
              margin: "5px 0",
            }}
          />
          <Typography variant="h4" color="grey" className="calligraphy-font">
            26. Oktober 2024
          </Typography>
          <Box sx={{ alignSelf: "center", width: "60%" }}>
            <Typography color="grey">
              Velkommen til vår bryllupsside!
            </Typography>
            <Typography color="grey">
              Her kan du finne alle detaljer om dagen, samt praktisk informasjon.
              <FavoriteOutlinedIcon fontSize="inherit" />
            </Typography>
          </Box>
        </Box>
        <RSVP />
        <InfoContainer />
        <AccommodationContainer />
        <TransportContainer />
        {/* <CeremonyContainer /> */}
        <DinnerContainer />
        <SundayContainer />
        <WishesContainer />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
