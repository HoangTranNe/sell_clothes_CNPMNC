import React, { useState } from "react";
// import styled from "styled-components";
import styles from "../styles/user.module.css";

const Settings = () => {
  const [email, setEmail] = useState("emailis@private.com");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isProAccount, setIsProAccount] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleIsProAccountChange = (event) => {
    setIsProAccount(event.target.checked);
  };

  return (
    
    <div className={styles.settingsContainer}>
      <h1 className={styles.settingsHeading}>Account settings</h1>

      <div>
        <label className={styles.settingsLabel} htmlFor="email">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className={styles.settingsInput}
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label className={styles.settingsLabel} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={styles.settingsInput}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <label className={styles.settingsLabel} htmlFor="newPassword">
          New password
        </label>
        <input
          type="password"
          id="newPassword"
          className={styles.settingsInput}
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>

      <div>
        <label className={styles.settingsLabel} htmlFor="currentPassword">
          Current password
        </label>
        <input
          type="password"
          id="currentPassword"
          className={styles.settingsInput}
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
      </div>

      <div>
        <label className={styles.settingsLabel} htmlFor="isProAccount">
          Is Pro account
        </label>
        <input
          type="checkbox"
          id="isProAccount"
          className={styles.settingsCheckbox}
          checked={isProAccount}
          onChange={handleIsProAccountChange}
        />
      </div>

      <div>
        <button className={styles.settingsButton}>Save</button>
      </div>
    </div>
  );
};

export default Settings;
