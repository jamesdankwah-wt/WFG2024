"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

type EventData = {
    id: string;
    name: string;
    description: string;
    date: string;
    time: string;
    location: string;
    eventid: string;
    calendarid: string;
    };

export async function createEvent(data: EventData) {
    const supabase = createClient();
    const { data: event, error } = await supabase.from("events").insert([data]);
    if (error) {
        throw error;
    }
    revalidatePath("/events");
    return event;
}

export async function updateEvent(data: EventData) {
    const supabase = createClient();
    const { data: event, error } = await supabase.from("events").update(data).eq("id", data.id);
    if (error) {
        throw error;
    }
    revalidatePath("/events");
    return event;
}

export async function deleteEvent(id: string) {
    const supabase = createClient();
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
        throw error;
    }
    revalidatePath("/events");
}

export async function getEvent(id: string) {
    const supabase = createClient();
    const { data: event, error } = await supabase.from("events").select("*").eq("id", id);
    if (error) {
        throw error;
    }
    return event;
}

export async function getEventsWithMatchingDate(date: string) {
    const supabase = createClient();
    const { data: events, error } = await supabase.from("events").select("*").eq("date", date);
    if (error) {
        throw error;
    }
    return events;
}
