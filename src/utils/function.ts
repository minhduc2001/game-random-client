import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const convertSecondsToTime = (time: number) => {
  const durationObj = dayjs.duration(time, "seconds");
  const minutes = String(durationObj.minutes()).padStart(2, "0");
  const remainingSeconds = String(durationObj.seconds()).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};
