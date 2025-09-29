import React, { useState } from "react";

function SignIn() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const requestOtp = () => {
    fetch("http://localhost:5000/request-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email })
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        if (data.success) setStep(2);
      })
      .catch(() => setMessage("Server error"));
  };

  const verifyOtp = () => {
    fetch("http://localhost:5000/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp })
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        if (data.success) localStorage.setItem("userEmail", email);
      })
      .catch(() => setMessage("Server error"));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign In with OTP</h2>

      {step === 1 && (
        <div>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br /><br />
          <input type="text" placeholder="Phone (+91...)" value={phone} onChange={e => setPhone(e.target.value)} /><br /><br />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
          <button onClick={requestOtp}>Send OTP</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} /><br /><br />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}

      <p>{message}</p>
    </div>
  );
}

export default SignIn;
