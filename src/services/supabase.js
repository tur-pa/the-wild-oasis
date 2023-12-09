import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rhwprxlyhhhjtomhorjl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJod3ByeGx5aGhoanRvbWhvcmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTkzMzIsImV4cCI6MjAxNjE3NTMzMn0.H4Lza8bko38VgQd3ZxOfprEAUD-Gc--j6Ym_WFrg4kg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
