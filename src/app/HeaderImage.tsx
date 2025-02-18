import React from 'react';
import { motion } from 'framer-motion';

const HeaderImage = () => {
    return (
        <div className="fixed bg-fixed bg-center bg-cover bg-no-repeat transition duration-300">
            <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/Teaser.png"
            alt="Header Image"
            width={2000}
            height={0}
            />
        </div>
);
};

export default HeaderImage;