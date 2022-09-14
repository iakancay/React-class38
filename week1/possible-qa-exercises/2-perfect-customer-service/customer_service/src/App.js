import Guarantee from "./Guarantee";

function App() {
  const data = [
    {
      img: "exercises/chat.png",
      title: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem neque assumenda architecto? Assumenda suscipit consectetur nisi. Soluta, praesentium! Consequuntur ipsa voluptatum reprehenderit ducimus!",
    },
    {
      img: "exercises/coin.png",
      title: "100% Money Back",
      description:
        "Iusto quidem neque assumenda architecto? Assumenda suscipit consectetur nisi. Soluta, praesentium! Consequuntur ipsa voluptatum reprehenderit ducimus!",
    },
    {
      img: "exercises/chat.png",
      title: "Online Support 24/7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit consectetur nisi. Soluta, praesentium! Consequuntur ipsa voluptatum reprehenderit ducimus!",
    },
  ];
  return (
    <div className="App">
      {data.map((msg) => (
        <Guarantee
          img={msg.img}
          title={msg.title}
          description={msg.description}
        />
      ))}
    </div>
  );
}

export default App;
