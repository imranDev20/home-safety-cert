import { SvgIconComponent } from "@mui/icons-material";

export type Faq = {
  id: number;
  ques: string;
  ans: string;
};

export type Service = {
  id: number;
  name: string;
  Icon: SvgIconComponent;
  description: string;
  slug: string;
  startingPrice: number;
  packages: string[];

  detailedPackages: {
    name: string;
    price: number;
  }[];

  additionalPackage?: {
    name: string;
    price: number;
  }[];
};
