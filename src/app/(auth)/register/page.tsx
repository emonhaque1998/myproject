"use client";
import HomeLayout from "@/components/frontend/layouts/HomeLayout";
import Light from "@/components/frontend/Light";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { registerSechma } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/actions/auth";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Resister() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const theme = useAppSelector((state) => state.theme.value);
  const environment = useAppSelector((state) => state.environment.value);

  const form = useForm<z.infer<typeof registerSechma>>({
    resolver: zodResolver(registerSechma),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confromPassword: "",
    },
  });

  const registerSubmit = (values: z.infer<typeof registerSechma>) => {
    startTransition(() => {
      register(values).then((data) => {
        if (data?.error) {
          toast({
            variant: "destructive",
            title: data.error,
            description: "There was a problem with your request.",
          });
        } else {
          toast({
            description: data.success,
          });
        }
      });
    });
  };

  return (
    <HomeLayout>
      {environment && <GoogleTagManager gtmId="G-3BRTFCYKXQ" />}
      <div className="container h-screen max-md:h-[100vh] w-full z-30 relative">
        <Light classProperty="-z-10" />
        <div className="flex justify-center items-center">
          <div className="max-md:hidden ring-offset-8 ring-8 ring-white rounded-[30px] ring-inset w-1/2 h-screen max-md:h-[100vh] bg-[url('https://images.unsplash.com/photo-1589095181425-c038b3871b6a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D')] bg-no-repeat bg-cover"></div>
          <div className="flex flex-col items-center w-1/2 max-md:w-full max-md:px-1 px-24 max-md:mt-16">
            <div className="w-full flex flex-col items-start gap-2 max-md:gap-1">
              <h2
                className={`text-2xl font-bold ${
                  theme ? "text-black" : "text-white"
                }`}
              >
                Welcome Back &#128075;
              </h2>
              <p
                className={`font-light ${
                  theme ? "text-black" : "text-white"
                } max-md:text-sm`}
              >
                Today is a new day. It&apos;s your day. You shape it. <br />
                Sign in to start managing your project.
              </p>
            </div>
            <div className="w-full mt-8 max-md:mt-2">
              <Form {...form}>
                <form
                  className="w-full"
                  onSubmit={form.handleSubmit(registerSubmit)}
                >
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-1">
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel
                                className={`${
                                  theme ? "text-black" : "text-white"
                                }`}
                              >
                                First Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  disabled={isPending}
                                  placeholder="Eman"
                                  type="text"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel
                                className={`${
                                  theme ? "text-black" : "text-white"
                                }`}
                              >
                                Last Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  disabled={isPending}
                                  placeholder="H."
                                  type="text"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              className={`${
                                theme ? "text-black" : "text-white"
                              }`}
                            >
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isPending}
                                placeholder="Example@gmail.com"
                                type="email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              className={`${
                                theme ? "text-black" : "text-white"
                              }`}
                            >
                              Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isPending}
                                placeholder="At last 8 Charecters"
                                type="password"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="confromPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              className={`${
                                theme ? "text-black" : "text-white"
                              }`}
                            >
                              Retype Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isPending}
                                placeholder="Same to first one"
                                type="password"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <button
                      type="submit"
                      className={`mt-2 text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      Sign Up
                    </button>
                    <p
                      className={`text-center text-sm ${
                        theme ? "text-black" : "text-white"
                      }`}
                    >
                      Already you have account?{" "}
                      <Link href="/login">Sign In</Link>
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className={`z-50 cursor-pointer bg-opacity-5 text-xl absolute flex justify-center items-center top-5 max-md:top-2 max-md:left-2 right-5 p-5 rounded-full w-14 h-14 ${
          theme ? "bg-black text-black" : "bg-white text-white"
        }`}
      >
        <IoHomeSharp />
      </Link>
    </HomeLayout>
  );
}
