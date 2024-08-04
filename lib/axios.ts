import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_APP_URL}/api/`,
  headers: {
    'Cache-Control': 'force-cache'
  }
});