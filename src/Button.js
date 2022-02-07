import './button.css'
export default function Button({ children, style, onClick, className }) {
  return (
    <>
      <button
        onClick={onClick}
        style={style}
        className={`${className} simple-btn`}
      >
        {children}
      </button>
    </>
  )
}