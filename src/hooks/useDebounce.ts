import { useState, useEffect } from 'react'

function useDebounce<T>(value: T, delay = 300): [T, { (value: T): void }] {
  const [debouncedValue, setDebouncedValue] = useState(value)
  // useEffect(() => {
  // console.log('click');
  const handler = (value: T) => {
    setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
  }
  return [debouncedValue, handler]
}
export default useDebounce
