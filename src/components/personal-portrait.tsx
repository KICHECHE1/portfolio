import Image from "next/image";
import { personalPortrait } from "@/lib/personal-profile";
import { cn } from "@/lib/utils";

export function PersonalPortrait({ className, sizes = "(max-width: 639px) 144px, (max-width: 1023px) 176px, 320px", preload = false }: {
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <figure className={cn("flex items-end gap-5 sm:gap-8 lg:block", className)}>
      <div className="relative aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary/50 sm:w-44 lg:w-full">
        <Image src={personalPortrait.src} alt={personalPortrait.alt} fill preload={preload}
          sizes={sizes} placeholder={typeof personalPortrait.src === "string" ? "empty" : "blur"} className="object-cover object-top" />
      </div>
      <figcaption className="min-w-0 pb-1 lg:mt-5 lg:pb-0">
        <p className="font-heading text-base font-semibold tracking-tight">Juma Saidi</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">Software Developer</p>
      </figcaption>
    </figure>
  );
}
