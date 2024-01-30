import React, {
    useContext,
    useState,
    createContext,
    ReactNode,
    useMemo,
    SetStateAction,
    Dispatch,
    useEffect,
    useRef,
    MutableRefObject

  } from "react";
  
  // Define the context type
  interface PageContextType {
    page:string,
    setPage:Dispatch<SetStateAction<string>>
    handleScroll: (ev: Event) => void;
  }
  
  // Create the context
  const PageContext = createContext<PageContextType | undefined>(undefined);
  
  // Create the PokemonProvider component
  interface PageProviderProps {
    children: ReactNode;
  }
  
  export const PageContextProvider: React.FC<PageProviderProps> = ({
    children,
  }) => {
    // Initialize state
    const [page, setPage] = useState<string>('about');

    const handleScroll = (event?: Event) => {
      const sections = document.querySelectorAll('.section');
      let current: string | null = null;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;

        if (sectionTop <= 0 && sectionTop + sectionHeight > 15) {
          current = section.id;
        }
      });

      if (current !== null && current !==page) {
        window.history.replaceState({}, '', `#${current}`);
        if(current !== page) {
          setPage(current);
        }
      }
    };

    useEffect(() => {
      
      window.addEventListener('scroll',((event) => handleScroll(event)));
      handleScroll(); // Initial check
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);
  

    return (
      <PageContext.Provider value={{ page, setPage, handleScroll  }}>
        {children}
      </PageContext.Provider>
    );
  };
  
  export default PageContextProvider;
  
  // Create a hook to use the PokemonContext
  export function usePage() {
    const context = useContext(PageContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }
  