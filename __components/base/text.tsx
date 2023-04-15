import { cva, VariantProps } from "class-variance-authority";

const textClasses = cva(["text-tertiary"], {
  variants: {
    size: {
      medium: ["text-lg"],
      large: ["text-2xl"],
    },
    font: {
      "open-sans": ["font-open"],
      poppins: ["font-pop"],
    },
    fontWeight: {
      normal: ["font-normal"],
      bold: ["font-bold"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
    },
  },
  defaultVariants: {
    size: "medium",
    font: "open-sans",
    fontWeight: "normal",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textClasses> {
  text: string;
}
const Text: React.FC<TextProps> = ({
  className,
  text,
  size,
  font,
  fontWeight,
}) => {
  return (
    <p className={textClasses({ size, font, fontWeight, className })}>{text}</p>
  );
};

export default Text;
