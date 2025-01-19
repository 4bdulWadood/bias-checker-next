"use client";
import React from "react";

const ReportModal = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2 style={styles.header}>Evaluate Unfairness</h2>
        <div style={styles.scrollableContainer}>
          <p style={styles.text}>
            <strong>Evaluation Summary:</strong> Unfair Assessment Detected
          </p>
          <p style={styles.text}>
            In reviewing the submitted essays, it becomes apparent that there
            are concerns regarding the fairness of the evaluation process for
            the essay authored by the random person. The analysis involves a
            comparison of the user's essay to those of their peers and an
            examination against the provided rubric.
          </p>
          <p style={styles.text}>
            <strong>Peer Comparison:</strong> Lack of Consistency
          </p>
          <p style={styles.text}>
            For instance, consider the user's essay, which delved deeply into
            historical context to support its argument. Despite this, peer
            essays evaluated with higher scores often lacked similar depth and
            rigor, raising questions about consistency in evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#f8f4ee",
    padding: "30px",
    borderRadius: "12px",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#e74c3c",
  },
  header: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  scrollableContainer: {
    backgroundColor: "#eef4fc",
    borderRadius: "8px",
    padding: "15px",
    maxHeight: "250px",
    overflowY: "auto",
    textAlign: "left",
    border: "1px solid #ddd",
  },
  text: {
    fontSize: "0.9rem",
    lineHeight: "1.5",
    marginBottom: "10px",
    color: "#333",
  },
};

export default ReportModal;
