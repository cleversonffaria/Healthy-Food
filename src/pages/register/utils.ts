import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Field cannot be empty."),
  birthDate: Yup.string()
    .matches(
      /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/,
      "Birthdate invalid."
    )
    .required("Field cannot be empty."),
  cpf: Yup.string()
    .matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/, "CEP does not exist.")
    .required("Field cannot be empty."),
  cep: Yup.string()
    .matches(/\d{2}\.\d{3}-\d{3}/, "CEP does not exist.")
    .required("Field cannot be empty."),
  street: Yup.string().required("Field cannot be empty."),
  neighborhood: Yup.string().required("Field cannot be empty."),
  city: Yup.string().required("Field cannot be empty."),
  stateCity: Yup.string().required("Field cannot be empty."),
});

export type registerInput = {
  name?: string;
  birthDate?: string;
  cpf?: string;
  cep?: string;
  street?: string;
  neighborhood?: string;
  city?: string;
  stateCity?: string;
};

export const initialValues: registerInput = {
  name: "",
  birthDate: "",
  cpf: "",
  cep: "",
  street: "",
  neighborhood: "",
  city: "",
  stateCity: "",
};
