import dayjs from "dayjs"

export default function WeekdayHeader() {
  const names = Array.from({ length: 7 }).map((_, i) => dayjs().startOf("week").add(i, "day").format("ddd"))
  return (
    <div className="weekbar">
      {names.map(n => <div key={n}>{n}</div>)}
    </div>
  )
}
