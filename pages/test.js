export default function Test() {
  return (
    <details className="w-full border border-slate-500">
      <summary className="flex list-none">
        <h2 className="flex-1 px-10 py-5">Tilosban Parkolás</h2>
        <p className="px-10 m-auto">TP</p>
        <button className="p-5 border">+</button>
        <button className="p-5 border">-</button>
      </summary>
      <section className="grid grid-cols-4 gap-y-10 p-10 border-t border-slate-500 text-center">
        <p className="col-span-4 text-left">4§ Ide tartozik a járdán parkolás is. Közterületre vonatkozik.</p>
        <p><b>$7.5K</b><br/>minimum kiszabható büntetés</p>
        <p><b>$20K</b><br/>maximum kiszabható büntetés</p>
        <p><b>0p</b><br/>minimum letöltendő büntetés</p>
        <p><b>0p</b><br/>maximum letöltendő büntetés</p>
      </section>
    </details>
  )
}