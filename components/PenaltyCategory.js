import { v4 as uuid4 } from "uuid"
import Penalty from "./Penalty"
import PenaltyMain from "./PenaltyMain"

export default function PenaltyCategory({ title, data, func }) {    
  return (
    <section>
      <h1 className="pl-5 py-10 text-5xl font-bold text-pink-700 break-words">{title}</h1>
      <div className="flex flex-col gap-5">
        {
          data.map(d => {
            if (Object.keys(d).includes("MinTicket") && !d.Paragraph.match(/\d+\.\d+/)) return <Penalty key={uuid4()} data={d} func={func} />
            else if (!Object.keys(d).includes("MinTicket")) {
              const regex = new RegExp(`${d.Paragraph.match(/\d+/)[0]}\\.\\d+`, "g")
              return <PenaltyMain key={uuid4()} elem={d} data={data.filter(d => d.Paragraph.match(regex))} func={func} />
            }
          })
        }        
      </div>
    </section>
  )
}