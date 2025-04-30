import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  url?: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface FeatureProps {
  badge: string;
  heading: string;
  description: string;
  tabs: Tab[];
}

const Feature = ({ badge, heading, description, tabs }: FeatureProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/65 p-6 lg:p-16">
            <div className="relative">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-start gap-20 lg:grid-cols-2 lg:gap-10"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {tab.content.description}
                    </p>
                    <Button className="mt-2.5 w-fit gap-2" size="lg">
                      <a href={tab.content.url}>
                        {tab.content.buttonText}
                      </a>
                    </Button>
                  </div>
                  <div className="relative h-[300px] w-full lg:h-[400px] flex justify-center items-center ">
                    <a href={tab.content.url} className="">
                      <Image
                        src={tab.content.imageSrc}
                        alt={tab.content.imageAlt}
                        className="h-auto w-auto rounded-xl object-cover"
                        width={400}
                        height={400}
                      />
                    </a>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Feature;
