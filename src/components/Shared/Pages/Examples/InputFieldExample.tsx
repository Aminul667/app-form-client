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
    <div className="bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden p-10 rounded-2xl">
      <AppForm<TInputFieldExample>
        schema={inputFieldExampleSchema}
        onSubmit={onSubmit}
        className="w-full space-y-4"
      >
        {({ register, formState: { errors } }) => (
          <>
            <div className="md:flex md:gap-5 w-full">
              <AppInputField
                name="firstName"
                type="text"
                label="First Name *"
                placeholder="John"
                register={register}
                errors={errors}
                containerClass="w-full space-y-2"
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
                containerClass="w-full space-y-2"
                inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
                labelClass="text-sm font-medium flex items-center"
              />
            </div>
            <div className="md:flex md:gap-5 w-full">
              <AppInputField
                name="email"
                type="text"
                label="Email *"
                placeholder="john@example.com"
                register={register}
                errors={errors}
                containerClass="w-full space-y-2"
                inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
                labelClass="text-sm font-medium flex items-center"
              />
              <AppInputField
                name="age"
                type="number"
                label="Age *"
                placeholder="25"
                register={register}
                errors={errors}
                containerClass="w-full space-y-2"
                inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
                labelClass="text-sm font-medium flex items-center"
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

export default InputFieldExample;