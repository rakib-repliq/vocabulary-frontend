import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FooterNewsletter = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
      <p className="text-gray-400">
        Subscribe to our newsletter for the latest updates and learning
        resources.
      </p>
      <form className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
          required
        />
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      </form>
    </div>
  );
};
export default FooterNewsletter;
