import { assertEquals } from "jsr:@std/assert";
import { isFriday13th } from "./isFriday13th.ts";

Deno.test("2024/12/20 is Friday, but not the 13th", () => {
  const theLastFridayThe13thOf2024 = new Date();
  theLastFridayThe13thOf2024.setFullYear(2024);
  theLastFridayThe13thOf2024.setMonth(11);
  theLastFridayThe13thOf2024.setDate(20);
  const result = isFriday13th(theLastFridayThe13thOf2024);
  assertEquals(result, false);
});

Deno.test("2024/12/15 is not Friday the 13th", () => {
  const theLastFridayThe13thOf2024 = new Date();
  theLastFridayThe13thOf2024.setFullYear(2024);
  theLastFridayThe13thOf2024.setMonth(11);
  theLastFridayThe13thOf2024.setDate(15);
  const result = isFriday13th(theLastFridayThe13thOf2024);
  assertEquals(result, false);
});

Deno.test("2024/12/13 is Friday the 13th", () => {
  const theLastFridayThe13thOf2024 = new Date();
  theLastFridayThe13thOf2024.setFullYear(2024);
  theLastFridayThe13thOf2024.setMonth(11);
  theLastFridayThe13thOf2024.setDate(13);
  theLastFridayThe13thOf2024.setHours(13);
  const result = isFriday13th(theLastFridayThe13thOf2024);
  assertEquals(result, true);
});
