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
    handleScroll: (ev: any) => void;
  }
  
  // Create the context
  export const PageContext = createContext<PageContextType>({} as PageContextType);
  
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
        // console.log('what is the section top and height', sectionHeight, sectionTop)

        if (sectionTop <= 0 &&  sectionHeight + sectionTop  > 15) {
          current = section.id;
        }
      });

      if (current !== null && current !== page) {
        window.history.replaceState({}, '', `#${current}`);
        if(current !== page) {
          setPage(current);
        }
      }
    };

    window.removeEventListener('scroll', handleScroll);
    useEffect(() => {
      
      // window.addEventListener('scroll',((event) => handleScroll(event)));
      handleScroll(); // Initial check
      
      // return () => {
      // };
    }, [handleScroll]);
  

    return (
      <PageContext.Provider value={{ page, setPage, handleScroll  }}>
        {children}
      </PageContext.Provider>
    );
  };
  
  export default PageContextProvider;
  
