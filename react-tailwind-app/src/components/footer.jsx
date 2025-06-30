// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-auto">
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
}
