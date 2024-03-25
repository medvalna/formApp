import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, findUserByEmail } from "./user.service";
import { CheckAuthInput, CreateUserInput, LoginInput } from "./user.schema";
import { verifyPassword } from "../../utils/hash";
import { jwt, server } from "../../app";
export async function registerUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) {
  const body = request.body;
  //console.log(body);
  try {
    const user = await createUser(body);
    return reply.code(201).send(user);
  } catch (e) {
    console.log(e);
    return reply.code(500).send(e);
  }
}
export async function loginHandler(
  request: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  const body = request.body;
  const user = await findUserByEmail(body.email);

  if (!user) {
    return reply.code(401).send({ message: "Invalid email" });
  }
  const correctPassword = verifyPassword({
    candidatePassword: body.password,
    salt: user.salt,
    hash: user.password,
  });

  if (correctPassword) {
    const { password, salt, ...rest } = user;
    return { accessToken: server.jwt.sign(rest) };
  } else {
    return reply.code(404).send({ message: "Invalid password" });
  }
}

export async function checkAuthHandler(
  request: FastifyRequest<{ Body: CheckAuthInput }>,
  reply: FastifyReply
) {
  try {
    const token = request.body.accessToken;
    //console.log(token);
    const decode = jwt.verify(token, "sasfaiofnaoisufhafnjwpof");
    if (decode.userId) {
      console.log(decode.userId);
      return reply.code(201).send(true);
    } else {
      return reply.code(201).send(false);
    }
  } catch (e) {
    console.log("error:", e);
    return reply.code(201).send(false);
  }

  // try {
  //   server.authenticate;
  //   return reply.code(201).send(true);
  // } catch (e) {
  //   console.log(e);
  //   return reply.code(201).send(false);
  // }
}
