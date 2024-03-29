﻿import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";
const userCore = {
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
};
const createUserSchema = z.object({
  ...userCore,
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
});

const createUserResponseSchema = z.object({
  userId: z.string({
    required_error: "UserId is required",
  }),
  ...userCore,
  accessToken: z.string(),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
  password: z.string(),
});
const isUserAuthSchema = z.object({
  accessToken: z.string(),
});
const isUserAuthResponseSchema = z.object({
  response: z.boolean(),
});
const loginResponseSchema = z.object({
  accessToken: z.string(),
});
export type CreateUserInput = z.infer<typeof createUserSchema>;

export type LoginInput = z.infer<typeof loginSchema>;
export type CheckAuthInput = z.infer<typeof isUserAuthSchema>;
export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
    isUserAuthSchema,
    isUserAuthResponseSchema,
  },
  { $id: "userSchema" }
);
