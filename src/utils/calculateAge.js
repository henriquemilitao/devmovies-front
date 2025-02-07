export function calculateAge(birthdate, deathdate = null) {
  const birthDateObj = new Date(birthdate);
  const referenceDate = deathdate ? new Date(deathdate) : new Date();

  const isBirthdayPassed =
    referenceDate.getMonth() > birthDateObj.getMonth() ||
    (referenceDate.getMonth() === birthDateObj.getMonth() &&
      referenceDate.getDate() >= birthDateObj.getDate());

  const age =
    referenceDate.getFullYear() -
    birthDateObj.getFullYear() -
    (isBirthdayPassed ? 0 : 1);

  return age;
}
