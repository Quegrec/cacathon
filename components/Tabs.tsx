type TabsProps = {
    options: string[];
    active?: string;
    onChange?: (option: string) => void;
  };
  
  export default function Tabs({ options, active, onChange }: TabsProps) {
    return (
      <div className="flex space-x-2 overflow-x-auto">
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              onClick={() => onChange?.(option)}
              className={`px-3 py-1 rounded-full text-sm ${
                isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
  