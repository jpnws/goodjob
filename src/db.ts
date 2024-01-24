import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase';

const apiUrl = import.meta.env.VITE_API_URL as string;
const apiKey = import.meta.env.VITE_API_KEY as string;

export const dbClient = createClient<Database>(apiUrl, apiKey);
