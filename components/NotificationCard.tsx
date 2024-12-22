import React from "react";

type NotificationType = "NewUser" | "Message" | "Comment" | "Connect";

interface NotificationProps {
  type: NotificationType;
  title: string;
  description: string;
  user: string;
  time: string;
}

const NotificationCard: React.FC<NotificationProps> = ({
  type,
  title,
  description,
  user,
  time,
}) => {
  const getColor = () => {
    switch (type) {
      case "NewUser":
        return "bg-green-500";
      case "Message":
        return "bg-orange-500";
      case "Comment":
        return "bg-purple-500";
      case "Connect":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex  justify-between p-4 border rounded-lg shadow-sm bg-white mb-2">
      <div className="flex flex-col items-start space-x-1">
        <span
          className={`text-white px-3 py-1 rounded-full text-sm ${getColor()}`}
        >
          {type}
        </span>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-500 text-sm">{description}</p>
          <p className="text-blue-600 font-medium">{user}</p>
        </div>
      </div>
      <div className="text-gray-400 text-sm">{time}</div>
    </div>
  );
};

export default NotificationCard;
