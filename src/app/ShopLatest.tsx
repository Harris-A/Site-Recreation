import {Heading, Text} from '@radix-ui/themes'

export default function ShopLatest () {
    return (
        <>
            <div className="tracking-in-expand-fwd-bottom m-auto">
                <Text size="5" color="gray">We create high-quality, sustainable, and luxurious kitchen essentials—cookware, linens, candles, and more. Everything designed to bring warmth, comfort, and a sense of home to your cooking space. The best part? Every purchase has the power to change a life.</Text>
            </div>

            <div className="flex items-baseline w-full md:px-16 mt-4 md:mb-4">
                <Heading color="gray" className="capitalize text-2xl">the latest. <span className="font-medium">take a look at what's new right now.</span></Heading>
            </div>
        </>
    )
}

