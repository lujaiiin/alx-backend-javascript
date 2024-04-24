export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // let
    let task2 = false; // let
  }

  return [task, task2];
}
