export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  const numItems = items.length;
  const PackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((PackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 1
          ? "You got everything. Ready to go!✈️"
          : `You have ${numItems} items on your list, and you've already packed
          ${PackedItems}(${percentage}%).`}
      </em>
    </footer>
  );
}
