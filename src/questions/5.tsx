import React, { useEffect, useState } from "react";

const items = [
  "Tatooine",
  "Alderaan",
  "Yavin IV",
  "Hoth",
  "Dagobah",
  "Bespin",
  "Endor",
  "Naboo",
  "Coruscant",
  "Kamino",
];

const Five = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<string[]>([]);


  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setItems(items);
      setLoading(false);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Five;
