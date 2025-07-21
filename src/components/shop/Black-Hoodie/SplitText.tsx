"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef, useState } from "react"

// Theme Imports
import { Heading } from "@radix-ui/themes"

export default function SplitText() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Only animate when element is visible and hasn't been animated yet
                    if (entry.isIntersecting && !hasAnimated) {
                        document.fonts.ready.then(() => {
                            // Hide the container until the fonts are loaded
                            container.style.visibility = "visible"

                            const { words } = splitText(
                                container.querySelector("h1")!
                            )

                            // Animate the words in the h1
                            animate(
                                words,
                                { opacity: [0, 1], y: [10, 0] },
                                {
                                    type: "spring",
                                    duration: 2,
                                    bounce: 0,
                                    delay: stagger(0.05),
                                }
                            )

                            setHasAnimated(true)
                        })
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: "0px 0px -10% 0px" // Start animation slightly before element is fully visible
            }
        )

        observer.observe(container)

        // Cleanup observer on unmount
        return () => {
            observer.disconnect()
        }
    }, [hasAnimated])

    return (
        <div 
            className="mt-10 mb-10" 
            ref={containerRef}
            style={{ visibility: "hidden" }} // Initially hidden until animation triggers
        >
            <Heading as="h1" color="gray" highContrast size="8" className="uppercase">
                Shop with purpose — every item helps create a better future..
            </Heading>
        </div>
    )
}