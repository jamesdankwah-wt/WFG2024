"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React, { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
export default function Home() {

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const handleFirstClick = () => {
    setShowFirst(true);
    setShowSecond(false);
  };

  const handleSecondClick = () => {
    setShowFirst(false);
    setShowSecond(true);
  };

  const TabBar = () => {
    return (
      <div className="flex items-center justify-around p-4 text-customBlue text-2xl">
        <div className="flex items-center space-x-2">
        <img width = "267" height = "9"src="https://community.c4kclubhouse.org/wp-content/uploads/2024/01/COMMUNITY-2.png"/>
        </div>
        <div className="flex items-center space-x-2">
          <span>Home</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>News</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Calendar</span>
        </div>
        <div className="flex items-center space-x-2">
        </div>
        <div className="flex items-center space-x-2">
          <Button className='bg-customBlue'>Go to C4K’s Homepage</Button>
        </div>
      </div>
    );
  };


  return (
    <div>
      <TabBar/>
      <img src="https://community.c4kclubhouse.org/wp-content/uploads/2024/01/linkedin_coverphoto.png" alt="Description of the image" className="w-full h-auto"/>
      <div>
        <h1 className="text-5xl text-center mt-8">News and Announcements</h1>
        <p className="text-4xl text-gray-600 text-center mt-8">I am a...</p>
      </div>
      <div className="flex items-center mt-16 justify-center">
      <Button onClick={handleFirstClick} className='flex items-center bg-customBlue px-24'>Student/Family</Button>
      <Button onClick={handleSecondClick} variant="outline" className='flex items-center text-customBlue ml-20 px-32'>Mentor</Button>
      </div>

      <div className="flex justify-between mb-10">
        <div className="flex items-center ml-20">
          <h1 className="text-xl font-bold">Pinned</h1>
        </div>
        <div className="flex items-center mr-20">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuCheckboxItem>
                STEM
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                Activity
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                Updates
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>


      <Card className='ml-10 mr-10'>
        <CardHeader>
          <CardTitle className='text-3xl'>New Cohort Starts Next Week!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-customBlue">
            BodyBodyBodyBodyBodyBasdcaodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBasdcasodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
          </p>
        </CardContent>
      </Card>
      <div className="mt-10 bg-gray-400 h-0.5 w-auto mx-5"></div>
      {showFirst &&  <div>
      <Card className='ml-10 mr-10 mt-10'>
        <CardHeader>
          <CardTitle className='text-3xl'>New 3-D Printer!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-customBlue">
            BodyBodyBodyBodyBodyBasdcaodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBasdcasodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
          </p>
          </CardContent>
      </Card>    
      <Card className='ml-10 mr-10 mt-10'>
        <CardHeader>
          <CardTitle className='text-3xl'>Free Donuts in the Break Room!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-customBlue">
            BodyBodyBodyBodyBodyBasdcaodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBasdcasodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
          </p>
        </CardContent>
      </Card>
</div>}
{showSecond &&  <div>
      <Card className='ml-10 mr-10 mt-10'>
        <CardHeader>
          <CardTitle className='text-3xl'>Missing Child Found in Zoo!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-customBlue">
            BodyBodyBodyBodyBodyBasdcaodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBasdcasodyBodyBodyBodyBodyBodyBodyBodyBody
            BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
          </p>
        </CardContent>
      </Card>
    </div>}
    </div>
  );
}
