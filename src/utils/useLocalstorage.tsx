import React, {useState, useEffect} from 'react'

const useLocalStorage = (propertyKey: string) => {
  const [lngState, setLngState] = useState(
    localStorage.getItem(propertyKey) || '',
  )

  useEffect(() => {
    localStorage.setItem(propertyKey, lngState)
  }, [propertyKey, setLngState])

  return [lngState, setLngState]
}

export default useLocalStorage
