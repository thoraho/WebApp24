type TotalProps = {
  total: number
}

export default function Total(props: TotalProps) {
  const { total } = props

  if (total === 0) {
    return <div>Ingen studenter</div>
  }

  return <div>Totalt antall studenter: {total}</div>
}
