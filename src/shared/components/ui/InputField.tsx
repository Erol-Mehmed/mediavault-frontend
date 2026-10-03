'use client';

import { ChangeEvent, useState } from 'react';

interface InputFieldProps {
  icon?: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  icon,
  name,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-field-wrapper">
      <div className="input-field-container">
        {icon && <div className="icon">{icon}</div>}

        <input
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />

        {type === 'password' && (
          <div className="icon" onClick={handleTogglePassword}>
            {showPassword ? 'open' : 'closed'}
          </div>
        )}
      </div>
    </div>
  );
}
