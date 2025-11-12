'use client'
export default function TipButton({value, clickHandle, tipAmt} : any) {
  return (
    <div className="tip-amount">
        <input type="radio" checked={tipAmt === value} onChange={clickHandle} name="tip" value={value} />
        <div className="tip-btn">{value}%</div>
    </div>
  )
}
