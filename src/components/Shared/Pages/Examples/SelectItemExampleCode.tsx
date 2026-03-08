import CodeBlock from "../../CodeBlock/CodeBlock";

const zodSelectItemSchema = `
import z from "zod";

const validCountries = ["us", "uk", "ca", "au"] as const;
const validRoles = ["developer", "designer", "manager", "analyst"] as const;
const validExperience = ["junior", "mid", "senior"] as const;

export const selectItemExampleSchema = z.object({
  country: z
    .string({ message: "Country is required" })
    .min(1, "Country is required")
    .refine((val) => validCountries.includes(val as any), {
      message: "Invalid country",
    }),
  role: z
    .string({ message: "Role is required" })
    .min(1, "Role is required")
    .refine((val) => validRoles.includes(val as any), {
      message: "Invalid role",
    }),
  experience: z
    .string({ message: "Experience level is required" })
    .min(1, "Experience level is required")
    .refine((val) => validExperience.includes(val as any), {
      message: "Invalid experience level",
    }),
});

export type TSelectItemExample = z.infer<typeof selectItemExampleSchema>;
`;

const selectItemComponent = `
"use client";

import { AppForm } from "@/components/app-form/app-form";
import AppSelectItem from "@/components/app-form/fields/app-select-item";
import { Button } from "@/components/ui/button";
import {
  selectItemExampleSchema,
  TSelectItemExample,
} from "@/schema/example.schema";

const SelectItemExample = () => {
  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
  ];

  const roleOptions = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Manager" },
    { value: "analyst", label: "Analyst" },
  ];

  const experienceOptions = [
    { value: "junior", label: "Junior (0-2 years)" },
    { value: "mid", label: "Mid (3-5 years)" },
    { value: "senior", label: "Senior (6+ years)" },
  ];

  const onSubmit = (data: TSelectItemExample) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <AppForm<TSelectItemExample>
        schema={selectItemExampleSchema}
        onSubmit={onSubmit}
        className="w-full space-y-4"
      >
        {({ control, formState: { errors } }) => (
          <>
            <AppSelectItem
              name="country"
              control={control}
              label="Country *"
              placeholder="Select your country"
              options={countryOptions}
              errors={errors}
              containerClass="space-y-2"
              labelClass="text-sm font-medium mb-2"
              triggerClass="w-full border-gray-500/30"
              contentClass="bg-white border-gray-500/30"
              itemClass="hover:bg-blue-50"
            />
            <div className="md:flex md:gap-5 w-full">
              <AppSelectItem
                name="role"
                control={control}
                label="Role *"
                placeholder="Select your role"
                options={roleOptions}
                errors={errors}
                containerClass="space-y-2 w-full"
                labelClass="text-sm font-medium mb-2"
                triggerClass="w-full border-gray-500/30"
                contentClass="bg-white border-gray-500/30"
                itemClass="hover:bg-blue-50"
              />
              <AppSelectItem
                name="experience"
                control={control}
                label="Experience *"
                placeholder="Select experience level"
                options={experienceOptions}
                errors={errors}
                containerClass="space-y-2 w-full"
                labelClass="text-sm font-medium mb-2"
                triggerClass="w-full border-gray-500/30"
                contentClass="bg-white border-gray-500/30"
                itemClass="hover:bg-blue-50"
              />
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              Submit
            </Button>
          </>
        )}
      </AppForm>
    </div>
  );
};

export default SelectItemExample;
`;

const SelectItemExampleCode = () => {
  return (
    <>
      <div>
        <p>zod schema</p>
        <CodeBlock language="ts" code={zodSelectItemSchema} />
      </div>
      <div>
        <p>Select Item component</p>
        <CodeBlock language="tsx" code={selectItemComponent} />
      </div>
    </>
  );
};

export default SelectItemExampleCode;