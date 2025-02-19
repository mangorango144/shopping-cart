import { useEffect, useState } from "react";

export function useCartQuantities() {
  const [cartQuantities, setCartQuantities] = useState(() => {
    const storedQuantities = sessionStorage.getItem("cartQuantities");
    return storedQuantities ? JSON.parse(storedQuantities) : {};
  });

  useEffect(() => {
    sessionStorage.setItem("cartQuantities", JSON.stringify(cartQuantities));
  }, [cartQuantities]);

  return { cartQuantities, setCartQuantities };
}
