'use client'
export default function TipButton({value, clickHandle} : any) {
  return (
    <div className="tip-amount">
        <input type="radio" onChange={clickHandle} name="tip" value={value} />
        <div className="tip-btn">{value}%</div>
    </div>
  )
}
