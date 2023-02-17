import { memo } from "react"
import { v4 as uuid4 } from "uuid"

function SearchResult({ data, value, goToPenalty, setState }) {
  const filter = new RegExp(`(.+)?(${value.toLowerCase()})(.+)?`, "gmi")

  return (
    <section className="absolute w-full max-h-52 mt-2.5 border border-slate-700 rounded-md bg-slate-800 overflow-auto">
      {Object.values(data).map(d => d.map(elem => {
        if (!Object.keys(elem).includes("MinTicket")) return
        const [ id, name ] = [ elem.ID.match(filter), elem.Name.match(filter) ]
        if (id || name)
          return (
            <div key={uuid4()} className="flex justify-between px-5 py-5 border-b border-slate-700 hover:bg-slate-700 cursor-pointer" onClick={() => { goToPenalty(elem); setState(false) }}>
              <p className={`font-semibold ${name ? "text-cyan-500" : null}`}>{elem.Name}</p>
              <p className={`${id ? "text-cyan-500" : "text-slate-500"}`}>{elem.ID}</p>
            </div>
          )  
      }))}
    </section>
  )
}

export default SearchResult = memo(SearchResult)