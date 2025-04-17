import React from 'react';

interface NavButtonProps {
  text: string;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
}