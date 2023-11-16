"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "styled-components";
import CartProvider from "@/providers/cart";
import { QueryClient, QueryClientProvider } from "react-query";

const montserrat = Montserrat({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <CartProvider>
              <StyledComponentsRegistry>
                <Header />
                {children}
                <Footer />
                <GlobalStyles />
              </StyledComponentsRegistry>
            </CartProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
