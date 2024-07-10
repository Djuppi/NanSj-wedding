import { Box, Typography } from "@mui/material";
import Images from "../Images";

const SubmittedForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        width: "100%",
      }}
    >
      <img src={Images.arch} width={200} alt="wedding arch" />
      <Typography>Takk for ditt svar!</Typography>
    </Box>
  );
};

export default SubmittedForm;
