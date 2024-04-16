/**
 * Author: Pablo West
 * 10-update_uniq_items.js
 */
export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw Error('Cannot process');
  }

  groceries.forEach((val, key) => {
    if (val === 1) {
      groceries.set(key, 100);
    }
  });

  return groceries;
}
