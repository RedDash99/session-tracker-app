import { createPortal } from "react-dom"

const styles = {
  padding: "10px",
  position: "fixed",
  inset: "0",
  zIndex: 10,
  cursor: "pointer",
  backgroundColor: "rgba(16, 29, 47, 0.9)"
}

export default function PageOverlay({ onClose }) {
  return (
    createPortal(
      <div style={styles} onClick={onClose} title="Закрыть" aria-label="Закрыть"></div>,
      document.getElementById("modals-root")
    )
  )
}
