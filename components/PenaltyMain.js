import { v4 as uuid4 } from "uuid"
import Penalty from "./Penalty"

export default function PenaltyMain({ elem, data, func }) {
  return (
    <details className="border border-slate-700 rounded-md overflow-clip" open={func.penaltyState.includes(elem.Paragraph)}>
      <summary className="list-none">
        <h2 className="px-10 py-5 text-xl font-semibold bg-slate-800" onClick={() => func.changePenaltyState(elem.Paragraph)}>{elem.Name}</h2>
      </summary>
      <section className="flex flex-col gap-2.5 p-5">
        {data.map(d => <Penalty key={uuid4()} data={d} func={func} />)}
      </section>
    </details>
  )
}