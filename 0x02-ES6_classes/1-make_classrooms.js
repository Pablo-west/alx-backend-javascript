import ClassRoom from './0-classroom';

/**
 * Author - Graham S. Paul
 * 1-make_classrooms.js
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
