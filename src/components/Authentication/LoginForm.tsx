import { Button } from "@/core/ui/button";
import InputField from "@/core/ui/form-fields/InputField";
import { FormikProvider, useFormik } from "formik";
import React from "react";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6 md:gap-8"
      >
        <InputField id="email" name="email" type="email" placeholder="Email" />
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </form>
    </FormikProvider>
  );
};

export default LoginForm;
