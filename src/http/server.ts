import fastify from "fastify";
import { createPool } from "./routes/create-poll";
import { getPool } from "./routes/get-polls";
import { voteOnPool } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(cookie, {
  secret: "my-secret",
  hook: "onRequest",
});

app.register(createPool);
app.register(getPool);
app.register(voteOnPool);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running on port:3333");
});
