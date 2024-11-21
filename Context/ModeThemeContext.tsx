'use client'
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type Theme = 'dark' | 'light';
type ThemeContextType = {
    mode: Theme ,
    detectTheme : () => void
}
type ModeThemeContextProviderProps = {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ModeThemeContextProvider ({children}: ModeThemeContextProviderProps) {
    const [mode, setMode] = useState<Theme>('light')
    const detectTheme = () => {
        if(mode === 'light') {
            setMode('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }else {
            setMode('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }
    useEffect(()=>{
        const localTheme = localStorage.getItem('theme') as Theme | null;
        if(localTheme) {
            setMode(localTheme);
            if(localTheme == "dark") {
                document.documentElement.classList.add('dark');
            }
        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    },[])

    return <ThemeContext.Provider value={{mode, detectTheme}}>
        {children}
    </ThemeContext.Provider>
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within an ActiveSectionProvider');
    }
    return context;
}