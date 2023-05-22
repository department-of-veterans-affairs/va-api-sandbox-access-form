import classNames from 'classnames';
import { Field, ErrorMessage, useFormikContext, getIn } from 'formik';
import React, { ComponentPropsWithRef, FC, ReactNode, KeyboardEvent } from 'react';
import toHtmlId from '../../utils/toHtmlId';

type FieldProps = ComponentPropsWithRef<typeof Field>;

export interface TextFieldProps {
  className?: string;
  label: ReactNode;
  secondLabel?: string;
  name: string;
  required?: boolean;
  as?: FieldProps['as'];
  description?: ReactNode;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?: (event: KeyboardEvent) => void;
  innerRef?: React.RefObject<HTMLElement>;
  customFieldClass?: string;
  children?: ReactNode;
  maxLength?: number;
}

const TextField: FC<TextFieldProps> = ({
  description,
  className,
  label,
  secondLabel,
  name,
  required = false,
  type = 'text',
  placeholder,
  disabled = false,
  onKeyDown,
  customFieldClass,
  children,
  innerRef,
  maxLength,
  ...props
}) => {
  const { errors, touched } = useFormikContext();
  const shouldDisplayErrors =
    (!!errors[name] && !!touched[name]) || (!!getIn(errors, name) && !!getIn(touched, name));
  const containerClass = shouldDisplayErrors ? 'usa-input-error' : '';
  const labelClass = shouldDisplayErrors ? 'usa-input-error-label' : '';
  const validationClass = shouldDisplayErrors ? 'usa-input-error-message' : '';

  const idReadyName = toHtmlId(name);
  const descriptionId = description ? `${idReadyName}FormFieldDescription` : '';
  const errorId = `${idReadyName}FormFieldError`;
  const fieldId = `${idReadyName}FormField`;

  return (
    <div className={classNames('va-api-text-field', containerClass, className)}>
      <label htmlFor={fieldId} className={classNames('vads-u-margin-top--0', labelClass)}>
        {label}
        {secondLabel && <p className="second-label">{secondLabel}</p>}
        {required && (
          <span
            className={classNames('form-required-span', {
              'second-label-required-span': secondLabel,
            })}
          >
            (*Required)
          </span>
        )}
      </label>
      {description && (
        <div
          id={descriptionId}
          className={classNames('vads-u-color--gray', 'vads-u-margin-top--2')}
        >
          {description}
        </div>
      )}
      <span id={errorId} className={validationClass} role="alert">
        <ErrorMessage name={name} />
      </span>

      <Field
        id={fieldId}
        className={classNames('vads-u-margin-top--1', customFieldClass)}
        name={name}
        required={required}
        aria-describedby={`${errorId} ${descriptionId}`}
        aria-invalid={shouldDisplayErrors}
        type={props.as ? undefined : type}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={onKeyDown}
        innerRef={innerRef}
        maxLength={maxLength}
        {...props}
      />
      {children}
    </div>
  );
};

export default TextField;
