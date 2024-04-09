// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false; // changed var to let
  let task2 = true; // changed var to let

  if (trueOrFalse) {
    task = true; // no need to declare again, just assign
    task2 = false; // no need to declare again, just assign
  }

  return [task, task2];
}
