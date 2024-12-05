"use server";

type ActionState = {
  message: string;
  payload?: FormData;
};

export async function updateProfile(
  _actionState: ActionState,
  formData: FormData
) {
  const data = {
    email: formData.get("email"),
    message: formData.get("message"),
  };

  if (!data.email || !data.message) {
    return {
      message: "Please fill in all fields",
      payload: formData,
    };
  }

  return {
    message: "Your message has been sent 🎉",
  };
}
