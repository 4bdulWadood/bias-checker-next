"use client";
import React, { useState } from "react";
import LoginModal from "./components/LoginModal";
import EvaluateModal from "./components/EvaluateModal";
import ReportModal from "./components/ReportModal";

const App = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isEvaluateOpen, setEvaluateOpen] = useState(false);
  const [isReportOpen, setReportOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  
  const handleLogin = () => {
    setLoginOpen(false);
    setEvaluateOpen(true);
  };

  const handleCheckForBias = (feedbackData) => {
    console.log("Transitioning to ReportModal");
    setEvaluateOpen(false);
    setReportOpen(true);
    setFeedback(feedbackData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Essays, Our Impartiality</h1>
      <button
        style={styles.button}
        onClick={() => setLoginOpen(true)}
      >
        Check for Bias
      </button>

      {isLoginOpen && <LoginModal onLogin={handleLogin} onClose={() => setLoginOpen(false)} />}
      {isEvaluateOpen && <EvaluateModal onClose={() => setEvaluateOpen(false)} onSubmit={handleCheckForBias} />}
      {isReportOpen && <ReportModal feedback={feedback} onLogin={handleLogin} onClose={() => setReportOpen(false)} />}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#084c61",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#ffcc00",
    border: "none",
    borderRadius: "10px",
    padding: "15px 30px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
  },
};

export default App;
