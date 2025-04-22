import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-primary/5 overflow-hidden relative bg-white dark:bg-gray-800">
      <CardHeader>
        <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary dark:bg-primary/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};

export default FeatureCard;
