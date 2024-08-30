import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...props
}) => {
  variant = variant || 'primary';
  size = size || 'md';

  const baseStyle = 'rounded-md focus:outline-none transition duration-200';

  const variantStyle: Record<ButtonVariant, string> = {
    primary: 'bg-white text-black hover:bg-neutral-300',
    secondary:
      'bg-black text-white border border-neutral-800 hover:bg-neutral-950',
  };

  const sizeStyle: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-1.5 text-base',
    lg: 'px-5 py-2 text-lg',
  };

  return (
    <button
      {...props}
      className={cn(
        baseStyle,
        variantStyle[variant],
        sizeStyle[size],
        props.className,
      )}
    >
      {children}
    </button>
  );
};

export { Button };
