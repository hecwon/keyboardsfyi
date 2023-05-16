require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(`${process.env.supabaseURL}`, `${process.env.supabaseKey}`);