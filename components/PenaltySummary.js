import { useState } from "react"
import { v4 as uuid4 } from "uuid"

export default function PenaltySummary({ penalties, data, func }) {
  const penaltyList = {}
  const [ state, setState ] = useState(false)
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  {penalties.map(p => {
    if (Object.keys(penaltyList).includes(JSON.stringify(p))) penaltyList[JSON.stringify(p)] += 1
    else penaltyList[JSON.stringify(p)] = 1
  })}

  return (
    <>
      <div className="absolute z-10 left-0 top-0 w-full flex">
        <div className="p-5">
          {
            state ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 cursor-pointer" onClick={() => setState(!state)}>
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 cursor-pointer" onClick={() => setState(!state)}>
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
          }  
        </div>
        <div className={`${state ? "hidden" : "block"} px-4 py-1 my-auto rounded-md bg-cyan-800`}>
          <p>{Object.values(penaltyList).reduce((sum, n) => sum + n, 0)}</p>
        </div>
      </div>
      <main className={`absolute md:relative w-full md:w-2/5 md:max-w-2xl h-screen ${state ? "flex" : "hidden"} flex-col gap-10 p-10 pt-16 border-r border-slate-700 bg-slate-800`}>
        <div className="relative flex flex-1 flex-col border-4 border-slate-700 rounded-md overflow-auto">
          <div className="flex-1">
            {Object.keys(penaltyList).map(p => {
              const obj = JSON.parse(p)
              return (
                <div key={uuid4()} className="flex gap-5 px-10 py-5 border-b border-slate-700">
                  <p className="flex-1 truncate">{penaltyList[p]}x - {obj.Name}</p> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 my-auto" onClick={() => func.deletePenalty(obj)}>
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </div>
              )
            })}            
          </div>
          <div className="sticky left-0 bottom-0 w-full flex flex-wrap justify-between gap-5 px-10 py-5 border-t-4 bg-slate-800 border-slate-700">
            <p>{Object.values(penaltyList).reduce((sum, n) => sum + n, 0)} büntetés</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer hover:rotate-45 ease-in-out duration-300" onClick={() => func.resetPenalties()}>
              <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
            </svg>
          </div>     
        </div>
        <footer className="grid grid-cols-2 gap-3">
          <p className="border border-slate-600 px-5 py-2 rounded-md"><b className="text-sm uppercase text-slate-400 font-semibold">min. büntetés</b><br/><span className="text-3xl text-cyan-600 font-bold">${formatter.format(func.penalties.map(p => p.MinTicket).reduce((sum, n) => sum + n, 0))}</span></p>
          <p className="border border-slate-600 px-5 py-2 rounded-md"><b className="text-sm uppercase text-slate-400 font-semibold">max. büntetés</b><br/><span className="text-3xl text-cyan-600 font-bold">${formatter.format(func.penalties.map(p => p.MaxTicket).reduce((sum, n) => sum + n, 0))}</span></p>
          <p className="border border-slate-600 px-5 py-2 rounded-md"><b className="text-sm uppercase text-slate-400 font-semibold">min. letöltendő</b><br/><span className="text-3xl text-cyan-600 font-bold">{func.penalties.map(p => p.MinJail).reduce((sum, n) => sum + n, 0)}p</span></p>
          <p className="border border-slate-600 px-5 py-2 rounded-md"><b className="text-sm uppercase text-slate-400 font-semibold">max. letöltendő</b><br/><span className="text-3xl text-cyan-600 font-bold">{func.penalties.map(p => p.MaxJail).reduce((sum, n) => sum + n, 0)}p</span></p>
        </footer>
      </main>    
    </>
  )
}