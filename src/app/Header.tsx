import React from 'react';
import { motion } from "framer-motion";
import Typical from 'react-typical';

const Header: React.FC = () => {
    return (
        <div className="flex flex-row">
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src="/logo.svg"
                alt="Two Good Co. Logo"
                className="absolute top-0 left-4 w-[100px] h-[100px]"
            />


            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-[50px] uppercase text-[8rem] xs:text-[10rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] 2xl:text-[20rem] text-gray-bold dark:text-white font-bold tracking-[-0.03em] leading-none">

                <Typical
                    steps={['Redefine', 2500, '', 200, 'the way', 2500, '', 200]}
                    loop={Infinity}
                    wrapper="span"
                />

            </motion.h1>
            {/*<motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="uppercase text-[8rem] xs:text-[10rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] 2xl:text-[20rem] font-extrabold dark:text-white tracking-[-0.03em] leading-none">
                <Typical
                    steps={['the way', 1000 , 'the way', 500]}
                    loop={Infinity}
                />
            </motion.h1>*/}

        </div>
    );
};

export default Header;
