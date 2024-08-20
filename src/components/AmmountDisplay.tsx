type AmmountDisplayProps = {
  label: string
  amount: number
}

function AmmountDisplay({ label, amount }: AmmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label} : {""}
      <span className="font-black text-black">${amount}</span>
    </p>
  )
}

export default AmmountDisplay
