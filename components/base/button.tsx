import { cva, VariantProps } from "class-variance-authority";

const buttonClasses = cva(
  [
    "font-semibold",
    "text-lg",
    "font-pop",
    "rounded-[32px] py-[18px] px-[48px]",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-primary", "text-white"],
        secondary: ["bg-secondary", "text-white"],
        white: ["bg-white", "text-secondary"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonClasses> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, variant, className }) => {
  return (
    <button className={buttonClasses({ variant, className })}>{text}</button>
  );
};

export default Button;
