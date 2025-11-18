import { useMemo, useState } from "react"
import dayjs from "dayjs"
import MonthHeader from "./MonthHeader"
import WeekdayHeader from "./WeekDayHeader"
import DayCell from "./DayCell"
import { useMonthGrid } from "../hooks/useMonthGrid"
import allEvents from "../data/events.json"

function groupByDate(list) {
  const box = {}
  for (const e of list) {
    const key = e.date
    if (!box[key]) box[key] = []
    box[key].push(e)
  }
  return box
}

export default function Calendar() {
  const [anchor, setAnchor] = useState(dayjs())
  const { weeks } = useMonthGrid(anchor)
  const dated = useMemo(() => groupByDate(allEvents), [])
  function goPrev() { setAnchor(a => a.subtract(1, "month")) }
  function goNext() { setAnchor(a => a.add(1, "month")) }
  function goToday() { setAnchor(dayjs()) }

  return (
    <div className="shell">
      <MonthHeader anchor={anchor} onPrev={goPrev} onNext={goNext} onToday={goToday} />
      <WeekdayHeader />
      <div className="grid">
        {weeks.map((w, wi) => (
          <div key={wi} style={{ display: "contents" }}>
            {w.map(c => (
              <DayCell key={c.key} cell={c} events={dated[c.dateString] || []} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
