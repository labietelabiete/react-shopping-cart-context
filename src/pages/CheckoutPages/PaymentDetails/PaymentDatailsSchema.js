import * as Yup from "yup";

const PersonalDetailsSchema = Yup.object().shape({
  cardName: Yup.string()
    .min(10, "The name is to short!")
    .max(30, "The name is too long!")
    .required("The name is required!"),
  cardNumber: Yup.number()
    .min()
    .max(16, "The number is too long!")
    .required("The card number is required!"),
  cardCVV: Yup.number()
    .min(3, "The CVV is to long!")
    .required("The CVV is required!"),
  termsConditions: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required",
  ),
});

export default PersonalDetailsSchema;
