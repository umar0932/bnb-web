import React from "react";
import { z } from "zod";
import { FormikProvider, useFormik } from "formik";
import { Button } from "@/core/ui/button";
import useTermsConfirmation from "./useTermsConfirmation";
import { toFormikValidationSchema } from "zod-formik-adapter";
import InputField from "@/core/ui/form-fields/InputField";

const FormSchema = z
  .object({
    email: z.string().email().default(""),
    firstName: z.string().min(2).max(100).default(""),
    lastName: z.string().min(2).max(100).default(""),
    password: z.string().min(8).max(100).default(""),
    confirmPassword: z.string().min(8).max(100).default(""),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

interface Props {
  initalValues?: z.infer<typeof FormSchema>;
}

const CreateAccountForm = ({
  initalValues = {
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  },
}: Props) => {
  const {modalNode,getTermsConfirmation} = useTermsConfirmation();
  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: toFormikValidationSchema(FormSchema),
    onSubmit: async (values) => {
      const isConfirmed = await getTermsConfirmation();
      console.log(isConfirmed + " " + JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex w-full flex-col gap-6 md:gap-8">
      {modalNode}
      <FormikProvider value = {formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="flex w-full flex-col gap-6 md:gap-8"
        >
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <InputField
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <InputField
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <InputField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <Button type="submit">Continue</Button>
        </form>
      </FormikProvider>
    </div>
  );
};

export default CreateAccountForm;
