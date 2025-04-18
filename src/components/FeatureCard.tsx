
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-primary/5">
      <CardHeader>
        <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary dark:bg-primary/20">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
