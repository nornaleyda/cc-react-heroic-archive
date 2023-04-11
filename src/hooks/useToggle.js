import { useCallback, useState } from "react";

export function useToggle(initialValue) {
  const [booleanValue, setBooleanValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setBooleanValue((value) => !value);
  }, []);

  return [booleanValue, toggle];
}
