
import { createBrowserClient } from '@supabase/ssr'

export default function createClient(){
    return createBrowserClient("https://szzhocxbgebegpyvhzko.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6emhvY3hiZ2ViZWdweXZoemtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MTkwMDgsImV4cCI6MjAzNjI5NTAwOH0.lzXbdNDyW4JHvRVpOvbTexfrwG3WrgluJcU-izhWTB8");
}