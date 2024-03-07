"use client";
import { string, z } from "zod";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {};

const services = [
  "Web Design",
  "Landing Page",
  "Mobile App Design",
  "E-Commerce",
  "Branding",
  "Product Design",
  "App Development",
  "Web Development",
  "Social Media",
  "Design System",
  "General Enquiry",
] as const;

const prices = ["<5k", "$5-10k", "$10-20k", "$20-30k", "$50,000+"] as const;

// Create a union of literals from the services array
const serviceSchema = z.enum(services);

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .min(2, {
      message: "Name must be longer than 2 characters",
    })
    .max(50, {
      message: "Name cannot be longer than 50 characters",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(1, {
      message: "Email is required",
    })

    .max(50, {
      message: "Email cannot be longer than 50 characters",
    }),
  message: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .max(200, {
      message: "Message cannot be longer than 50 characters",
    }),
  services: z.array(serviceSchema).min(1, {
    message: "Please select a service you are interested in.",
  }),
  price: z.enum(prices, {
    errorMap: (issue, ctx) => ({
      message: `Please select a price range`,
    }),
  }),
  // .min(1, { message: "price sasa" }),
  // .refine((value) => prices.includes(value as any), {
  //   message: "Please select a price",
  // }),
});

export const QuoteForm = (props: Props) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Jethro Au",
      email: "galongau@gmail.com",
      message: "Hello World!",
      services: [],
      price: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ values });
    toast("We have received your enquiry!");
    // form.reset();
  }

  // Check if there are any errors
  const hasErrors = Object.keys(form.formState.errors).length > 0;

  return (
    <div className="py-16 font-workSans">
      <div className="container px-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-3xl space-y-16"
          >
            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <InterestSelector onValueChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="text-2xl h-auto rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-black/[0.5]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      {...field}
                      className="text-2xl rounded-none border-0 border-b focus-visible:ring-0 focus-visible:border-black/[0.5]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Tell us about your idea"
                      {...field}
                      className="text-2xl rounded-none focus-visible:ring-0 focus-visible:border-black/[0.5] resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <PriceSelector onValueChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {hasErrors && (
              <div>
                <FormMessage>
                  Please make sure you have all the fields entered correctly
                </FormMessage>
              </div>
            )}
            <Button
              type="submit"
              //   disabled={hasErrors}
              className={cn(
                `px-16 py-4 h-auto text-lg font-semibold`,
                hasErrors && "cursor-not-allowed"
              )}
            >
              Send Enquiry
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

const InterestSelector = ({
  onValueChange,
}: {
  onValueChange: (...event: any[]) => void;
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    onValueChange(selected);
  }, [selected]);

  return (
    <div>
      <h3 className="mb-5 text-2xl font-medium font-workSans text-black pb-6">
        I&apos;m interested in...
      </h3>
      <ul className="flex w-full max-w-[900px] flex-wrap gap-3 md:gap-5">
        {services.map((service, i) => (
          <Button
            key={i}
            type="button"
            onClick={() => {
              selected.includes(service)
                ? setSelected((prev) => prev.filter((i) => i !== service))
                : setSelected((prev) => [...prev, service]);
              // onValueChange();
            }}
            className={cn(
              `px-4 md:px-6 py-2 md:py-4 h-auto w-auto text-xl font-normal bg-white border border-black text-black rounded-full hover:bg-black hover:text-white`,
              selected.includes(service) && `bg-black text-white`
            )}
          >
            {selected.includes(service) && <Check className="w-4 h-4 mr-2" />}
            {service}
          </Button>
        ))}
      </ul>
    </div>
  );
};

const PriceSelector = ({
  onValueChange,
}: {
  onValueChange: (...event: any[]) => void;
}) => {
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    onValueChange(selected);
  }, [selected]);

  return (
    <div>
      <h3 className="mb-5 text-2xl font-medium font-sans text-black pb-6">
        Project Budget (USD)
      </h3>
      <ul className="flex w-full max-w-[900px] flex-wrap gap-3 md:gap-5">
        {prices.map((price, i) => (
          <Button
            key={i}
            type="button"
            onClick={() => {
              setSelected(price);
            }}
            className={cn(
              `px-4 md:px-6 py-2 md:py-4 h-auto w-auto text-xl font-normal bg-white border border-black text-black rounded-full hover:bg-black hover:text-white`,
              selected === price && `bg-black text-white`
            )}
          >
            {selected === price && <Check className="w-4 h-4 mr-2" />}
            {price}
          </Button>
        ))}
      </ul>
    </div>
  );
};
