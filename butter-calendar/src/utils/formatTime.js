export function toReadableTime(value) {
  const [h, m] = value.split(":").map(Number)
  const p = h >= 12 ? "PM" : "AM"
  const hh = ((h + 11) % 12) + 1
  const mm = String(m).padStart(2, "0")
  return `${hh}:${mm} ${p}`
}
