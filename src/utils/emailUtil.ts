import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
  } catch (error: any) {
    return {
      success: false,
      error: error?.text || "Something went wrong",
    };
  }
};
