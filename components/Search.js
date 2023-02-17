import { useRef, useState, useEffect, useMemo, memo } from "react"
import SearchResult from "./SearchResult"
import { MdSearch } from "react-icons/md"

function Search({ data, goToPenalty }) {
  const elem = useRef()
  const text = useRef()

  const [ state, setState ] = useState(false)
  const currState = useMemo(() => state)

  const [ value, setValue ] = useState(false)
  const currValue = useMemo(() => value)

  return (
    <section ref={elem} className="w-full m-auto">
      <form className="w-full flex pr-5">
        <input ref={text} type="text" placeholder="Keresés..." defaultValue={currValue || ""} className="w-full px-5 py-3 bg-transparent focus:outline-none" onChange={() => setValue(text.current.value)} onFocus={() => setState(true)} onBlur={() => setTimeout(() => setState(false), 100)} />
        <MdSearch size={"24px"} className="my-auto" />   
      </form>
      { currValue && currState ?
        <div className="relative w-full">
          <SearchResult data={data} value={currValue} goToPenalty={goToPenalty} setState={setState} />
        </div>
        : null }
    </section>
  )
}

export default Search = memo(Search)