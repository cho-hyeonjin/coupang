import React, { useState } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import Icon from "../icon/Icon";

const Input = ({
  id,
  label,
  name = "",
  labelVisible,
  icon,
  email,
  password,
  placeholder = "",
  readOnly,
  disabled,
  value,
  error: errorProp, //  이런 식으로 쓰면 errorProp이름으로 error prop을 사용할 수 있음
  className = "",
  onChange,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkType = () => {
    if (email) {
      return "email";
    }

    if (password) {
      return isPasswordVisible ? "text" : "password";
    }

    return "text";
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const iconType = isPasswordVisible ? "show" : "hide";
  const iconLabel = `비밀번호 ${isPasswordVisible ? "표시" : "감춤"}`;

  return (
    // className={classNames(styles.foramControl, className)} 은 라이브러리 사용한 문법.
    // classNames=('test1', 'test2') → className='test1 test2'
    <div className={classNames(styles.formControl, className)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, labelVisible || styles.labelHidden)}
      >
        {label}
      </label>

      <div
        className={classNames(
          styles.inputWrapper,
          errorProp && styles.inputWrapperError
        )}
      >
        {icon ? <Icon type={icon} /> : null}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...restProps}
        />

        {password ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            disabled={disabled}
            icon={icon}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel} />
          </button>
        ) : null}
      </div>

      {errorProp && (
        <span role="alert" className={styles.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  );
};

export default Input;
