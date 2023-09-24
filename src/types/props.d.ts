import { TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { ReactNode, ReactElement } from "react";

export type DrawerAppBarProps = {
  children: ReactNode;
};

export type HideOnScrollProps = {
  children: ReactElement;
};

export type PageHeaderProps = {
  backgroundImage: StaticImageData;
  title: string;
  secondary?: string;
};

export type ParagraphProps = TypographyProps & {
  lineHeight?: number;
  children: ReactNode;
};

export type HeadingProps = TypographyProps & {
  children: ReactNode;
  headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};