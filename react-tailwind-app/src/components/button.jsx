// src/components/Button.jsx
export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
