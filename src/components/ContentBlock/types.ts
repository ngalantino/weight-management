import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        hyperlink?: string;
        textColor?: string;
      }
    | {
        title: string;
        color: string;
        hyperlink?: string;
        textColor?: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
