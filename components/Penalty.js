export default function Penalty({ data, func }) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  return (
    <div className={`${func.penalties.includes(data) ? "border-2 border-cyan-500" : "border border-slate-700"} rounded-md overflow-hidden text-lg`}>
      <div className="flex flex-col md:flex-row bg-slate-800">
        <div className="flex flex-col md:flex-row flex-1 justify-between pl-10 py-5" onClick={() => func.changePenaltyState(data.Paragraph)}>
          <h2 className="pr-10 text-xl font-semibold">{data.Name}</h2>
          <p className="pt-2 md:pr-10 md:pt-0 text-slate-600">{data.ID}</p>          
        </div>
        <div className="flex font-semibold">
          <button className="w-full md:w-14 h-full py-3 md:py-0 border-x border-slate-600 bg-slate-700  hover:bg-slate-600" onClick={() => func.addPenalty(data)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 m-auto">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="w-full md:w-14 h-full py-3 md:py-0 bg-slate-700 hover:bg-slate-600" onClick={() => func.removePenalty(data)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 m-auto">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
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