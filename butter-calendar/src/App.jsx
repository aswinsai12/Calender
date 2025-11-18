import Calendar from "./components/Calendar"

export default function App() {
  return (
    <div className="wrap">
      <div className="head">
        <div>
          <h2 style={{margin:0}}>Team Calendar</h2>
          <p className="kicker">Plan, align, and ship with clarity</p>
        </div>
        <a className="cta" href="https://github.com/aswinsai12/butter-calendar">View Code</a>
      </div>
      <Calendar/>
    </div>
  )
}
