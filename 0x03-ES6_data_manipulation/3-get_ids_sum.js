export default function getStudentIdsSum(aray) {
  if (Array.isArray(aray)) {
    return aray.reduce((ma, el) => ma + el.id, 0);
  }
  return 0;
}
