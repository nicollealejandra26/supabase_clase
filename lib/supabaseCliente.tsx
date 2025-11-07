import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rbedltaiwacfapwoblqt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiZWRsdGFpd2FjZmFwd29ibHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MzA1MDEsImV4cCI6MjA3ODEwNjUwMX0.K2UJqzIj30mOn_-3vTN3Apdb7Ri28qAHFwwnLYjrCY4';
export const supabase = createClient(supabaseUrl, supabaseKey);
