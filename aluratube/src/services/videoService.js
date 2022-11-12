import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://kbepchfnyekginxgukoi.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZXBjaGZueWVrZ2lueGd1a29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjQ1NjYsImV4cCI6MTk4Mzg0MDU2Nn0.ZzyQcGG0HS5MO3_oO8r1PCe10cWFsd9dW8yn4-nXYDA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase
        .from("video")
        .select("*")
        .order("created_at", { ascending: false });
    },
  };
}
