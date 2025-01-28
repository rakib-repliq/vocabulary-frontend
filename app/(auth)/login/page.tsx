import LoginForm from '@/components/auth/login-form';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Fingerprint } from 'lucide-react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center">
      <Card className="w-full max-w-sm md:max-w-lg ">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Fingerprint className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>

        <CardFooter>
          <div className="w-full text-center text-sm">
            <span className="text-muted-foreground">
              Don&apos;t have an account?
            </span>{' '}
            <Link
              href="/register"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Login;
