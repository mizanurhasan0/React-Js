import { Email } from "@material-ui/icons";
import * as yup from "yup";

export const userValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(2).max(10).required(),
});
