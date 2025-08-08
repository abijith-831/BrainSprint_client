
// components/AuthRedirect.tsx
'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function AuthRedirect({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    if (user) {
      router.push("/problems"); 
    }
  }, [user, router]);

  if (user) return null; 

  return <>{children}</>;
}
