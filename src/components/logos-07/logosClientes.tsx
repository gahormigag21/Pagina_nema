import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo09,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
} from "@/components/logos-07/logos";
import Marquee from "@/components/ui/marquee";

const LogosClientes = () => {
  return (
    <div className="min-h-[600px] flex items-center justify-center px-6 my-20 dark:bg-foreground/45 dark:mx-60 dark:rounded-2xl ">
      <div className="overflow-hidden ">
        <p className="text-center text-xl font-medium">
          More than 2.2 million companies worldwide already trust us
        </p>

        <div className="mt-20 max-w-screen-lg space-y-8 ">
          <Marquee pauseOnHover className="[--duration:30s] [&_img]:mr-10">
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
          <Marquee
            pauseOnHover
            reverse
            className="[--duration:30s] [&_img]:mr-10"
          >
            <Logo09 />
            <Logo10 />
            <Logo11 />
            <Logo12 />
            <Logo13 />
            <Logo14 />
            <Logo15 />
            <Logo16 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LogosClientes;
