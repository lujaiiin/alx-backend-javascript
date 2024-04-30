export default function getListStudentIds(aray) {
  if (Array.isArray(aray)) {
    return aray.map((elemnt) => elemnt.id);
  }
  return [];
}
