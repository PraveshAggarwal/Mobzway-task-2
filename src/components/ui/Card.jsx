export default function Card({ children, className = '', hover = false, ...props }) {
  const baseStyles = 'bg-(--color-card) rounded-sm overflow-hidden';
  const hoverStyles = hover ? 'transition-all duration-300 hover:scale-105 cursor-pointer' : '';
  const shadowStyles = 'shadow-[var(--shadow-card)]';
  const hoverShadowStyles = hover ? 'hover:shadow-[var(--shadow-card-hover)]' : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${shadowStyles} ${hoverShadowStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
