"use client"

import { ThemeProvider as Provider } from "next-themes";

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider attribute="class" defaultTheme="dark">
            {children}
        </Provider>
    )
}