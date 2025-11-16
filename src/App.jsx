import { Container } from "./componentes/Container"
import { Header } from "./componentes/Header"
import { HomePage } from "./componentes/HomePage"
import { MainContent } from "./componentes/MainContent/MainContent"
import { RotateWhell } from "./componentes/MainContent/RotateWhell"
import { Skills } from "./componentes/MainContent/Skills"
import { TicTacToe } from "./componentes/MainContent/TicTacToe"

function App() {

  return (
    <div className="w-full">
      <Header/>
      <Container >
        <HomePage />
      </Container>
      <MainContent>
        <TicTacToe/>
        <RotateWhell/>
        <Skills/>
      </MainContent>
    </div>
  )
}

export default App
