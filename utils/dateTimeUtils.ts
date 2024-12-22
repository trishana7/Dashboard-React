import { format } from "date-fns";

export function getDateTime(currentDateTime?: string) {
  if (currentDateTime !== "null") {
    if (currentDateTime) {
      const dateTime = new Date(currentDateTime);
      const formattedDateTest = format(dateTime, "MM-dd-yyyy hh:mm a");
      return formattedDateTest;
    }
  } else {
    return "";
  }
}
