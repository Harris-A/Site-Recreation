import {Box, Section, Grid, Heading, Link, IconButton} from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import {TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import {TooltipArrow, TooltipPortal} from "@radix-ui/react-tooltip";

const Footer = () => {
    return (
        <div className="footer border-t-2 border-gray-300 dark:border-white text-center w-full pt-8 pb-8 px-16 m-auto">
            <Section size="1">
                <Grid columns="3" gap="3" width="auto">
                    <div className="footer-social">
                        <Heading size="2" weight="medium" color="gray" className="uppercase text-left">talk to us</Heading>

                        <div className="social-icons flex gap-2 mt-2 hover:cursor-pointer">
                            <Tooltip.Provider>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        <IconButton className="IconButton">
                                            <TwitterLogoIcon width="25" height="25"/>
                                        </IconButton>
                                    </Tooltip.Trigger>
                                    <TooltipPortal>
                                        <Tooltip.Content className="tooltip-content" sideOffset={5}>
                                            See us on Twitter
                                            <Tooltip.Arrow className="tooltip-arrow" />
                                        </Tooltip.Content>
                                    </TooltipPortal>
                                </Tooltip.Root>
                            </Tooltip.Provider>

                            <Tooltip.Provider>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        <IconButton className="IconButton bg-white">
                                            <InstagramLogoIcon width="25" height="25"/>
                                        </IconButton>
                                    </Tooltip.Trigger>
                                    <TooltipPortal>
                                        <Tooltip.Content className="tooltip-content" sideOffset={5}>
                                            See us on Instagram
                                            <Tooltip.Arrow className="tooltip-arrow" />
                                        </Tooltip.Content>
                                    </TooltipPortal>
                                </Tooltip.Root>
                            </Tooltip.Provider>

                            <Tooltip.Provider>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        <IconButton className="IconButton">
                                            <LinkedInLogoIcon width="25" height="25" />
                                        </IconButton>
                                    </Tooltip.Trigger>
                                    <TooltipPortal>
                                        <Tooltip.Content className="tooltip-content" sideOffset={5}>
                                            See us on LinkedIn
                                            <Tooltip.Arrow className="tooltip-arrow" />
                                        </Tooltip.Content>
                                    </TooltipPortal>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </div>
                    </div>
                </Grid>
            </Section>

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