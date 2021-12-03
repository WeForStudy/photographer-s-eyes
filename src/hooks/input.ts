import { useState, FormEvent } from 'react';
export function useInput(initialVal: string): [string, Function] {
  const [value, setValue ] = useState(initialVal);
  function handleValueChange(e: FormEvent<HTMLInputElement>) {
      const inputEvent: any = e.target;
      setValue(inputEvent.value);
  }
  return [value, handleValueChange];
}
