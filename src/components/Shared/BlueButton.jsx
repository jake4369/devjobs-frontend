const BlueButton = ({ children, btnClass, ariaLabel }) => {
  return (
    <button className={`blueBtn ${btnClass}`} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default BlueButton;
