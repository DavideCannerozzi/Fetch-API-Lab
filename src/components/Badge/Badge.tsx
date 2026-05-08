interface BadgeProps {
  name: string;
  color: string;
  onClick: () => void;
}

export default function Badge({ name, color, onClick }: BadgeProps) {
  return (
    <div className="w-full">
      <button
        className={`w-full h-12 cursor-pointer text-white`}
        style={{ backgroundColor: color }}
        onClick={onClick}
        aria-label={`Select category ${name}`}
      >
        {name}
      </button>
    </div>
  );
}
