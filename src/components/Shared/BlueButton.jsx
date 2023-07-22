const BlueButton = ({ children, btnClass, ariaLabel, handleClick }) => {
  return (
    <button
      className={`blueBtn ${btnClass}`}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default BlueButton;
