"use server";

export type MyFormState = {
  success?: boolean;
  error?: string;
};

export async function myFormAction(prevState: MyFormState, formData: FormData) {
  const email = formData.get("email");
  if (!email) {
    return { error: "Email is required" };
  }
  return { success: true, email };
}