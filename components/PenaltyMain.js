import { useState } from "react"
import { v4 as uuid4 } from "uuid"
import Penalty from "./Penalty"

export default function PenaltyMain({ elem, data }) {
  const [ state, setState ] = useState(false)

  return (
    <div className="border border-slate-700 rounded-md overflow-hidden">
      <div className="px-10 py-5 bg-slate-800" onClick={() => setState(!state)}>
        <h2 className="text-xl font-semibold">{elem.Name}</h2>
      </div>
      <div className={`${state ? "flex" : "hidden"} flex-col gap-2.5 p-5 border-t border-slate-700`}>
        {data.map(d => <Penalty key={uuid4()} data={d} />)}
      </div>
    </div>
  )
}