/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const homeCodeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export type THomeCode = z.infer<typeof homeCodeSchema>;

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

export const loginSchema = z.object({
  email: z.string().refine((val) => val.includes("@"), {
    message: "Invalid email address",
  }),

  password: z.string().min(6, "Password must be at least 6 characters"),

  rememberMe: z.boolean().optional(),
});

export type TLoginFormValue = z.infer<typeof loginSchema>;
