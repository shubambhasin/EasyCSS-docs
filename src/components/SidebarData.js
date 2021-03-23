import React from "react";
import * as FaIcons from "react-icons/fa";
import { RiArrowDropUpLine, RiGridLine, RiArrowDropDownFill, RiNotificationBadgeFill } from "react-icons/ri";
import { GoAlert, GoCreditCard } from "react-icons/go";
import { GiPowerButton, GiPartyPopper} from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { GrTextAlignCenter } from "react-icons/gr";
import { FiNavigation } from "react-icons/fi";

export const SidebarData = [
  {
    title: "EaseCSS | Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
    // subNav: [
    //   {
    //     title: "Docs",
    //     path: "/docs",
    //     icon: "",
    //   },
    //   {
    //     title: "Why EaseCSS",
    //     path: "/why-ease-css",
    //     icon: "",
    //   },
    // ],
  },
  {
    title: "Avatar",
    path: "/avatar",
    icon: <CgProfile/>,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
  {
    title: "Alert",
    path: "/alert",
    icon: <GoAlert/>,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
  {
    title: "Badge",
    path: "/badge",
    icon: <RiNotificationBadgeFill />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
    subNav: [
      {
        title: "Badge with Icon",
        path: "/badge/badge-icon",
        icon: "",
      },
      {
        title: "Badge with Avatar",
        path: "/badge/badge-avatar",
        icon: "",
      },
    ],
  },
  {
    title: "Buttons",
    path: "/buttons",
    icon: <GiPowerButton />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,

    subNav: [
      {
        title: "Primary",
        path: "/button/btn-primary",
        hashlink: "/buttons/#primary-button",
        icon: "",
      },
      {
        title: "Secondary",
        path: "/button/btn-secondary",
        hashlink: "/buttons/#secondary-button",
        icon: "",
      },
      {
        title: "Button Sizes",
        path: "/button/btn-sizes",
        icon: "",
      },
      {
        title: "Button-filled",
        path: "/button/btn-filled",
        icon: "",
      },
      {
        title: "Outlined",
        path: "/button/btn-outlined",
        icon: "",
      },
      {
        title: "Icon button",
        path: "/button/btn-icon",
        icon: "",
      },
    ],
  },
  {
    title: "Card",
    path: "/card",
    icon: <GoCreditCard />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
    subNav: [
      {
        title: "Card with Badges",
        path: "/card/card-badge",
        icon: "",
      },
      {
        title: "Card with dismiss",
        path: "/card/card-dismiss",
        icon: "",
      },
      {
        title: "Card with text overlay",
        path: "/card/card-text-overlay",
        icon: "",
      },
      {
        title: "Card with text",
        path: "/card/card-with-text",
        icon: "",
      },
      {
        title: "Vertical card",
        path: "/card/vertical-card",
        icon: "",
      },
      {
        title: "Horizontal Cards",
        path: "/card/card-horizontal",
        icon: "",
      },
      {
        title: "Card with shadow",
        path: "/card/card-with-shadow",
        icon: "",
      },
    ],
  },
  {
    title: "Image",
    path: "/images",
    icon: <FaIcons.FaImage/>,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
    subNav: [
      {
        title: "Responsive image",
        path: "/images/responsive-image",
        icon: "",
      },
      {
        title: "Round Images",
        path: "/images/round-images",
        icon: "",
      },
    ],
  },
  {
    title: "Input",
    path: "/input",
    icon: <GrTextAlignCenter />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
    subNav: [
      {
        title: "Textbox",
        path: "/input/textbox",
        icon: "",
      },
      {
        title: "Input with validation",
        path: "/input/input-with-validation",
        icon: "",
      },
    ],
  },
  {
    title: "Lists",
    path: "/lists",
    icon: <FaIcons.FaListUl />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
  {
    title: "Navigation",
    path: "/navigation",
    icon: <FiNavigation />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
    subNav: [
      {
        title: "Desktop",
        path: "/navigation/desktop",
        icon: "",
      },
      {
        title: "Submenus",
        path: "/navigation/submenus",
        icon: "",
      },
      {
        title: "Hamburger",
        path: "/navigation/hamburger",
        icon: "",
      },
    ],
  },
  {
    title: "Modal",
    path: "/modal",
    icon: <GiPartyPopper />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
  {
    title: "Ratings",
    path: "/ratings",
    icon: <FaIcons.FaStar/>,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
  {
    title: "Sliders",
    path: "/slider",
    icon: <FaIcons.FaSlidersH/>,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
  {
    title: "Simplified Grids",
    path: "/simplified-grids",
    icon: <RiGridLine />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
  {
    title: "Text Utilities",
    path: "/text-utilities",
    icon: <FaIcons.FaTextHeight />,
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
    subNav: [
      {
        title: "Heading",
        path: "/text-utilities/heading",
        icon: "",
      },
      {
        title: "Small text",
        path: "/text-utilities/small-text",
        icon: "",
      },
      {
        title: "Gray text",
        path: "/text-utilities/gray-text",
        icon: "",
      },
      {
        title: "Small text",
        path: "/text-utilities/center-text",
        icon: "",
      },
    ],
  },
  {
    title: "Toast / notifier",
    path: "/toast-notifier",
    icon: "",
    iconClosed: <RiArrowDropDownFill size={28} />,
    iconOpened: <RiArrowDropUpLine size={28} />,
  },
];
