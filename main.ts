import { Server } from "https://deno.land/std@0.203.0/http/server.ts";
import { isFriday13th } from "./isFriday13th.ts";

const server = new Server({
  port: 3000,
  handler: (): Response => {
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
  },
});

await server.listenAndServe();
