"use client";

import React from "react";
import NotificationCard from "@/components/NotificationCard";
import Header from "@/components/Header";

const notifications: {
  type: "NewUser" | "Message" | "Comment" | "Connect";
  title: string;
  description: string;
  user: string;
  time: string;
}[] = [
  {
    type: "NewUser",
    title: "New Registration: Finibus Bonorum et Malorum",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    user: "Allen Deu",
    time: "24 Nov 2018 at 9:30 AM",
  },
  {
    type: "Message",
    title: "Darren Smith sent new message",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    user: "Darren",
    time: "24 Nov 2018 at 9:30 AM",
  },
  {
    type: "Comment",
    title: "Arin Ganshiram Commented on post",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    user: "Arin Ganshiram",
    time: "24 Nov 2018 at 9:30 AM",
  },
  {
    type: "Connect",
    title: "Jullet Den Connect Allen Depk",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    user: "Jullet Den",
    time: "24 Nov 2018 at 9:30 AM",
  },
];

const Notification: React.FC = () => {
  return (
    <div className="mx-8 mt-4">
      <Header headingLevel="h1" text="Notifications" />
      <div className="mt-4">
        {notifications.map((notification, index) => (
          <NotificationCard key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default Notification;
