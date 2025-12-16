/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppForm } from "@/components/app-form/app-form";
import AppCheckbox from "@/components/app-form/fields/app-checkbox";
import AppFileUploader from "@/components/app-form/fields/app-file-uploader";
import AppInputField from "@/components/app-form/fields/app-input-field";
import AppSelectItem from "@/components/app-form/fields/app-select-item";
import { Button } from "@/components/ui/button";
import { basicFunctionSchema, TBasicFunction } from "@/schema/example.schema";
import { Handshake, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";

const WatchFunction = () => {
  const [formMethods, setFormMethods] = useState<UseFormReturn<any> | null>(
    null
  );

  const genderTypeConstants = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  // Live watch: log multiple fields
  useEffect(() => {
    if (!formMethods) return;

    const subscription = formMethods.watch((_, { name }) => {
      if (name === "firstName" || name === "lastName" || name === "gender") {
        const values = formMethods.getValues();
        console.log("👀 Watched values:", {
          firstName: values.firstName,
          lastName: values.lastName,
          gender: values.gender,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [formMethods]);

  const handleSetValues = () => {
    if (!formMethods) return;

    formMethods.setValue("firstName", "John");
    formMethods.setValue("lastName", "Doe");
    formMethods.setValue("age", 30);
  };

  const handleGetValues = () => {
    if (!formMethods) return;

    const values = formMethods.getValues();
    console.log("📦 Current values:", values);
  };

  const handleReset = () => {
    if (!formMethods) return;

    formMethods.reset();
  };

  const onSubmit = (data: TBasicFunction) => {
    console.log(data);
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

export default WatchFunction;
