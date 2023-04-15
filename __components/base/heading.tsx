import { cva, VariantProps } from "class-variance-authority";

const headingClasses = cva(["font-bold"], {
  variants: {
    size: {
      medium: ["text-[42px]"],
      large: ["text-[72px]"],
    },
    font: {
      "open-sans": ["font-open"],
      poppins: ["font-pop"],
    },
  },
  defaultVariants: {
    size: "medium",
    font: "open-sans",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof headingClasses> {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text, font, className, size }) => {
  return <h3 className={headingClasses({ font, className, size })}>{text}</h3>;
};

export default Heading;
