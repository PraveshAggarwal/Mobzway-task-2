export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-sm cursor-pointer border-none outline-none";

  const variants = {
    primary:
      "bg-(--color-primary) text-black hover:bg-(--color-primary-light) shadow-sm hover:shadow-md",
    secondary:
      "bg-transparent text-(--color-text) border-2 border-(--color-primary) hover:bg-(--color-primary) hover:text-black",
    outline:
      "bg-transparent text-(--color-text) border border-(--color-border) hover:bg-(--color-card)",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
