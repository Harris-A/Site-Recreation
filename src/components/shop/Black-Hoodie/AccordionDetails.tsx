import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

import {Heading, Text} from "@radix-ui/themes";

export default function AccordionDetails() {
  return (
    <Accordion.Root
      className="rounded-md bg-gray-50 dark:bg-gray-800 shadow-[0_2px_10px] shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
            <Heading as="h3" size="4" color="gray" highContrast className= "mb-2">
                Materials
            </Heading>
        </AccordionTrigger>
        <AccordionContent>
          85% organic, ring-spun combed cotton, 15% recycled polyester.
          <br />
          <br />
          350 GSM fabric - brushed, washed, light sueded.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
            <Heading as="h3" size="4" color="gray" highContrast className= "mb-2">
                Returns
            </Heading>
        </AccordionTrigger>
        <AccordionContent>
            <Text color="gray" highContrast size="3">We accept returns within 14 days of delivery. Items must be unused, in original condition and packaging.</Text>
          <br />
          <Text color="gray" highContrast size="3">Returns are not accepted for items that have been damaged or used in any way.</Text>
          <br />
            <br />
          <Text color="gray" highContrast size="4">Please contact us for more information.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Accordion.Item>,
  React.ComponentPropsWithoutRef<typeof Accordion.Item>
>(({ children, className, ...props }, ref) => (
  <Accordion.Item
    ref={ref}
    className={`mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b ${className || ''}`}
    {...props}
  >
    {children}
  </Accordion.Item>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, ref) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      ref={ref}
      className={`group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-white dark:bg-gray-700 px-5 text-[15px] leading-none text-gray-900 dark:text-gray-100 shadow-[0_1px_0] shadow-gray-200 dark:shadow-gray-600 outline-none hover:bg-lime-50 dark:hover:bg-lime-900/20 data-[state=open]:bg-lime-100 dark:data-[state=open]:bg-lime-900/30 transition-colors ${className || ''}`}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="h-4 w-4 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, ref) => (
  <Accordion.Content
    ref={ref}
    className={`overflow-hidden text-[15px] text-gray-700 dark:text-gray-300 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown bg-white dark:bg-gray-700 ${className || ''}`}
    {...props}
  >
    <div className="px-5 py-[15px] border-t border-lime-200 dark:border-lime-700">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export { AccordionItem, AccordionTrigger, AccordionContent };