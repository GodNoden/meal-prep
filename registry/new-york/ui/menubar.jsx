"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function MenubarMenu({ ...props }) {
    return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }) {
    return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }) {
    return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }) {
    return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }) {
    return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef(({ className, ...props }, ref) => (
    <MenubarPrimitive.Root
        ref={ref}
        className={cn(
            "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
            className
        )}
        {...props}
    />
));
if (MenubarPrimitive.Root && typeof MenubarPrimitive.Root === "object") {
    Menubar.displayName = MenubarPrimitive.Root.displayName || "Menubar";
}

const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            className
        )}
        {...props}
    />
));
if (MenubarPrimitive.Trigger && typeof MenubarPrimitive.Trigger === "object") {
    MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName || "MenubarTrigger";
}

const MenubarSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
));
if (MenubarPrimitive.SubTrigger && typeof MenubarPrimitive.SubTrigger === "object") {
    MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName || "MenubarSubTrigger";
}

const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => (
    <MenubarPrimitive.SubContent
        ref={ref}
        className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
            className
        )}
        {...props}
    />
));
if (MenubarPrimitive.SubContent && typeof MenubarPrimitive.SubContent === "object") {
    MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName || "MenubarSubContent";
}

const MenubarContent = React.forwardRef(
    ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
        <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content
                ref={ref}
                align={align}
                alignOffset={alignOffset}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
                    className
                )}
                {...props}
            />
        </MenubarPrimitive.Portal>
    )
);
if (MenubarPrimitive.Content && typeof MenubarPrimitive.Content === "object") {
    MenubarContent.displayName = MenubarPrimitive.Content.displayName || "MenubarContent";
}

const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
if (MenubarPrimitive.Item && typeof MenubarPrimitive.Item === "object") {
    MenubarItem.displayName = MenubarPrimitive.Item.displayName || "MenubarItem";
}

const MenubarCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.CheckboxItem>
));
if (MenubarPrimitive.CheckboxItem && typeof MenubarPrimitive.CheckboxItem === "object") {
    MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName || "MenubarCheckboxItem";
}

const MenubarRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Circle className="h-4 w-4 fill-current" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.RadioItem>
));
if (MenubarPrimitive.RadioItem && typeof MenubarPrimitive.RadioItem === "object") {
    MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName || "MenubarRadioItem";
}

const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Label
        ref={ref}
        className={cn(
            "px-2 py-1.5 text-sm font-semibold",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
if (MenubarPrimitive.Label && typeof MenubarPrimitive.Label === "object") {
    MenubarLabel.displayName = MenubarPrimitive.Label.displayName || "MenubarLabel";
}

const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-muted", className)}
        {...props}
    />
));
if (MenubarPrimitive.Separator && typeof MenubarPrimitive.Separator === "object") {
    MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName || "MenubarSeparator";
}

const MenubarShortcut = ({ className, ...props }) => {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-muted-foreground",
                className
            )}
            {...props}
        />
    );
};
MenubarShortcut.displayName = "MenubarShortcut";

export {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarGroup,
    MenubarSub,
    MenubarShortcut,
};