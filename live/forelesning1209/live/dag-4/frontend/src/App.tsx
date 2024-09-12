import { useState } from "react"
import Card from "./components/Card"
import Title from "./components/Title"

function App() {
  const [username, setUsername] = useState("thoraho")

  const handleUsernameChange = (event: any) => {
    setUsername("UHUHUHUHU")
    if (username === "UHUHUHUHU") {
      setUsername((prev) => prev + "UHUHUHUHU")
    }
  }

  const products = [
    {
      title: "Produktnavn",
      content: "Dette er en beskrivelse av produktet",
      url: "#",
      image: "https://placehold.co/200?text=Produktbilde",
      price: 199,
    },
    {
      title: "Produktnavn 2",
      content: "Dette er en beskrivelse av produktet",
      url: "#",
      image: "https://placehold.co/200?text=Produktbilde",
      price: 299,
    },
    {
      title: "Produktnavn 3",
      content: "Dette er en beskrivelse av produktet",
      url: "#",
      image: "https://placehold.co/200?text=Produktbilde",
      price: 1099,
    },
  ]

  return (
    <section>
      {/* <button onClick={handleUsernameChange}>HHOHOHOH</button> */}
      {username}
      <Title title="Produkter" />
      <Title title="Medlemstilbud" />
      {/* <Title title={username} /> */}
      <section className="products-section">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            content={product.content}
            url={product.url}
            image={product.image}
            price={product.price}
          />
        ))}
      </section>
    </section>
  )
}

export default App
