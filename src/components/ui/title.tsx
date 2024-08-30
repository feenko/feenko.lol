import { cn } from '@/lib/utils';

interface TitleProps extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  gradient?: boolean;
}

const Title: React.FC<TitleProps> = ({
  children,
  gradient,
  className,
  ...props
}) => {
  const baseStyle = 'text-5xl md:text-6xl font-bold mt-4';
  const gradientStyle =
    'bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent';

  return (
    <h1
      {...props}
      className={cn(baseStyle, gradient && gradientStyle, className)}
    >
      {children}
    </h1>
  );
};

export { Title };
