import Image from "next/image";
import { wrapWithLink } from "@/utils/wrapWithLink";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
}

interface FeatureCardsDivProps {
  heading: string;
  features: Feature[];
}

const FeatureCardsDiv = ({heading, features}: FeatureCardsDivProps) => {
  return (
    <section className="py-32">
      <div className="container max-w-8xl mx-auto my-0">
        <h2 className="text-3xl font-medium lg:text-4xl">{heading}</h2>
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {features.map((feature) =>
            wrapWithLink(
              feature.url,
              <div
                className="flex flex-col justify-between rounded-lg bg-primary/85 hover:scale-[1.1] child"
              >
                <div className="flex justify-between gap-10 border-b ">
                  <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                    <p className="text-xs text-primary-foreground">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-4xl text-primary-foreground">{feature.title}</h3>
                  </div>
                  <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                    <Image
                      width={300}
                      height={300}
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 text-primary-foreground md:p-8">
                  {feature.description}
                </div>
              </div>,
              feature.id // Pass key as a third argument to wrapWithLink
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsDiv;
