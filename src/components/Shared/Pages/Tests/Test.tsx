
"use client";

import { AppForm } from "@/components/app-form/app-form";
import AppInputFieldArray from "@/components/app-form/fields/app-input-field-array";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

// Define a simple schema for testing the array field
const testSchema = z.object({
  tags: z
    .array(z.string().trim().min(1, "Tag cannot be empty or whitespace"))
    .min(1, "At least one tag is required"),

  numericTags: z
    .array(
      z.preprocess(
        (v) => (typeof v === "number" && Number.isNaN(v) ? undefined : v),
        z.number({ error: "Number is required" }),
      ),
    )
    .min(1, "At least one number is required"),
});

type TTest = z.infer<typeof testSchema>;

const Test = () => {
  const [formMethods, setFormMethods] = useState<UseFormReturn<TTest> | null>(null);

  const onSubmit = (data: TTest) => {
    console.log("Submitted data:", data);
    alert(`Text tags: ${data.tags.join(", ")}`);
  };

  const handleGetValues = () => {
    if (!formMethods) return;
    const values = formMethods.getValues();
    console.log("Current values:", values);
  };

  const handleReset = () => {
    if (!formMethods) return;
    formMethods.reset();
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">AppInputFieldArray Test</h1>
      
      <AppForm<TTest>
        schema={testSchema}
        onSubmit={onSubmit}
        onMethods={(methods) => setFormMethods(methods)}
        defaultValues={{ tags: [""], numericTags: [0] }}
      >
        {(methods) => (
          <div className="space-y-4">
            <AppInputFieldArray
              name="tags"
              control={methods.control}
              label="Text tags"
              placeholder="Enter a tag"
              errors={methods.formState.errors}
              minFields={1}
              addButtonText="Add Tag"
            />
            {/* example number list */}
            <AppInputFieldArray
              name="numericTags"
              control={methods.control}
              label="Numeric tags"
              placeholder="Enter a number"
              type="number"
              errors={methods.formState.errors}
              minFields={1}
              addButtonText="Add Number"
            />
            
            <div className="flex gap-2">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline" onClick={handleGetValues}>
                Get Values
              </Button>
              <Button type="button" variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </div>
        )}
      </AppForm>
    </div>
  );
};

export default Test;
