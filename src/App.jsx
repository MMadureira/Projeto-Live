import './index.css';
import Header from './components/Header';
import Section from './components/Section';
import Texto from './components/Texto';

import { jogoLista, tropinha, redes } from './data/data';

export default function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <Section title="Conheça o canal" subtitle="TheusMadu" className="Madu" list={jogoLista}>
          <Texto />
        </Section>

        <Section title="Canais que recomendo" subtitle="Tropinhaa" className="tropinha" list={tropinha} />

        <Section title="Redes sociais" subtitle="Continue conectado" className="redes" list={redes} />
      </main>
    </div>
  );
};


