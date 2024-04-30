export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  let an = '';
  for (const val of set) {
    if (typeof val === 'string' && val.indexOf(startString) === 0) an = `${an}-${val.slice(startString.length)}`;
  }
  return an.slice(1);
}
