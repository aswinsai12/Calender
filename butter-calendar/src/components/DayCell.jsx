import { toReadableTime } from "../utils/formatTime"
import dayjs from "dayjs"

function planLevels(items) {
  const sorted = [...items].sort((a, b) => a.start - b.start || a.end - b.end)
  const lanes = []
  for (const it of sorted) {
    let placed = false
    for (let i = 0; i < lanes.length; i++) {
      const lane = lanes[i]
      if (lane[lane.length - 1].end <= it.start) {
        lane.push(it)
        it.level = i
        placed = true
        break
      }
    }
    if (!placed) {
      it.level = lanes.length
      lanes.push([it])
    }
  }
  const collide = lanes.length > 1
  return { collide, levels: lanes.length }
}

export default function DayCell({ cell, events }) {
  const mapped = events.map(e => {
    const start = dayjs(`${e.date}T${e.time}`)
    const end = start.add(e.duration, "minute")
    return { ...e, start: start.valueOf(), end: end.valueOf() }
  })
  const { collide } = planLevels(mapped)
  return (
    <div className={`cell ${cell.isDimmed ? "dim" : ""}`}>
      <div className="cell-top">
        <div className={`badge ${cell.isToday ? "today" : ""}`}>{cell.label}</div>
        <div className="count">{events.length ? events.length : ""}</div>
      </div>
      <div className="stack">
        {mapped.map(e => {
          const cls = collide ? (e.level % 2 === 0 ? "lane-0" : "lane-1") : "full"
          return (
            <div key={e.id} className={`chip ${cls}`} style={{ backgroundColor: e.color || "#e2e8f0" }}>
              <span className="title">{e.title}</span>
              <span className="time">{toReadableTime(e.time)}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
