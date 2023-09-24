import { StaticImageData } from "next/image";
import React from "react";

export type DrawerAppBarProps = {
  children: React.ReactNode;
};

export type HideOnScrollProps = {
  children: React.ReactElement;
};

export type PageHeaderProps = {
  backgroundImage: StaticImageData;
  title: string;
  secondary?: string;
};
