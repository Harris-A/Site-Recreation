import { Box, Link} from "@radix-ui/themes";

const Footer = () => {
    return (
        <div className="footer border-t-2 border-gray-300 dark:border-white text-center w-full pt-8 pb-8 m-auto">

            <Box width="100px" height="100px">
                <ul>
                    <li><Link href="#" color="gray">Facebook</Link></li>
                    <li><Link href="#" color="gray">Instagram</Link></li>
                    <li><Link href="#" color="gray">Twitter</Link></li>
                    <li><Link href="#" color="gray">LinkedIn</Link></li>
                    <li><Link href="#" color="gray">YouTube</Link></li>
                </ul>
            </Box>

            <p className="container text-black dark:text-[#f6fef4b0] m-auto text-xs">We are honored to call this land home and to continue the long-standing tradition of gathering around food, a practice that First </p>
            <p className="container text-black dark:text-[#f6fef4b0] m-auto text-xs">Nations peoples have nurtured for thousands of years. As we stand on this unceded land, we acknowledge the First Nations peoples as its original custodians and recognize their enduring connection to the land,</p>
            <p className="container text-black dark:text-[#f6fef4b0] m-auto text-xs">waters, sky, and community. We pay our deepest respects to Elders past, present, and emerging, who carry the wisdom, traditions, and hopes of Aboriginal and Torres Strait Islander peoples. This always was, and always will be, Aboriginal land.</p>
        </div>
    );
};
export default Footer;