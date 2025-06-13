import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  isCompact?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  image,
  isCompact = false
}) => {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm border ${isCompact ? 'flex items-center gap-3' : ''}`}>
      <div className={`relative ${isCompact ? 'w-16 h-16 flex-shrink-0' : 'w-full h-32 mb-3'} rounded-lg overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className={isCompact ? 'flex-1' : ''}>
        <h3 className={`font-semibold text-purple-600 ${isCompact ? 'text-sm' : 'text-base'}`}>
          {title}
        </h3>
        <p className={`font-bold ${isCompact ? 'text-sm' : 'text-base'}`}>
          {price}
        </p>
        <p className={`text-gray-600 text-xs ${isCompact ? 'mt-1 line-clamp-2' : 'mt-2'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}