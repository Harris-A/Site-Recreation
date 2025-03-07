import {Box, Section, Grid, Heading, Tooltip, Link} from "@radix-ui/themes";
import {TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";

const Footer = () => {
    return (
        <div className="footer border-t-2 border-gray-300 dark:border-white text-center w-full pt-8 pb-8 m-auto">
            <Section size="1">
                <Grid columns="3" gap="3" width="auto">
                    <div className="footer-social">
                        <Heading size="2" weight="medium" color="gray" className="uppercase text-left">talk to us</Heading>
                        <div className="social-icons flex gap-2 mt-2">
                            <Tooltip content="See us on Twitter">
                                <Link href="#"><TwitterLogoIcon width="20" height="20" className="hover:text-black dark:hover:text-lime-100" /></Link>
                            </Tooltip>
                            <Tooltip content="See us on Instagram">
                                <Link href="#"><InstagramLogoIcon width="20" height="20" className="hover:text-black dark:hover:text-lime-100" /></Link>
                            </Tooltip>
                            <Tooltip content="See us on LinkedIn">
                                <Link href="#"><LinkedInLogoIcon width="20" height="20" className="hover:text-black dark:hover:text-lime-100"/></Link>
                            </Tooltip>
                        </div>
                    </div>
                </Grid>
            </Section>
            {/*<Section size="1">
                <Grid columns="1" gap="3" width="auto">
                    <Heading size="2" weight="medium" color="gray" className="uppercase text-right">talk to us</Heading>
                    <div className="footer-social flex gap-2">
                        <Tooltip content="See us on Twitter">
                            <Link href="#"><TwitterLogoIcon width="20" height="20" className="hover:text-black" /></Link>
                        </Tooltip>
                        <Tooltip content="See us on Instagram">
                            <Link href="#"><InstagramLogoIcon width="20" height="20" className="hover:text-black" /></Link>
                        </Tooltip>
                        <Tooltip content="See us on LinkedIn">
                            <Link href="#"><LinkedInLogoIcon width="20" height="20" className="hover:text-black"/></Link>
                        </Tooltip>
                    </div>
                </Grid>
            </Section>*/}
            <Box py="8" >
                <Section size="1">
                    <p className="container text-black dark:text-[#f6fef4b0] m-auto text-xs">We are honored to call this land home and to continue the long-standing tradition of gathering around food, a practice that First </p>
                    <p className="container text-black dark:text-[#f6fef4b0] m-auto text-xs">Nations peoples have nurtured for thousands of years. As we stand on this unceded land, we acknowledge the First Nations peoples as its original custodians and recognize their enduring connection to the land,</p>
                    <p className="container text-black dark:text-[#f6fef4b0] m-auto text-xs">waters, sky, and community. We pay our deepest respects to Elders past, present, and emerging, who carry the wisdom, traditions, and hopes of Aboriginal and Torres Strait Islander peoples. This always was, and always will be, Aboriginal land.</p>
                </Section>
            </Box>
        </div>
    );
};
export default Footer;