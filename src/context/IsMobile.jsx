import { createContext, useEffect, useState, useContext } from "react";

const IsMobileContext = createContext();

export function ScreenSizeProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <IsMobileContext.Provider
      value={{
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </IsMobileContext.Provider>
  );
}

export const useIsMobileContext = () => {
  return useContext(IsMobileContext);
};
