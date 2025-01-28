import RegisterForm from '@/components/auth/register-form';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

const Register = () => {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center">
      <Card className="w-full max-w-sm md:max-w-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <UserPlus className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold">
            Create an account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <div className="w-full text-center text-sm">
            <span className="text-muted-foreground">
              Already have an account?
            </span>{' '}
            <Link
              href="/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Register;
