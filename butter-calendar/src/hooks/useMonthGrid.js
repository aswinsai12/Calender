import dayjs from "dayjs"

export function useMonthGrid(seed) {
  const firstOfMonth = seed.startOf("month")
  const firstOfGrid = firstOfMonth.startOf("week")
  const lastOfMonth = seed.endOf("month")
  const lastOfGrid = lastOfMonth.endOf("week")
  const totalCells = lastOfGrid.diff(firstOfGrid, "day") + 1
  const cells = Array.from({ length: totalCells }).map((_, i) => {
    const date = firstOfGrid.add(i, "day")
    return {
      key: date.format("YYYY-MM-DD"),
      label: date.date(),
      isToday: date.isSame(dayjs(), "day"),
      isDimmed: !date.isSame(seed, "month"),
      dateString: date.format("YYYY-MM-DD"),
      weekdayIndex: date.day()
    }
  })
  const weeks = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return { weeks, monthName: seed.format("MMMM"), yearLabel: seed.format("YYYY") }
}
