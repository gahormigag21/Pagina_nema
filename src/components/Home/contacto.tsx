import { Horario } from "../Sections/Horario";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const ContactPage = () => (
  <div
    id="contacto"
    className="min-h-[900px] max-h-screen flex items-center justify-center py-10 mt-16 "
  >
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0 z-1">
      <b className="text-muted-foreground">Contactanos</b>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
        Hablemos de tu próximo proyecto
      </h2>
      <p className="mt-3 text-base sm:text-lg">
        Estamos listos para brindarte soluciones confiables y personalizadas.
      </p>
      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 dark:bg-foreground/80 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            <p className="my-2.5 text-muted-foreground">
              Envíanos tus ideas, estaremos atentos a tu mensaje.
            </p>
            <Link
              className="font-medium text-primary dark:text-accent"
              href="mailto:contacto@nemaingenieria.com"
            >
              contacto@nemaingenieria.com
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 dark:bg-foreground/80 text-primary rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Whatsapp</h3>
            <p className="my-2.5 text-muted-foreground">
              Escríbenos cuando lo necesites, te respondemos pronto..
            </p>
            <Link
              className="font-medium text-primary dark:text-accent"
              target="_blank"
              href="https://wa.me/573016564997"
              rel="noopener noreferrer"
            >
              Iniciar un nuevo chat
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 dark:bg-foreground/80 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Oficina</h3>
            <div className="my-2.5 text-muted-foreground">
              <p>
                Nuestras puertas están abiertas para recibirte.
                <br />
              </p>
              <Horario />
            </div>
            <Link
              className="font-medium text-primary dark:text-accent"
              href="https://maps.app.goo.gl/igt5zCsffw9KZsZg6"
              target="_blank"
            >
              Calle 135c #9a-27
              <br />
              Bogotá, Colombia
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 dark:bg-foreground/80 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Teléfono</h3>

            <div className="my-2.5 text-muted-foreground">
              <p>
                Hablemos directamente, con gusto resolveremos tus dudas.
                <br />
              </p>
              <Horario />
            </div>
            <Link className="font-medium text-primary dark:text-accent" href="#contacto">
              (601)4660483 - (601)4660487
              <br />
              301 6564997
            </Link>
          </div>
        </div>

        {/* Form */}
        <Card className="dark:before:bg-slate-900/80 border-none shadow-none max-h-[508px] bg-cubes before:bg-primary/30 relative">
          <CardContent className="p-6 md:p-10 z-1 my-auto">
            <form className="text-secondary dark:text-foreground">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-1.5 bg-input dark:bg-neutral/50 h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Apellidos</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-1.5 bg-input dark:bg-neutral/50 h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    autoComplete="email"
                    className="mt-1.5 bg-input dark:bg-neutral/50 h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-1.5 bg-input dark:bg-neutral/50 text-foreground shadow-none max-h-[120px]"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" name="checkbox" className="data-[state=checked]:bg-secondary data-[state=checked]:text-primary dark:data-[state=checked]:text-foreground" />
                  <Label htmlFor="acceptTerms">
                    You agree to our{" "}
                    <Link href="#" className="underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full bg-secondary dark:bg-primary text-accent-foreground  dark:text-foreground hover:bg-accent dark:hover:bg-accent dark:hover:text-accent-foreground" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default ContactPage;
