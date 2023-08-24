const { createClient } = ('@supabase/supabase-js');

const supabaseUrl = 'https://gulykyzkuaexgtpytfqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1bHlreXprdWFleGd0cHl0ZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NzcyNzEsImV4cCI6MjAwODQ1MzI3MX0.LWIVEbPwAHbs5iPH1-3m1D-dtupgwYyiy5tMkUNlzWI';

export const supabase = createClient(supabaseUrl, supabaseKey);
