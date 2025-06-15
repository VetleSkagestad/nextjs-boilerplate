import React from 'react';
import Image from 'next/image';


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
        <div className={`banner relative w-full h-54 md:h-82 overflow-hidden ${className}`}>
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
            <div className="absolute inset-0 w-full h-full" />
            )}
            <div className="relative z-10 flex items-center justify-center h-full">
            {children}
            </div>
            <div className="absolute inset-0 pointer-events-none" />
            <div
            className="absolute inset-4 flex items-center justify-center w-full h-full z-10"
            >
            <Image
                src="/gamedevsyndicate3_final_FINAL4.png"
                alt="GameDev Syndicate logo"
                width={600}
                height={80}
                priority
                className="max-w-full h-auto"
            />
            </div>
        </div>
    );
};

export default Banner;