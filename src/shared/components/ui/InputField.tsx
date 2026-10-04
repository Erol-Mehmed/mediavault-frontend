'use client';

import { ChangeEvent, ReactNode, useState } from 'react';

interface InputFieldProps {
  label: string;
  icon?: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelAction?: ReactNode;
}

export default function InputField({
  label,
  icon,
  name,
  type,
  placeholder,
  value,
  onChange,
  className,
  labelAction,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`input-field-wrapper ${className}`}>
      <div className="label-wrapper">
        <label htmlFor={name}>{label}</label>

        {labelAction}
      </div>

      <div className="input-field-container">
        {icon && <div className="icon">{icon}</div>}

        <input
          id={name}
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
