import React, { useState, useEffect } from 'react';


const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    const onScroll = (e: any) => {
      setLocation(e);
    }
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    }
  }, [])

  return [location, setLocation];
}

export default useLocation;