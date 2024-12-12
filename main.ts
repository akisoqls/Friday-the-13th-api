import { isFriday13th } from "./isFriday13th.ts";
import { Hono } from "@hono/hono";

const app = new Hono();

app.get("/", () => {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Charset", "UTF-8");
  headers.set("Access-Control-Allow-Origin", "*");

  const today = new Date();

  const isItFri13th = isFriday13th(today);
  return new Response(
    JSON.stringify({
      isFri13th: isItFri13th,
    }),
    {
      status: 200,
      headers,
    },
  );
});

Deno.serve({
  port: 3000,
}, app.fetch);
