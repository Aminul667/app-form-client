import CodeBlock from "../../CodeBlock/CodeBlock";

const zodCheckboxSchema = `
import z from "zod";

export const checkboxExampleSchema = z.object({
  termsAndCondition: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
  newsletter: z.boolean().optional(),
  notifications: z.boolean().optional(),
});

export type TCheckboxExample = z.infer<typeof checkboxExampleSchema>;
`;

const checkboxComponent = `
"use client";

import { AppForm } from "@/components/app-form/app-form";
import AppCheckbox from "@/components/app-form/fields/app-checkbox";
import { Button } from "@/components/ui/button";
import {
  checkboxExampleSchema,
  TCheckboxExample,
} from "@/schema/example.schema";
import { Bell, Handshake, Mail, Shield } from "lucide-react";

const CheckboxExample = () => {
  const onSubmit = (data: TCheckboxExample) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <AppForm<TCheckboxExample>
        schema={checkboxExampleSchema}
        onSubmit={onSubmit}
        defaultValues={{
          termsAndCondition: false,
          newsletter: false,
          notifications: false,
          privacy: false,
        }}
        className="w-full space-y-4"
      >
        {({ control, formState: { errors } }) => (
          <>
            <AppCheckbox
              name="termsAndCondition"
              control={control}
              label="I agree to the terms and conditions"
              icon={<Handshake className="w-4 h-4" />}
              errors={errors}
              checkboxClass="border border-gray-800 data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-900"
              labelClass="text-sm flex items-center cursor-pointer"
            />
            <AppCheckbox
              name="privacy"
              control={control}
              label="I accept the privacy policy"
              icon={<Shield className="w-4 h-4" />}
              errors={errors}
              checkboxClass="border border-gray-800 data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-900"
              labelClass="text-sm flex items-center cursor-pointer"
            />
            <AppCheckbox
              name="newsletter"
              control={control}
              label="Subscribe to newsletter"
              icon={<Mail className="w-4 h-4" />}
              errors={errors}
              checkboxClass="border border-gray-800 data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-900"
              labelClass="text-sm flex items-center cursor-pointer"
            />
            <AppCheckbox
              name="notifications"
              control={control}
              label="Enable push notifications"
              icon={<Bell className="w-4 h-4" />}
              errors={errors}
              checkboxClass="border border-gray-800 data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-900"
              labelClass="text-sm flex items-center cursor-pointer"
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

export default CheckboxExample;
`;

const CheckboxExampleCode = () => {
  return (
    <>
      <div>
        <p>zod schema</p>
        <CodeBlock language="ts" code={zodCheckboxSchema} />
      </div>
      <div>
        <p>Checkbox component</p>
        <CodeBlock language="tsx" code={checkboxComponent} />
      </div>
    </>
  );
};

export default CheckboxExampleCode;