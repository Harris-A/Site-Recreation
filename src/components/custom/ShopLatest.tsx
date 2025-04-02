import {Heading, Text} from '@radix-ui/themes'

export default function ShopLatest () {
    return (
        <>
            <h1 className="tracking-in-expand-fwd-bottom shop-heading px-16 uppercase text-[6rem] text-center leading-none font-extrabold tracking-tighter mb-6 dark:text-[#f6fef4b0]">discover the best</h1>
            <div className="tracking-in-expand-fwd-bottom m-auto flex text-center justify-center mb-6 px-16">
                <Text size="5" color="gray"><span>We create high-quality, sustainable, and luxurious kitchen essentials—cookware, linens, candles, and more. Everything designed to bring warmth, comfort, and a sense of home to your cooking space. The best part? Every purchase has the power to change a life.</span></Text>
            </div>
            <div className="flex items-baseline w-full md:px-16 mt-10 md:mb-4">
                <Heading color="gray" className="capitalize" size="7">the latest. <span className="font-medium">check out what's new right now.</span></Heading>
            </div>
        </>
    )
}

