import { useState } from "react";

export default function MyFilterButton(props: any) {
  const [selectedColor, setSelectedColor] = useState(
    "border-2 shadow-lg border-gray-100 bg-gray-100 text-center w-32 p-2 rounded-full text-sky-600 hover:border-sky-600 ease-out duration-300"
  );
    if (props.isActive) {
      setSelectedColor(
        "border-2 shadow-lg border-gray-100 bg-gray-100 text-center w-32 p-2 rounded-full text-sky-600 hover:border-sky-600 ease-out duration-300"
      );
      console.log(selectedColor);
    } else {
      setSelectedColor(
        "border-2 shadow-lg border-sky-600 bg-sky-600 text-center w-32 p-2 rounded-full text-gray-100"
      );
      console.log(selectedColor);
    }

  return (
    <button onClick={props.OnPress} className={selectedColor}>
    {props.title}
    </button>
  );
}
