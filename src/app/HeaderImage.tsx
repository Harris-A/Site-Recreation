import React from 'react';
import { motion } from 'framer-motion';

const HeaderImage = () => {
    return (
            <div
                className="w-full h-[80vh] md:bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('/header-image.png')", // Replace with actual path
                }}
            >
            </div>
);
};

export default HeaderImage;