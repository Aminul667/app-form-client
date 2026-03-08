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
    <div className="bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden p-10 rounded-2xl">
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
              triggerClass="w-full border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
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
                triggerClass="w-full border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
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
                triggerClass="w-full border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
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