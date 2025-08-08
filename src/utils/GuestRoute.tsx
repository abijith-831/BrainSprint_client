// components/GuestRoute.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function GuestRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    if (user) {
      router.push('/'); 
    }
  }, [user, router]);

  if (user) return null; 

  return <>{children}</>;
}
