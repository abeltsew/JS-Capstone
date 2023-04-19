const itemCounters = (items, itemCounter) => {
  if (items.length === 0) {
    return;
  }
  itemCounter.innerHTML = `Food(${items.length})`;
};

export default itemCounters;
