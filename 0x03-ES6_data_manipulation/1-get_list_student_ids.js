/**
 * Author: Graham S. Paul
 * 1-get_list_student_ids.js
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((items) => items.id);
  }
  return [];
}
