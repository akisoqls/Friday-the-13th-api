import { isFriday13th } from "./isFriday13th.ts";
import { Hono } from "@hono/hono";
import { getNextFriday13th, getRandomFriday13th } from "./nextFriday13th.ts";

const app = new Hono();

const headers = new Headers();
headers.set("Content-Type", "application/json");
headers.set("Charset", "UTF-8");
headers.set("Access-Control-Allow-Origin", "*");

app.get("/", () => {
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

app.get("/the-next-Friday-the-13th", () => {
  const today = new Date();

  const nextFriday = getNextFriday13th(today);
  const nextFridayString = `${nextFriday.getFullYear()}/${
    `${nextFriday.getMonth() + 1}`.padStart(2, "0")
  }/${`${nextFriday.getDate()}`.padStart(2, "0")}`;
  return new Response(
    JSON.stringify({
      nextFriday: nextFridayString,
    }),
    {
      status: 200,
      headers,
    },
  );
});

app.get("/the-random-Friday-the-13th", () => {
  const randomFriday13th = getRandomFriday13th();

  const randomFriday13thString = `${randomFriday13th.getFullYear()}/${
    `${randomFriday13th.getMonth() + 1}`.padStart(2, "0")
  }/${`${randomFriday13th.getDate()}`.padStart(2, "0")}`;
  return new Response(
    JSON.stringify({
      randomFriday13th: randomFriday13thString,
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
