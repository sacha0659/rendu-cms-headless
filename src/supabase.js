import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dutxswogqtbsekgvfnoa.supabase.co";
const supabasePass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dHhzd29ncXRic2VrZ3Zmbm9hIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODQwNDkzNCwiZXhwIjoxOTYzOTgwOTM0fQ.BbBgU8oI3jLUAPgZGKbhKUxW8vVJFrMQRwzVooZzlCA"

export const supabase = createClient(supabaseUrl, supabasePass);
