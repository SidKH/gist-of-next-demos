import { useEffect, useState } from "react";

export function NavLink({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPending(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return pending ? <div></div> : children;
}
