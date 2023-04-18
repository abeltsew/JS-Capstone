/**
 * @jest-environment jsdom
 */

import itemCounters from '../src/updatedItemCounter.js';

describe('itemCounters', () => {
  test('Counts an empty array', () => {
    const JsonItems = [];
    const itemCounter = document.createElement('li');
    itemCounters(JsonItems, itemCounter);
    expect(itemCounter.innerHTML).toBe('Food(0)');
  });
  test('Counts the correct items', () => {
    const itemCounter = document.createElement('li');
    const JsonItems = [
      {
        item_id: 29291,
        likes: 81,
      },
      {
        item_id: 29291,
        likes: 81,
      },
      {
        item_id: 29291,
        likes: 81,
      },
    ];
    itemCounters(JsonItems, itemCounter);

    expect(itemCounter.innerHTML).toBe('Food(3)');
  });
  test('Counts the correct items', () => {
    const itemCounter = document.createElement('li');
    const JsonItems = [
      {
        item_id: 29291,
        likes: 81,
      },
      {
        item_id: 29291,
        likes: 81,
      },
    ];
    itemCounters(JsonItems, itemCounter);

    expect(itemCounter.innerHTML).toBe('Food(2)');
  });
});
