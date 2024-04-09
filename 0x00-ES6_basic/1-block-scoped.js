/* eslint-disable */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskInner = true; // Use a different variable name to avoid shadowing
    const task2Inner = false; // Use a different variable name to avoid shadowing
    return [taskInner, task2Inner];
  }

  return [task, task2];
}

