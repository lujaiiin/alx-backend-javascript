export default function getStudentsByLocation(aray, city) {
  if (Array.isArray(aray)) {
    return aray.filter((elemnt) => elemnt.location === city);
  }
  return [];
}
