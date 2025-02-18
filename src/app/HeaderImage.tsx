import React from 'react';
import { motion } from 'framer-motion';

const HeaderImage = () => {
    return (
            <div
                className="w-full h-[80vh] bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('/Teaser.png')", // Replace with actual path
                }}
            >
            </div>
);
};

export default HeaderImage;