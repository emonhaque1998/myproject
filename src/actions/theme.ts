"use server";
import { cookies } from "next/headers";

export const setThemeCookie = () => {
  const cookieStore = cookies();

  if (!cookieStore.has("theme")) {
    cookies().set("theme", "true", { secure: true });
  }

  return cookieStore.get("theme")?.value === "true" ? true : false;
};

export const checkThemeCookie = () => {
  const cookieStore = cookies();
  return cookieStore.get("theme")?.value === "true" ? true : false;
};

export const updateTheme = (theme: boolean) => {
  const cookieStore = cookies();
  cookies().set("theme", theme ? "true" : "false");
  return cookieStore.get("theme")?.value === "true" ? true : false;
};
