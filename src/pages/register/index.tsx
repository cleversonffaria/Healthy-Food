import React from "react";
import { useHistory } from "react-router-dom";
import nookies from "nookies";

import { Footer, Header, Button } from "src/components";

import {
  Wrapper,
  Input,
  Container,
  Session,
  TitleSearch,
  Content,
  BackgroundImage,
  AlertError,
} from "./styles";
import consultaCEP from "src/services/api";
import { states } from "src/utils";
import {
  validateBirthDate,
  validateCEP,
  validateCPF,
} from "src/utils/validations";
import { initialValues, registerInput, RegisterSchema } from "./utils";
import { Formik, FormikHelpers, FormikValues } from "formik";

const Pages: React.FC = () => {
  const history = useHistory();
  const onSubmit = (
    values: registerInput,
    { setSubmitting }: FormikHelpers<FormikValues>
  ) => {
    localStorage.setItem("healthyfood:user", JSON.stringify(values));

    var fifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);

    nookies.set(null, "user", JSON.stringify(values), {
      expires: fifteenMinutes,
    });

    setTimeout(() => {
      setSubmitting(false);
      history.push("/");
    }, 1000);
  };

  /**
   * Maneiras de acessar o COOKIE:
   * import { parseCookies } from "nookies";
   *
   * const cookies = parseCookies();
   * console.log(cookies.user && JSON.parse(cookies.user));
   *
   * Maneiras de acessar o LOCALSTORAGE:
   * const storage = localStorage.getItem("healthyfood:user");
   * console.log(storage && JSON.parse(storage));
   **/

  return (
    <Wrapper>
      <Header />
      <Session>
        <BackgroundImage />
        <Container>
          <Content>
            <TitleSearch>Register now</TitleSearch>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={onSubmit}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                setValues,
                isSubmitting,
              }) => (
                <>
                  <Input
                    placeholder="Name"
                    value={values.name}
                    errorMessage={!!errors.name}
                    onChange={handleChange("name")}
                  />
                  {errors.name && <AlertError>{errors.name}</AlertError>}
                  <Input
                    placeholder="Birth date"
                    value={validateBirthDate(values.birthDate || "")}
                    errorMessage={!!errors?.birthDate}
                    onChange={handleChange("birthDate")}
                  />
                  {errors.birthDate && (
                    <AlertError>{errors.birthDate}</AlertError>
                  )}
                  <Input
                    placeholder="Cpf"
                    value={validateCPF(values.cpf || "")}
                    errorMessage={!!errors?.cpf}
                    onChange={handleChange("cpf")}
                  />
                  {errors.cpf && <AlertError>{errors.cpf}</AlertError>}
                  <Input
                    placeholder="Cep"
                    value={validateCEP(values.cep || "")}
                    maxLength={10}
                    errorMessage={!!errors?.cep}
                    onChange={handleChange("cep")}
                    onBlur={async () => {
                      const response = await consultaCEP(values.cep || "");
                      if (response && !response.erro) {
                        setValues({
                          ...values,
                          city: response.localidade,
                          stateCity: states[response.uf],
                          street: response.logradouro,
                          neighborhood: response.bairro,
                        });
                      }
                    }}
                  />
                  {errors.cep && <AlertError>{errors.cep}</AlertError>}
                  <Input
                    placeholder="Street"
                    value={values.street}
                    errorMessage={!!errors?.street}
                    onChange={handleChange("street")}
                  />
                  {errors.street && <AlertError>{errors.street}</AlertError>}
                  <Input
                    placeholder="Neighborhood"
                    value={values.neighborhood}
                    errorMessage={!!errors?.neighborhood}
                    onChange={handleChange("neighborhood")}
                  />
                  {errors.neighborhood && (
                    <AlertError>{errors.neighborhood}</AlertError>
                  )}
                  <Input
                    placeholder="City"
                    value={values.city}
                    errorMessage={!!errors?.city}
                    onChange={handleChange("city")}
                  />
                  {errors.city && <AlertError>{errors.city}</AlertError>}
                  <Input
                    placeholder="State"
                    value={values.stateCity}
                    errorMessage={!!errors?.stateCity}
                    onChange={handleChange("stateCity")}
                  />
                  {errors.stateCity && (
                    <AlertError>{errors.stateCity}</AlertError>
                  )}
                  <Button
                    onClick={handleSubmit}
                    width={100}
                    style={{ marginTop: 20 }}
                  >
                    {(isSubmitting && "Loading") || "Send"}
                  </Button>
                </>
              )}
            </Formik>
          </Content>
        </Container>
      </Session>
      <Footer />
    </Wrapper>
  );
};

export default Pages;
