import { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  icon: LucideIcon;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export const PageHeader = ({
  title,
  icon: Icon,
  buttonLabel,
  onButtonClick,
}: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <Icon className="w-6 h-6" />
        {title}
      </h1>
      {buttonLabel && (
        <button
          onClick={onButtonClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};
