import { z } from "@hono/zod-openapi";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  fullName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const UsersSchema = z.array(UserSchema);

export const UserIdParamSchema = z.object({
  id: z.string(),
});
export const RegisterUserSchema = z.object({
  username: z.string(),
  email: z.string(),
  fullName: z.string(),
  password: z.string(),
});

export const RegisterUserSchema = z.object({
  username: z.string(),
  email: z.string(),
  fullName: z.string(),
  password: z.string(),
});
