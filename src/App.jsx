import { Contacts } from "./componentes/Contacts"
import { Container } from "./componentes/Container"
import { Footer } from "./componentes/Footer"
import { Header } from "./componentes/Header"
import { HomePage } from "./componentes/HomePage"
import { About } from "./componentes/MainContent/About"
import { MainContent } from "./componentes/MainContent/MainContent"
import { RotateWhell } from "./componentes/MainContent/RotateWhell"
import { Skills } from "./componentes/MainContent/Skills"
import { TicTacToe } from "./componentes/MainContent/TicTacToe"
import { Projects } from "./componentes/Projects"

function App() {

  return (
    <div className="w-full">
      <Header/>
      <Container >
        <HomePage />
      </Container>
      <MainContent>
        <About/>
        <Skills/>
      </MainContent>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
