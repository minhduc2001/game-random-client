import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const convertSecondsToTime = (time?: number) => {
  const durationObj = dayjs.duration(time ?? 0, "seconds");
  const minutes = String(durationObj.minutes()).padStart(2, "0");
  const remainingSeconds = String(durationObj.seconds()).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};

export function sumDigits(number?: number) {
  if (!number) return `0 = 0`;
  const digits = number.toString().split("");
  const sum = digits.reduce((acc, digit) => acc + parseInt(digit, 10), 0);

  return digits.join(" + ") + " = " + sum;
}
