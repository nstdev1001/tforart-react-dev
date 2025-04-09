import { z } from "zod";

export const emailSchema = z.object({
  name: z
    .string()
    .min(1, "Họ và tên là bắt buộc.") // Ensure the field is not empty
    .max(100, "Họ và tên không được vượt quá 100 ký tự."),
  email: z.string().optional(),
  phoneNumber: z
    .string()
    .min(1, "Số điện thoại là bắt buộc.") // Ensure the field is not empty
    .regex(/^[0-9]{10,15}$/, "Số điện thoại không hợp lệ."), // Validate phone number format
  budget: z
    .string()
    .max(50, "Chi phí dự kiến không được vượt quá 50 ký tự.") // Validate max length
    .optional(), // Make the field optional
  text: z
    .string()
    .min(1, "Thông tin chi tiết về dự án là bắt buộc.") // Ensure the field is not empty
    .max(1000, "Thông tin chi tiết không được vượt quá 1000 ký tự."),
  date: z
    .string()
    .min(1, "Ngày thực hiện dự án là bắt buộc.") // Ensure the field is not empty
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Ngày thực hiện dự án phải có định dạng dd/MM/yyyy."
    ),
});
