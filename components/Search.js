import { useRef, useState, useMemo, memo } from "react"
import SearchResult from "./SearchResult"
import { MdSearch } from "react-icons/md"

function Search({ data, goToPenalty }) {
  const text = useRef()
  const [ value, setValue ] = useState(false)
  const currValue = useMemo(() => value)

  return (
    <section className="w-full">
      <form className="w-full flex pr-5 focus-within:outline outline-cyan-500 rounded-md">
        <input ref={text} type="text" placeholder="Keresés..." className="w-full px-5 py-3 bg-transparent focus:outline-none" onChange={() => setValue(text.current.value)} />
        <MdSearch size={"24px"} className="my-auto" />   
      </form>
      { currValue ?
        <div className="relative w-full">
          <SearchResult data={data} value={currValue} goToPenalty={goToPenalty} />
        </div>
        : null }
    </section>
  )
}

export default Search = memo(Search)