export default function Button({ children, className, textOnly, ...props }) {
  const buttonClasses = className;
  return (
    <button
      className={buttonClasses + " " + (textOnly ? "text-button" : "button")}
      {...props}
    >
      {children}
    </button>
  );
}
