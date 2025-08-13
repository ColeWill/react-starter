export interface CardProps {
  /** Card title */
  title: string;
  /** Card content */
  content: string;
  /** Optional image URL */
  imageUrl?: string;
  /** Card variant */
  variant?: 'default' | 'bordered' | 'elevated';
  /** Optional click handler */
  onClick?: () => void;
}

export const Card = ({ title, content, imageUrl, variant = 'default', ...props }: CardProps) => {
  const baseClasses = 'rounded-lg p-4 bg-white transition-shadow max-w-sm';
  const variantClasses = {
    default: '',
    bordered: 'border border-gray-200',
    elevated: 'shadow-md hover:shadow-lg'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className='w-full h-40 object-cover rounded mb-3' />
      )}
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
        <p className='text-sm text-gray-600 leading-relaxed'>{content}</p>
      </div>
    </div>
  );
};
