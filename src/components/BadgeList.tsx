import { categories } from "../data/data";
import Badge from "./Badge";
import { useApiContext } from "../hooks/useApiContext";

export default function BadgeList() {
  const { handleClick } = useApiContext();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
      {categories.map((cat) => (
        <Badge
          key={cat.id}
          name={cat.name}
          color={cat.color}
          onClick={() => handleClick(cat.name)}
          aria-label={`Select category ${cat.name}`}
        />
      ))}
    </div>
  );
}
