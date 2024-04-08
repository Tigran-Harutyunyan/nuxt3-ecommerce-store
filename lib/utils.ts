import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { camelize, getCurrentInstance, toHandlerKey } from 'vue'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPath() {
  const API_URL = useRuntimeConfig().apiUrl as string;
  const STORE_ID = useRuntimeConfig().storeId as string;
  return `${API_URL}/api/store/${STORE_ID}/`
}