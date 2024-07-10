import { FormControlLabel, FormLabel, Grid, Typography } from "@mui/material";
import { RadioGroup } from "formik-material-ui";
import { Field, FormikErrors, FormikTouched } from "formik";
import StyledRadio from "./Common/StyledRadioButton";
import CssTextField from "./Common/StyledTextField";
import { RSVPFormValues } from "./RSVP";
import { FC } from "react";

interface Props {
  errors: FormikErrors<RSVPFormValues>;
  touched: FormikTouched<RSVPFormValues>;
}

const InfoForm: FC<Props> = (props: Props) => {
  const { errors, touched } = props;
  return (
    <>
      <Grid item xs={12}>
        <CssTextField
          name="guest1"
          id="guest1"
          label="Gjest 1*"
          control="input"
        />
        {errors.guest1 && (
          <Typography fontSize="small" color="error">
            {errors.guest1}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <CssTextField
          name="guest2"
          id="guest2"
          label="Gjest 2"
          control="input"
        />
      </Grid>
      <Grid item xs={12}>
        <CssTextField name="email" id="email" label="E-post" control="input" />
        {errors.email && touched.email && (
          <Typography fontSize="small" color="error">
            {errors.email}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <FormLabel id="demo-radio-buttons-group-label">
          Kan vi forvente deg/dere? *
        </FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="expectation"
          aria-labelledby="demo-radio-buttons-group-label"
        >
          <FormControlLabel control={<StyledRadio />} label="Ja" value="ja" />
          <FormControlLabel
            control={<StyledRadio />}
            label="Nei, dessverre"
            name="expectation"
            value="nej"
          />
        </Field>
        {errors.expectation && touched.expectation && (
          <Typography fontSize="small" color="error">
            {errors.expectation}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <FormLabel htmlFor="allergies1">
          Legg igjen kommentar dersom du ønsker å bidra med noe til programmet
          (tale/underholdning).
        </FormLabel>
        <CssTextField name="contribution" control={"input"} multiline />
      </Grid>
    </>
  );
};

export default InfoForm;
