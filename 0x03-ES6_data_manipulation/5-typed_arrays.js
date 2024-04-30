export default function createInt8TypedArray(length, position, value) {
  const bu = new ArrayBuffer(length);
  const i = new Int8Array(bu);
  for (let j = 0; j < i.length; j += 1) {
    i[j] = 0;
  }
  i[position] = value;
  if (i[position] === undefined) throw new Error('Position outside range');
  return new DataView(bu);
}
