import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (offset = 100) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        setInView(top < window.innerHeight - offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return [ref, inView];
};

export default useScrollAnimation;