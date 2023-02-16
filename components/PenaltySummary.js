import { useState, useMemo, useCallback, memo } from "react"
import { v4 as uuid4 } from "uuid"
import { Menu, Close, FileCopy, Delete } from "@material-ui/icons"

function PenaltySummary({ data, goToPenalty, deletePenalty, resetPenalties }) {
  const penaltyList = {}
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  const [ state, setState ] = useState(false)
  const currState = useMemo(() => state)

  useMemo(() => {data.map(p => {
    if (Object.keys(penaltyList).includes(JSON.stringify(p))) penaltyList[JSON.stringify(p)] += 1
    else penaltyList[JSON.stringify(p)] = 1
  })})

  const copyToClipboard = useCallback(() => {
    const ids = Object.keys(penaltyList).map(p => JSON.parse(p).ID)
    if (ids.length > 0) navigator.clipboard.writeText(ids.join(", "))
  }, [penaltyList])

  return (
    <main className={`absolute md:relative ${currState ? "w-screen md:w-2/5 md:max-w-2xl" : "w-0"} h-screen flex flex-col`}>
      <header className={`p-5 ${state ? "border-r border-slate-700 bg-slate-800" : null}`} onClick={() => setState(!currState)}>
        {state ? <Close className="cursor-pointer" /> : <Menu className="cursor-pointer" />}
      </header>
      <section className={`w-full flex-1 ${currState ? "flex" : "hidden"} flex-col border-r border-slate-700 bg-slate-800`}>
        <main className="relative flex flex-col flex-1 border-y border-slate-700 text-xl overflow-auto">
          {Object.keys(penaltyList).map(penalty => {
            const obj = JSON.parse(penalty)

            return (
              <div key={obj.Paragraph} className="flex gap-5 px-10 py-5 border-b border-slate-700" onClick={() => goToPenalty(obj)}>
                <p className="flex-1 truncate"><b className="text-cyan-500">{penaltyList[penalty]}x</b> {obj.ID} - {obj.Name}</p>
                <Close className="my-auto cursor-pointer" onClick={() => deletePenalty(obj)} />
              </div>              
            )
          })}              
          <div className="sticky bottom-0 w-full flex gap-5 px-10 py-5 mt-auto border-t-2 border-slate-700 bg-slate-800">
            <p className="flex-1 text-lg">{Object.values(penaltyList).reduce((sum, n) => sum + n, 0)} büntetés</p>
            <FileCopy className="m-auto cursor-pointer" onClick={() => copyToClipboard()} />
            <Delete className="m-auto cursor-pointer" onClick={() => resetPenalties()} />
          </div>
        </main>
        <footer className="grid grid-cols-2">
          <p className="px-5 py-3 border-t border-r border-slate-700"><b className="text-sm uppercase text-slate-400 font-semibold">min. büntetés</b><br/><span className="text-3xl text-cyan-600 font-bold">${formatter.format(data.map(d => d.MinTicket).reduce((sum, n) => sum + n, 0))}</span></p>
          <p className="px-5 py-3 border-t border-l border-slate-700"><b className="text-sm uppercase text-slate-400 font-semibold">max. büntetés</b><br/><span className="text-3xl text-cyan-600 font-bold">${formatter.format(data.map(d => d.MaxTicket).reduce((sum, n) => sum + n, 0))}</span></p>
          <p className="px-5 py-3 border-t border-r border-slate-700"><b className="text-sm uppercase text-slate-400 font-semibold">min. letöltendő</b><br/><span className="text-3xl text-cyan-600 font-bold">{data.map(d => d.MinJail).reduce((sum, n) => sum + n, 0)}p</span></p>
          <p className="px-5 py-3 border-t border-l border-slate-700"><b className="text-sm uppercase text-slate-400 font-semibold">max. letöltendő</b><br/><span className="text-3xl text-cyan-600 font-bold">{data.map(d => d.MaxJail).reduce((sum, n) => sum + n, 0)}p</span></p>
        </footer>
      </section>
    </main>
  )
}

export default PenaltySummary = memo(PenaltySummary)