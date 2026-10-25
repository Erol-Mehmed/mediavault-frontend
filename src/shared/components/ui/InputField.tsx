'use client';

import {
  ReactNode,
  ChangeEventHandler,
  ComponentPropsWithRef,
  useState,
} from 'react';

interface InputFieldProps extends Omit<
  ComponentPropsWithRef<'input'>,
  'type' | 'name' | 'value' | 'onChange' | 'placeholder'
> {
  label: string;
  icon?: ReactNode;
  eyeIcon?: ReactNode;
  name: string;
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  labelAction?: ReactNode;
  error?: string;
}

export default function InputField({
  label,
  icon,
  eyeIcon,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  ref,
  className,
  labelAction,
  error,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`input-field-wrapper ${className ?? ''}`}>
      <div className="label-wrapper">
        <label htmlFor={name}>{label}</label>

        {labelAction}
      </div>

      <div className="input-field-container">
        {icon}

        <input
          id={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />

        {type === 'password' && (
          <div className="eye-icon" onClick={handleTogglePassword}>
            {eyeIcon}
          </div>
        )}
      </div>

      {error && (
        <div id={`${name}-error`} className="input-field-error">
          {error}
        </div>
      )}
    </div>
  );
}
