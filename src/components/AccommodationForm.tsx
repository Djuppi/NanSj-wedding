import {
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { RadioGroup } from "formik-material-ui";
import { Field, FormikErrors, FormikTouched } from "formik";
import StyledRadio from "./Common/StyledRadioButton";
import { RSVPFormValues } from "./RSVP";

type Props = {
  values: RSVPFormValues;
  errors: FormikErrors<RSVPFormValues>;
  touched: FormikTouched<RSVPFormValues>;
};

const AccommodationForm = (props: Props) => {
  const { values, errors, touched } = props;
  return (
    <>
      <Grid item xs={12}>
        <FormLabel htmlFor="roomType">Overnatting:</FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="roomType"
          aria-labelledby="roomType"
        >
          <FormControlLabel
            control={<StyledRadio />}
            label="Dobbeltrom (1.700 DKK per natt)"
            value="Dobbelværelse"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Enkeltrom (1.400 DKK per natt)"
            value="Enkeltværelse"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Jeg/vi finner selv overnatting"
            value="Ingen overnatning"
          />
        </Field>
        {errors.roomType && touched.roomType && (
          <Typography fontSize="small" color="error">
            {errors.roomType}
          </Typography>
        )}
      </Grid>
      {values.roomType !== "Ingen overnatning" && (
        <Grid item xs={12}>
          <FormLabel htmlFor="roomType">Varighet:</FormLabel>
          <Field
            component={RadioGroup}
            style={{ alignItems: "center" }}
            name="stayDuration"
            aria-labelledby="stayDuration"
          >
            <FormControlLabel
              control={<StyledRadio />}
              label="1 natt (lørdag-søndag)"
              value="1 nat"
            />
            <FormControlLabel
              control={<StyledRadio />}
              label="2 netter (fredag-søndag)"
              value="2 nætter"
            />
          </Field>
          {errors.stayDuration && touched.stayDuration && (
            <Typography fontSize="small" color="error">
              {errors.stayDuration}
            </Typography>
          )}
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography fontStyle="italic">
          Spørsmål? Ta gjerne kontakt med oss på{" "}
          <Link href="mailto:askeogsus@gmail.com">mail</Link>
        </Typography>
      </Grid>
    </>
  );
};

export default AccommodationForm;
