import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center w-full min-h-screen">
      <h1 className="text-4xl font-bold">Home</h1>
      <div className="flex items-center gap-x-4">
        <Button variant="outline">
          <Link href="/auth/login">Login Page</Link>
        </Button>
        <Button variant="outline">
          <Link href="/auth/register">Register Page</Link>
        </Button>
      </div>
    </div>
  );
}
