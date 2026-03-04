import emailjs from "@emailjs/browser";

const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> => {
  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      },
      publicKey,
    );

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: (error as Error)?.message || "Something went wrong",
    };
  }
};
