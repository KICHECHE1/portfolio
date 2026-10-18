import type { StaticImageData } from "next/image";
import portrait from "@/assets/Juma.jpeg";

export interface PersonalPortrait {
  src: string | StaticImageData;
  alt: string;
}

// Keep the owner's original asset in one place for both Home and About.
export const personalPortrait: PersonalPortrait = {
  src: portrait,
  alt: "Portrait of Juma Saidi",
};
