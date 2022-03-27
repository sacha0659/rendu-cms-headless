import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dutxswogqtbsekgvfnoa.supabase.co";
const supabasePass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dHhzd29ncXRic2VrZ3Zmbm9hIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzg3MTA4NCwiZXhwIjoxOTYzNDQ3MDg0fQ.qXk5M17CwIdPMMhDoxXbcMkfuwOp_mDUe58OzA9ZsJQ"

export const supabase = createClient(supabaseUrl, supabasePass);
