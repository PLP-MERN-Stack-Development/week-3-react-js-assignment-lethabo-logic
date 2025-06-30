// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
