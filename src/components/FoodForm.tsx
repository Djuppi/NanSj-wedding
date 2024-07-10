import { FormControlLabel, FormLabel, Grid, Typography } from "@mui/material";
import { RadioGroup } from "formik-material-ui";
import CssTextField from "./Common/StyledTextField";
import { RSVPFormValues } from "./RSVP";
import { Field, FormikErrors, FormikTouched } from "formik";
import StyledRadio from "./Common/StyledRadioButton";

type Props = {
  values: RSVPFormValues;
  errors: FormikErrors<RSVPFormValues>;
  touched: FormikTouched<RSVPFormValues>;
};

const FoodForm = (props: Props) => {
  const { values, errors, touched } = props;

  return (
    <>
      <Grid item xs={12}>
        <FormLabel id="main-course-label">Menyvalg - hovedrett</FormLabel>
      </Grid>
      <Grid item xs={12}>
        <FormLabel>{values.guest1 || "Gjest 1"}</FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="mainCourse1"
          aria-labelledby="main-course-label"
        >
          <FormControlLabel
            control={<StyledRadio />}
            label="Jeg ønsker kjøtt"
            value="Kød til hovedret"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label={<Typography>Jeg ønsker fisk</Typography>}
            value="Fisk til hovedret"
          />
        </Field>
        {errors.mainCourse1 && touched.mainCourse1 && (
          <Typography fontSize="small" color="error">
            {errors.mainCourse1}
          </Typography>
        )}
      </Grid>
      {values.guest2 && (
        <Grid item xs={12}>
          <FormLabel>{values.guest2 || "Gjest 2"}</FormLabel>
          <Field
            component={RadioGroup}
            style={{ alignItems: "center" }}
            name="mainCourse2"
            aria-labelledby="main-course-label"
          >
            <FormControlLabel
              control={<StyledRadio />}
              label="Jeg ønsker kjøtt"
              value="Kød til hovedret"
            />
            <FormControlLabel
              control={<StyledRadio />}
              label="Jeg ønsker fisk"
              value="Fisk til hovedret"
            />
          </Field>
        </Grid>
      )}
      <Grid item xs={12}>
        <FormLabel id="allergies-label">Allergier/spesielle hensyn:</FormLabel>
        <CssTextField name="allergies" control={"textarea"} />
      </Grid>
    </>
  );
};

export default FoodForm;
