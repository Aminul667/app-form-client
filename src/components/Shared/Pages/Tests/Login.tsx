"use client";

import { AppForm } from "@/components/app-form/app-form";
import AppInputField from "@/components/app-form/fields/app-input-field";
import { Button } from "@/components/ui/button";
import { homeCodeSchema, THomeCode } from "@/schema/example.schema";

const SimpleForm = () => {
  const onSubmit = (data: THomeCode) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="max-w-xl m-auto">
      <AppForm<THomeCode>
        schema={homeCodeSchema}
        onSubmit={onSubmit}
        className="px-6 pb-6 space-y-4"
      >
        {({ register, formState: { errors } }) => (
          <>
            <AppInputField
              name="firstName"
              type="text"
              register={register}
              errors={errors}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </>
        )}
      </AppForm>
    </div>
  );
};

export default SimpleForm;
