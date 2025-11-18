export default function MonthHeader({ anchor, onPrev, onNext, onToday }){
  const monthName = anchor.format("MMMM")
  const yearLabel = anchor.format("YYYY")
  return (
    <div className="monthbar">
      <div className="title">
        <h1>{monthName}</h1>
        <span className="year">{yearLabel}</span>
      </div>
      <div className="controls">
        <button className="btn" onClick={onPrev}>Previous Month</button>
        <button className="btn" onClick={onToday}>Present Month</button>
        <button className="btn" onClick={onNext}>Next Month</button>
      </div>
    </div>
  )
}
