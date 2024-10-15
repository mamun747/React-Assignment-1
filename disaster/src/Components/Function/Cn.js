import { clsx } from 'clsx';
import  { twMerge } from 'tailwind-merge'
const CN = (...args) => twMerge(clsx(...args));
export default CN;