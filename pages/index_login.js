import React, { useState } from 'react';
import styles from '/styles/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const InputField = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const Button = ({ onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default function LoginPage({ Component, pageProps }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isChecked, setIsChecked] = useState(false);
  const [isUserExists, setIsUserExists] = useState(true);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };


  return (
    <div className={styles.login}>
      <div className={styles.frame}>
        <Image height={144} width={144} className={styles.rectangle} alt="Rectangle" src="/images/rectangle_2.png" />
        <p className={styles.text_wrapper}>Phong cách là cách bạn thể hiện bản thân</p>
      </div>
      <div className={styles.overlap_wrapper}>
        <div className={styles.overlap}>
          <div className={styles.div} />
          <div className={styles.group}>
            <button
              type="checkbox"
              id="rememberMe"
              className={styles.rectangle_2}
              onChange={handleCheckboxChange}
            />
            <div className={styles.text_wrapper_2}>
              Remember me
            </div>
            {isChecked && <p>Checkbox is checked</p>}
          </div>
          <div className={styles.text_wrapper_3}>
            <a href="#" className={styles.lost}>Lost your password ?</a>
          </div>

          <div className={styles.overlap_group_wrapper}>
            <div className={styles.overlap_group}>
              <InputField
                className={styles.usernameLogin}
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="User name"
              />
            </div>
          </div>
          <div className={styles.div_wrapper}>
            <div className={styles.overlap_group}>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
            </div>
          </div>
          {!isUserExists && <p>User không tồn tại</p>}
          <div className={styles.text_wrapper_5}>
            <button className={styles.overlap_2} onClick={handleSubmit} disabled={!formData.username || !formData.password}>
              <Link href="/index_main" className={styles.text_wrapper_6}>
                Sign in
              </Link>
            </button>
          </div>
          <div className={styles.group_3}>
            <button className={styles.overlap_group}>
              <a href="/index" className={styles.text_wrapper_7}>
                Create an account
              </a>
            </button>
          </div>
          <div className={styles.group_4}>
            <div className={styles.text_wrapper_8}>Login</div>
            <Image
              className={styles.line}
              height={144}
              width={500}
              alt="Line"
              src="/image/line.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

