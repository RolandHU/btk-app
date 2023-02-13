import { useState } from "react"

export default function Penalty({ data, func }) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  return (
    <div className="border border-slate-700 rounded-md overflow-hidden text-lg">
      <div className="flex flex-col md:flex-row bg-slate-800">
        <div className="flex flex-col md:flex-row flex-1 justify-between pl-10 py-5" onClick={() => func.changePenaltyState(data.Paragraph)}>
          <h2 className="pr-10 text-xl font-semibold">{data.Name}</h2>
          <p className="pt-2 md:pr-10 md:pt-0 text-slate-600">{data.ID}</p>          
        </div>
        <div className="flex font-semibold">
          <button className="w-full md:w-14 h-full py-3 md:py-0 border-x border-slate-600 bg-slate-700 hover:bg-slate-600" onClick={() => func.addPenalty("a")}>+</button>
          <button className="w-full md:w-14 h-full py-3 md:py-0 bg-slate-700 hover:bg-slate-600">-</button>
        </div>        
      </div>
      <div className={`${func.penaltyState.includes(data.Paragraph) ? "block" : "hidden"} px-10 py-5 border-t border-slate-700`} onClick={() => func.changePenaltyState(data.Paragraph)}>
        <p className="pb-5"><b className="text-slate-600">{data.Paragraph.replace(" ", "")}</b> {data.Desc || "Nem található leírás..."}</p>
        <div className="columns-1 md:columns-2 lg:columns-4 pt-5 border-t border-slate-700">
          <div className="py-5 lg:py-0 text-center">
            <p className="pb-2 text-4xl font-bold">${formatter.format(data.MinTicket)}</p>
            <p className="text-slate-400">minimum kiszabható büntetés</p>
          </div>
          <div className="py-5 lg:py-0 text-center">
            <p className="pb-2 text-4xl font-bold">${formatter.format(data.MaxTicket)}</p>
            <p className="text-slate-400">maximum kiszabható büntetés</p>
          </div>
          <div className="py-5 lg:py-0 text-center">
            <p className="pb-2 text-4xl font-bold">{data.MinJail}p</p>
            <p className="text-slate-400">minimum letöltendő büntetés</p>
          </div>
          <div className="py-5 lg:py-0 text-center">
            <p className="pb-2 text-4xl font-bold">{data.MaxJail}p</p>
            <p className="text-slate-400">maximum letöltendő büntetés</p>
          </div>         
        </div>
      </div>
    </div>
  )
}