import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import StoreProvider from "@/providers/StoreProvider";
import { store } from "@/redux-store/store";
import { Toaster } from "react-hot-toast";
import { fetchProjects } from "@/redux-store/slices/projectsSlice";

export const metadata: Metadata = {
  title: "Webtimes - #1 website agency",
  description: "Marketing Agency - Your web business partner!",
};

const toastOptions = {
  className: "",
  duration: 5000,
  style: {
    background: "#363636",
    color: "#fff",
  },

  success: {
    duration: 5000,
    theme: {
      primary: "green",
      secondary: "black",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await store.dispatch(fetchProjects());

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark bg-whiteClr dark:bg-backgroundClr-dark">
        <StoreProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />

            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              toastOptions={toastOptions}
            />
          </ThemeProvider>
        </StoreProvider>

        <div id="modal-root"></div>
      </body>
    </html>
  );
}
