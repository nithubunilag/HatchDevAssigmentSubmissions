import { assert } from "https://deno.land/std@0.188.0/_util/asserts.ts";
import Task from "./Task.ts";

export function createNewTask() {
  console.log("\nNEW TASK");
  const title = prompt("Task title:"); assert(title);
  const description = prompt("Description?") || undefined;
  const deadline = prompt("Deadline (YYYY-MM-DD)?") || undefined;

  const newTask = new Task(title, description, deadline ? new Date(deadline) : undefined);
  return newTask;
}
export function getUserChoice(choices: string[], start: number = 1) {
  choices.forEach((choice, i) => {
    console.log(`${i + start}: ${choice}`);
  });
  const userInput = prompt("::") || "";
  try {
    const choice = parseInt(userInput);
    if (choice - start >= 0 && choice - 1 < choices.length) {
      return choice;
    }
    throw new Error("Invalid option");
  } catch (e) {
    console.error(e.message);
    return getUserChoice(choices);
  }
}
