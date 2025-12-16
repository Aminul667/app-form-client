import CodeBlock from "../../CodeBlock/CodeBlock";

const zodBasicFunctionSchema = `
import z from "zod";

const genderValues = ["male", "female", "other"] as const;

const imageSchema = z.custom<File>(
  (file) => {
    return (
      file instanceof File &&
      file.size <= 10 * 1024 * 1024 &&
      file.type.startsWith("image/")
    );
  },
  {
    message: "Each file must be an image under 10MB",
  }
);

export const basicFunctionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  age: z.preprocess((val) => {
    const number = Number(val);
    return isNaN(number) ? undefined : number;
  }, z.number().int().positive("Age must be a positive integer")),
  gender: z.preprocess(
    (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
    z
      .string()
      .optional()
      .refine(
        (val): val is string => !!val && genderValues.includes(val as any),
        {
          message: "Gender is required",
        }
      )
  ),
  images: z
    .any()
    .transform((val) => (Array.isArray(val) ? val : []))
    .pipe(
      z
        .array(imageSchema)
        .min(1, "At least one image is required")
        .max(10, "You can upload up to 10 images")
    ),
  termsAndCondition: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type TBasicFunction = z.infer<typeof basicFunctionSchema>;
`;

const basicFunctionComponent = `
"use client";

import { AppForm } from "@/components/app-form/app-form";
import AppCheckbox from "@/components/app-form/fields/app-checkbox";
import AppFileUploader from "@/components/app-form/fields/app-file-uploader";
import AppInputField from "@/components/app-form/fields/app-input-field";
import AppSelectItem from "@/components/app-form/fields/app-select-item";
import { Button } from "@/components/ui/button";
import { basicFunctionSchema, TBasicFunction } from "@/schema/example.schema";
import { Handshake, Upload } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

const BasicFunction = () => {
  const [formMethods, setFormMethods] = useState<UseFormReturn<any> | null>(
    null
  );

  const genderTypeConstants = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleSetValues = () => {
    if (!formMethods) return;

    formMethods.setValue("firstName", "John");
    formMethods.setValue("lastName", "Doe");
    formMethods.setValue("age", 30);
    formMethods.setValue("gender", "male");
  };

  const handleGetValues = () => {
    if (!formMethods) return;

    const values = formMethods.getValues();
    console.log("📦 Current values:", values);
    alert(JSON.stringify(values, null, 2));
  };

  const handleReset = () => {
    if (!formMethods) return;

    formMethods.reset();
  };

  const onSubmit = (data: TBasicFunction) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden p-10 rounded-2xl">
      <AppForm<TBasicFunction>
        onMethods={setFormMethods}
        schema={basicFunctionSchema}
        defaultValues={{
          termsAndCondition: false,
        }}
        onSubmit={onSubmit}
        className="space-y-4"
      >
        {({ register, control, formState: { errors } }) => {
          return (
            <>
              <AppInputField
                name="firstName"
                type="text"
                label="First Name *"
                placeholder="First"
                register={register}
                errors={errors}
                containerClass="space-y-2"
                inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
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
                inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
                labelClass="text-sm font-medium flex items-center"
              />
              <div className="flex gap-5">
                <AppInputField
                  name="age"
                  type="number"
                  label="Age *"
                  placeholder="Age"
                  register={register}
                  errors={errors}
                  containerClass="space-y-2 w-full"
                  inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
                  labelClass="text-sm font-medium flex items-center"
                />
                <AppSelectItem
                  name="gender"
                  control={control}
                  label="Gender *"
                  placeholder="Select your gender"
                  options={genderTypeConstants}
                  errors={errors}
                  containerClass="space-y-2 w-full"
                  labelClass="text-sm font-medium mb-2"
                  triggerClass="w-full border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
                  contentClass="bg-white border-gray-500/30"
                  itemClass="hover:bg-[#B1AB86]/10"
                />
              </div>
              <AppCheckbox
                name="termsAndCondition"
                control={control}
                label="Terms and condition"
                icon={<Handshake className="w-4 h-4" />}
                errors={errors}
                checkboxClass="border border-gray-800 data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-900"
                labelClass="text-sm flex items-center cursor-pointer"
              />
              <AppFileUploader
                name="images"
                control={control}
                label="Upload images"
                labelClass="text-sm font-medium mb-2"
                maxImages={10}
                maxFileSizeMB={10}
                errors={errors}
                uploadZoneInner={({ maxFileSizeMB }) => (
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="w-10 h-10" />
                    <span className="font-medium">
                      Drop files or click to browse test
                    </span>
                    <span className="text-sm">
                      Supported: PNG/JPG · up to {maxFileSizeMB}MB each test
                    </span>
                  </div>
                )}
              />
              <Button type="submit" className="w-full cursor-pointer">
                Save
              </Button>

              <div className="flex gap-3">
                <Button
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
                  type="button"
                  onClick={handleSetValues}
                >
                  Set Values
                </Button>
                <Button
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
                  type="button"
                  onClick={handleGetValues}
                >
                  Get Values
                </Button>
                <Button
                  className="cursor-pointer bg-red-600 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700 transition-colors"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </>
          );
        }}
      </AppForm>
    </div>
  );
};

export default BasicFunction;
`;

const BasicFunctionCode = () => {
  return (
    <>
      <div>
        <p>zod schema</p>
        <CodeBlock language="ts" code={zodBasicFunctionSchema} />
      </div>
      <div>
        <p>Basic Function component</p>
        <CodeBlock language="tsx" code={basicFunctionComponent} />
      </div>
    </>
  );
};

export default BasicFunctionCode;
