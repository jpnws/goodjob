import { createClient } from '@supabase/supabase-js';

const apiUrl = import.meta.env.VITE_API_URL as string;
const apiKey = import.meta.env.VITE_API_KEY as string;

export const dbClient = createClient(apiUrl, apiKey);
