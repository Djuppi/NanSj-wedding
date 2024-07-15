import { Box, Link, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import { tokens } from "../theme";

const WishesContainer: FC = () => { 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <Box
      sx={{
        alignSelf: "center",
        width: { xs: "90%", sm: "40%" },
        margin: "3rem auto",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        color: colors.gray[500],
      }}
      id="wishes"
    >
      <Typography variant="h2" component="h3">
        Gaveønsker
      </Typography>
      <Typography>Kjære gjester,</Typography>
      <Typography>
        Vårt aller største ønske er å ha en uforglemmelig dag med venner og
        familie. Den fineste gaven dere kan gi oss, er derfor gitt allerede når
        dere kommer. Vi holder bryllupet et sted der mange bruker mye tid og
        penger på å komme seg til, så vi forventer ingenting utover det{" "}
        <FavoriteOutlinedIcon fontSize="inherit" />
      </Typography>
      <Typography>
        Dersom noen likevel vil ha med gave, har vi opprettet en ønskeliste på
        Ønskeskyen.
      </Typography>
      <Link href="https://onskeskyen.dk/s/djbdqm" sx={{ color: colors.brown[500], textDecoration: "none" }}>Se ønsker her</Link>
    </Box>
  )
};

export default WishesContainer;
