'use client'
export default function DisplayComponent({TipPerPerson, TotalPerPerson, ResetFunction } : any ) {
    return (
    <div className="display">
    <div className="display-group">
        <div className="display-row">
            <div className="display-label">
              <p className="header">Tip Amount</p>
              <p className="unit">/Person</p>
            </div>
              <p className="display-amt">${TipPerPerson.toFixed(2) ?? 0}</p>
        </div>
        <div className="display-row">
            <div className="display-label">
              <p className="header">Total</p>
              <p className="unit">/Person</p>
            </div>
              <p className="display-amt">${!isNaN(TotalPerPerson.toFixed(2)) ? TotalPerPerson.toFixed(2) : 0}</p>
        </div>
      </div>
      <button className="button" onClick={ResetFunction} disabled = {TotalPerPerson && TipPerPerson ? false : true}>Reset</button>
    </div>
  );
}
