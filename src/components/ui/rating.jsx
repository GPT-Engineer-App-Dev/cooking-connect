import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const Rating = ({ value = 0, readOnly = false, onChange }) => {
  const [rating, setRating] = useState(value);

  const handleClick = (index) => {
    if (!readOnly) {
      setRating(index + 1);
      if (onChange) {
        onChange(index + 1);
      }
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-5 w-5 cursor-pointer",
            index < rating ? "text-yellow-500" : "text-gray-300",
            readOnly && "cursor-default"
          )}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};