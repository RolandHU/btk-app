import { memo } from "react"

function Penalty ({ data, func }) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  return (
    <details id={data.Paragraph} className={`w-full ${func.penalties.includes(data) ? "border-2 border-cyan-500" : "border border-slate-700"} rounded-md text-lg overflow-clip cursor-pointer`} open={func.penaltyState.includes(data.Paragraph)}>
      <summary className="flex flex-col md:flex-row list-none bg-slate-800">
        <h2 className="flex-1 px-10 pt-5 md:py-5 text-xl font-semibold truncate" onClick={() => func.changePenaltyState(data.Paragraph)}>{data.Name}</h2>
        <p className="px-10 pb-5 md:pb-0 md:m-auto text-slate-500">{data.ID}</p>
        <button className="w-full md:w-14 py-3 border-y md:border-y-0 md:border-x border-slate-600 bg-slate-700 hover:bg-slate-600" aria-label="add-one-penalty" onClick={() => func.addPenalty(data)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 m-auto"><path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg></button>
        <button className="w-full md:w-14 py-3 bg-slate-700 hover:bg-slate-600" aria-label="remove-one-penalty" onClick={() => func.removePenalty(data)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 m-auto"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg></button>
      </summary>
      <section className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 px-10 py-5 border-t border-slate-700 text-center">
        <p className="md:col-span-2 lg:col-span-4 text-left"><b className="text-slate-500">{data.Paragraph}</b> {data.Desc ? data.Desc : "Nem található leírás..."}</p>
        <hr className="md:col-span-2 lg:col-span-4 border-slate-600"/>
        <p><b className="text-4xl">${formatter.format(data.MinTicket)}</b><br/><span className="text-slate-400">minimum kiszabható büntetés</span></p>
        <p><b className="text-4xl">${formatter.format(data.MaxTicket)}</b><br/><span className="text-slate-400">maximum kiszabható büntetés</span></p>
        <p><b className="text-4xl">{data.MinJail}p</b><br/><span className="text-slate-400">minimum letöltendő büntetés</span></p>
        <p><b className="text-4xl">{data.MaxJail}p</b><br/><span className="text-slate-400">maximum letöltendő büntetés</span></p>
      </section>
    </details>
  )
}

export default Penalty = memo(Penalty)