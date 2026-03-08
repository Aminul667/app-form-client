import CodeBlock from "../../CodeBlock/CodeBlock";

const zodInputFieldSchema = `
import z from "zod";

export const inputFieldExampleSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  age: z.preprocess((val) => {
    if (val === "" || val === undefined || val === null) return undefined;
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number({ message: "Age must be a number" }).int("Age must be an integer").positive("Age must be a positive integer")),
});

export type TInputFieldExample = z.infer<typeof inputFieldExampleSchema>;
`;

const inputFieldComponent = `
"use client";

import { AppForm } from "@/components/app-form/app-form";
import AppInputField from "@/components/app-form/fields/app-input-field";
import { Button } from "@/components/ui/button";
import {
  inputFieldExampleSchema,
  TInputFieldExample,
} from "@/schema/example.schema";

const InputFieldExample = () => {
  const onSubmit = (data: TInputFieldExample) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <AppForm<TInputFieldExample>
        schema={inputFieldExampleSchema}
        onSubmit={onSubmit}
        className="space-y-4"
      >
        {({ register, formState: { errors } }) => (
          <>
            <AppInputField
              name="firstName"
              type="text"
              label="First Name *"
              placeholder="John"
              register={register}
              errors={errors}
              containerClass="space-y-2"
              inputClass="bg-white border-gray-500/30"
              labelClass="text-sm font-medium flex items-center"
            />
            <AppInputField
              name="lastName"
              type="text"
              label="Last Name *"
              placeholder="Doe"
              register={register}
              errors={errors}
              containerClass="space-y-2"
              inputClass="bg-white border-gray-500/30"
              labelClass="text-sm font-medium flex items-center"
            />
            <AppInputField
              name="email"
              type="text"
              label="Email *"
              placeholder="john@example.com"
              register={register}
              errors={errors}
              containerClass="space-y-2"
              inputClass="bg-white border-gray-500/30"
              labelClass="text-sm font-medium flex items-center"
            />
            <AppInputField
              name="age"
              type="number"
              label="Age *"
              placeholder="25"
              register={register}
              errors={errors}
              containerClass="space-y-2"
              inputClass="bg-white border-gray-500/30"
              labelClass="text-sm font-medium flex items-center"
            />
            <Button type="submit" className="w-full cursor-pointer">
              Submit
            </Button>
          </>
        )}
      </AppForm>
    </div>
  );
};

export default InputFieldExample;
`;

const InputFieldExampleCode = () => {
  return (
    <>
      <div>
        <p>zod schema</p>
        <CodeBlock language="ts" code={zodInputFieldSchema} />
      </div>
      <div>
        <p>Input Field component</p>
        <CodeBlock language="tsx" code={inputFieldComponent} />
      </div>
    </>
  );
};

export default InputFieldExampleCode;