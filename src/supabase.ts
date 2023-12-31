import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nujidmnenmcvxclwpjeb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51amlkbW5lbm1jdnhjbHdwamViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMjI5MTgsImV4cCI6MjAxNjY5ODkxOH0.77y1UEcerQqC0LJlTCcufrQB1ad2jRJlm5oc7lhq3q8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
