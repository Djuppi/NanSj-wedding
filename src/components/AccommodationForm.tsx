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
        <FormLabel htmlFor="roomType">
          Vil du/dere overnatte på Lille Restrup Hovedgaard?
        </FormLabel>
      </Grid>

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
            label="Ja, én natt fra lørdag til søndag"
            value="1 nat"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Ja, to netter fra fredag til søndag"
            value="2 nætter"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Ingen overnatning"
            value=""
          />
        </Field>
        {errors.stayDuration && touched.stayDuration && (
          <Typography fontSize="small" color="error">
            {errors.stayDuration}
          </Typography>
        )}
      </Grid>
      {values.stayDuration === "" && (
        <Grid item xs={12}>
        <FormLabel htmlFor="brunch">Har du/i ikke overnatting, men ønsker å delta på brunch søndag kl. 10.00?*</FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="brunch"
          aria-labelledby="brunch"
          required
        >
          <FormControlLabel
            control={<StyledRadio />}
            label="Ja"
            value="Ja"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Nei"
            value="Nej"
          />
        </Field>
        {errors.brunch && touched.brunch && (
          <Typography fontSize="small" color="error">
            {errors.brunch}
          </Typography>
        )}
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography fontStyle="italic">
          Spørsmål? Ta gjerne kontakt med oss på{" "}
          <Link href="mailto:sjurognanna@hotmail.com">mail</Link>
        </Typography>
      </Grid>
    </>
  );
};

export default AccommodationForm;
