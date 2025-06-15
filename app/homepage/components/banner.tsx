import React from 'react';


type BannerProps = {
    imageUrl?: string;
    videoUrl?: string;
    alt?: string;
    children?: React.ReactNode;
    className?: string;
};

const Banner: React.FC<BannerProps> = ({
    imageUrl,
    videoUrl,
    alt = 'Banner',
    children,
    className = '',
}) => {
    return (
        <div className={`relative w-full h-64 md:h-96 overflow-hidden ${className}`}>
            {videoUrl ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : imageUrl ? (
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={imageUrl}
                    alt={alt}
                />
            ) : (
                <div className="absolute inset-0 w-full h-full bg-gray-300" />
            )}
            <div className="relative z-10 flex items-center justify-center h-full">
                {children}
            </div>
            <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />
        </div>
    );
};

export default Banner;