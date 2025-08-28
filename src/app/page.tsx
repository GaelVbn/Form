"use client";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword, rememberMe });
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">
          <b>Repeat Password</b>
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Repeat Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            style={{ marginBottom: "15px" }}
          />
          Remember me
        </label>

        <p>
          By creating an account you agree to our{" "}
          <a href="#" style={{ color: "dodgerblue" }}>
            Terms & Privacy
          </a>
          .
        </p>

        <div className={styles.clearfix}>
          <button type="button" className={styles.cancelbtn}>
            Cancel
          </button>
          <button id="signup-button" type="submit" className={styles.signupbtn}>
            Sign Up
          </button>
        </div>
        {submitted && <div id="confirmation-message">Inscription réussie</div>}
      </form>
    </div>
  );
}
