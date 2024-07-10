import { Box, Grid, Link, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../theme";

const Footer: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "2rem",
        backgroundColor: colors.yellow[200],
        color: "black",
        gap: "1rem",
      }}
      id="contact"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
          <Typography variant="h5" component="h3">
            Kontakt
          </Typography>
          <Typography>Ønsker du å holde tale eller underholdning? Ta kontakt med våre toastmastere: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography fontStyle="italic">Thilde Kuhr Skals</Typography>

          <Link
            sx={{ color: colors.brown[500], textDecoration: "none" }}
            href="mailto:thilde.skals@gmail.com)"
            target="_blank"
            rel="noopener noreferrer"
          >
            thilde.skals@gmail.com
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography fontStyle="italic">Camille Dalsgaard </Typography>

          <Link
            sx={{ color: colors.brown[500], textDecoration: "none" }}
            href="mailto:camilledalsgaard@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            camilledalsgaard@gmail.com
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography fontStyle="italic">
            For andre spørsmål/henvendelser, send oss en mail: 
          </Typography>
          <Link
            sx={{ color: colors.brown[500], textDecoration: "none" }}
            href="mailto:sjurognanna@hotmail.com"
          >
            sjurognanna@hotmail.com
          </Link>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignSelf: { sm: "center", md: "end" },
          flexDirection: "column",
          marginTop: { xs: "1rem", sm: "0" },
        }}
      >
        <Typography fontSize="small">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/Djuppi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.brown[500] }}
          >
            Djuppi.
          </a>{" "}
          All rights reserved.
        </Typography>
        <Typography fontSize={8}>
          Uicons by{" "}
          <a
            style={{ color: colors.brown[500] }}
            color="white"
            href="https://www.flaticon.com/uicons"
          >
            Flaticon
          </a>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
