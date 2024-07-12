"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useEffect, useState } from "react";
import React from "react";
import createClient from "@/utils/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getEventsWithMatchingDate } from "@/actions/event";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Date({ params }: { params: { eventDate: string } }) {
  const router = useRouter();
  const supabase = createClient();

  const [events, setEvent] = useState<ScheduleEvent[]>([]); // Specify VideoModel as the type for track
  

  useEffect(() => {
    async function fetchData() {
      if (params.eventDate) {
        const res: ScheduleEvent[] = await getEventsWithMatchingDate(params.eventDate); // Ensure res is of type VideoModel[]
        setEvent(res);
      }
    }
    fetchData();
  }, [params.eventDate]);

 
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}
                    {events[0].details}

                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}