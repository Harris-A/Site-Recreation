import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout } from "@radix-ui/themes";

export default function CalloutDemo() {
    return (
        <>
            <Box className="mobile-callout" py="8" style={{ borderRadius: "var(--radius-3)", marginTop: "var(--spacing-3)" }}>
                <Callout.Root>
                    <Callout.Icon>
                        <InfoCircledIcon />
                    </Callout.Icon>
                    <Callout.Text>
                        This is a Demo. No purchases can be made on this website.
                    </Callout.Text>
                </Callout.Root>
            </Box>

            <Box className="callout" py="8" style={{ borderRadius: "var(--radius-3)", marginTop: "var(--spacing-3)" }}>
                <Callout.Root>
                    <Callout.Icon>
                        <InfoCircledIcon />
                    </Callout.Icon>
                    <Callout.Text>
                        This is a Demo. No purchases can be made on this website.
                    </Callout.Text>
                </Callout.Root>
            </Box>
        </>
    );
}
