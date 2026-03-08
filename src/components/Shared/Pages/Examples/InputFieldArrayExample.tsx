/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AppForm } from "@/components/app-form/app-form";
import AppInputFieldArray from "@/components/app-form/fields/app-input-field-array";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

// Define schema for testing the array field
const arrayFieldSchema = z.object({
  tags: z
    .array(
      z.string().trim().min(1, "Tag cannot be empty or whitespace")
    )
    .min(1, "At least one tag is required"),
  numericTags: z
    .array(
      z.union([z.string(), z.number()]).transform((v) => {
        if (typeof v === "number") return v;
        const s = v.trim();
        if (s === "") {
          throw new Error("Number is required");
        }
        const n = Number(s);
        if (isNaN(n)) {
          throw new Error("Must be a valid number");
        }
        return n;
      })
    )
    .min(1, "At least one number is required"),
});

type TArrayField = z.infer<typeof arrayFieldSchema>;

const InputFieldArrayExample = () => {
  const [formMethods, setFormMethods] = useState<UseFormReturn<TArrayField> | null>(null);

  const onSubmit = (data: TArrayField) => {
    console.log("Submitted data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  const handleGetValues = () => {
    if (!formMethods) return;
    const values = formMethods.getValues();
    console.log("Current values:", values);
    alert(JSON.stringify(values, null, 2));
  };

  const handleReset = () => {
    if (!formMethods) return;
    formMethods.reset();
  };

  return (
    <div className="bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden p-10 rounded-2xl">
      <AppForm<TArrayField>
        schema={arrayFieldSchema}
        onSubmit={onSubmit}
        onMethods={(methods) => setFormMethods(methods)}
        defaultValues={{ tags: [""], numericTags: [0] }}
        className="space-y-6"
      >
        {(methods) => (
          <>
            <AppInputFieldArray
              name="tags"
              control={methods.control}
              label="Text Tags *"
              placeholder="Enter a tag"
              errors={methods.formState.errors}
              minFields={1}
              addButtonText="Add Tag"
              containerClass="space-y-2"
              inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
              labelClass="text-sm font-medium"
            />

            <AppInputFieldArray
              name="numericTags"
              control={methods.control}
              label="Numeric Tags *"
              placeholder="Enter a number"
              type="number"
              errors={methods.formState.errors}
              minFields={1}
              addButtonText="Add Number"
              containerClass="space-y-2"
              inputClass="bg-white border-gray-500/30 focus:border-gray-700 focus:ring-gray-900/20"
              labelClass="text-sm font-medium"
            />

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleGetValues}
                className="border-gray-300"
              >
                Get Values
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="border-gray-300"
              >
                Reset
              </Button>
            </div>
          </>
        )}
      </AppForm>
    </div>
  );
};

export default InputFieldArrayExample;
