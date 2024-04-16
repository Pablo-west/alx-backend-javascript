/**
 * Author: Graham S. Paul
 * 2-get_students_by_loc.js
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((items) => items.location === city);
  }
  return [];
}
