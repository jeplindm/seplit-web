interface TotalBarProps {
  subtotal: number
  tax: number
  tip: number
  grandTotal: number
}

export default function TotalBar({ subtotal, tax, tip, grandTotal }: TotalBarProps) {
  return (
    <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="flex justify-between text-sm text-slate-600">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      {tax > 0 && (
        <div className="flex justify-between text-sm text-slate-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      )}
      {tip > 0 && (
        <div className="flex justify-between text-sm text-slate-600">
          <span>Tip</span>
          <span>${tip.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between pt-2 border-t border-slate-300">
        <span className="font-medium text-slate-700">Grand Total</span>
        <span className="text-2xl font-bold text-teal-600">${grandTotal.toFixed(2)}</span>
      </div>
    </div>
  )
}
