import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import theme from "../theme";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Effective Rent Analysis - by Cosmic Labs 🧪",
    description: "Created by Cosmic Labs 🧪",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <body className={inter.className}>{children}</body>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </html>
    );
}
