import './index.css';
import Header from './components/Header';
import Section from './components/Section';
import ItemList from './components/ItemList';
import Texto from './components/Texto';
import ItemListRedes from './components/ItemListRedes';

const jogoLista = [
  {
    url: "https://www.twitch.tv/theusmadu",
    imgUrl: "./src/assets/Madu.png",
    alt: "Imagem do jogo Minecraft",
  },
]

const tropinha = [
  {
    url: "https://www.twitch.tv/nnapa1",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/39671017-2275-48ff-a61b-0b2793aaf832-profile_image-150x150.png",
    alt: "Canal do BigNapa",
  },
  {
    url: "https://www.twitch.tv/zPlayerZero",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/e64435cf-d695-45ed-bcc5-3fa9f5039220-profile_image-70x70.png",
    alt: "Canal do Hensley",
  },
  {
    url: "https://www.twitch.tv/kinzin1",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/421f3a42-c691-441d-b39f-c44dcb268dbe-profile_image-70x70.jpeg",
    alt: "Canal do Kinzin",
  },
  {
    url: "https://www.twitch.tv/deusasollar",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9be3c0c2-c2f3-4290-919a-7671a433502d-profile_image-70x70.jpeg",
    alt: "Canal da Be",
  },
  {
    url: "https://www.twitch.tv/luiizin__",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/b6716ca1-35ea-4ed7-b8cb-80b9d3472c97-profile_image-70x70.png",
    alt: "Canal de Luizin",
  },
]

const redes = [
  {
    url: "https://www.instagram.com/theusmadu_",
    imgUrl: "/assets/instagram.svg",
    alt: "Insta do Madu",
  },
  {
    url: "https://www.youtube.com/@theusmadu_6111",
    imgUrl: "/assets/youtube.svg",
    alt: "Canal do Madu",
  },
  {
    url: "https://www.x.com/theusmadu_",
    imgUrl: "/assets/twitter.svg",
    alt: "Twitter do Madu",
  },
  {
    url: "https://www.tiktok.com/@theusmadu_",
    imgUrl: "/assets/tiktok.svg",
    alt: "Tiktok do Madu",
  },
  
]

export default function App() {

  return (
    <div className="App">

      <Header />

      <main>

        <Section title="Conheça o canal" subtitle="TheusMadu" className="Madu">
          {
            jogoLista.map(function (item) {
              return (
                <ItemList
                  url={item.url}
                  imgUrl={item.imgUrl}
                  alt={item.alt} />
              )
            })
          }
          <Texto />
        </Section>

        <Section title="Canais que recomendo" subtitle="Tropinhaa" className="tropinha">
          {
            tropinha.map(function (item) {
              return (
                <ItemList
                  url={item.url}
                  imgUrl={item.imgUrl}
                  alt={item.alt} />
              )
            })
          }
        </Section>
        
        <Section title="Redes sociais" subtitle="Continue conectado" className="redes">
        {
          redes.map(function (item) {
            return (
              
              <ItemListRedes
                url={item.url} 
                imgUrl={item.imgUrl} 
                alt={item.alt} />
            )
          })
        }
        </Section>
      </main>
    </div>
  );
};


