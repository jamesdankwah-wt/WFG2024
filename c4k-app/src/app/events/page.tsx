/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import * as React from "react"
import { useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import {useState} from "react"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function events() {
const router = useRouter();


  const handleRouter = () => {
    console.log("button pressed");
    var id = date?.toISOString().split("T")[0];
    
      router.push(`/events/${id}`);
    
  };
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selected, setSelected] = useState<Date>();
  

  return (
    <div className="mx-5">
    <Calendar
      mode="single"
      selected={selected}
      onSelect={setSelected}
      onDayClick={setDate}
      className="rounded-md border"
    />
    <Button onClick={() => handleRouter()} className="mt-5">Go to date</Button>
    </div>
  )
}
