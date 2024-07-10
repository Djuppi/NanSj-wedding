import * as yup from "yup";

export const RSVPValidation = yup.object().shape({
  guest1: yup.string().required("Vi må vite hva du heter").test('two-words', 'Vi trenger ditt fulle navn', (value) => {
    return value.split(' ').length > 1;
  }),
  email: yup
    .string()
    .email("Ugyldig e-post")
    .required("Vi trenger e-posten din"),
  expectation: yup.string().required("Vi må vite om du kommer eller ikke"),
  mainCourse1: yup.string().required("Vi trenger å vite hva du ønsker å spise"),
  mainCourse2: yup.string().required("Vi trenger å vite hva du ønsker å spise"),
});
