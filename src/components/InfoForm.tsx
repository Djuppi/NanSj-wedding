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
        <FormLabel id="demo-radio-buttons-group-label">
        Kommer du/dere i bryllupet?*
        </FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="expectation"
          aria-labelledby="demo-radio-buttons-group-label"
        >
          <FormControlLabel control={<StyledRadio />} label="Ja" value="ja" />
          <FormControlLabel control={<StyledRadio />} label="Ja, men kun i kirken" value="kun kirke" />
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
        <FormLabel id="demo-radio-buttons-group-label">
        Er du vegetarianer/veganer eller har noen matallergier?
        </FormLabel>
        <CssTextField name="allergies" control={"input"} multiline />
      </Grid>
    </>
  );
};

export default InfoForm;
