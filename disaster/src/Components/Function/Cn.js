import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const CN = (...args) => { 
return twMerge(clsx(...args))
}