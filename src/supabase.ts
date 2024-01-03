import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vcviffeadlcpimxzinfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdmlmZmVhZGxjcGlteHppbmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwNDA3MjIsImV4cCI6MjAxOTYxNjcyMn0.D4NJ8HD60iw5Qqq-36q2wOfnXBQUSSyVDSfc1HSAdiY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
