import Title from "./Title"

type CardProps = {
  title: any
  content?: string
  image?: string
  url: string
  price: number
}

export default function Card(props: CardProps) {
  const {
    title = "Card title",
    content = "Card content",
    url = "#",
    image = "https://placehold.co/200",
    price = 0,
  } = props

  return (
    <>
      <article className="card">
        <img className="cardimg" src={image} alt={`Bilde av ${title}`} />
        <p>{content}</p>
        <section>
          <span>{`${price},-`}</span>
          <a href={url}>Til {title}</a>
        </section>
      </article>
    </>
  )
}
