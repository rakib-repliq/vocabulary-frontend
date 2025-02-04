import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Trophy, Clock } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Structured Learning',
      description:
        'Follow our carefully designed curriculum for optimal progress',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from qualified native speakers and language experts',
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description:
        'Track your progress with our comprehensive achievement system',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description:
        'Learn at your own pace with 24/7 access to course materials',
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Language Courses For Professionals
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Our qualified and experienced language trainers created special
            programmes to meet your specific needs.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Now!
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of learning with our comprehensive language
              programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
