export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    const e = String(error);
    queue.push(e);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
