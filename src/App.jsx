import { Container } from "./componentes/Container"
import { Header } from "./componentes/Header"
import { HomePage } from "./componentes/HomePage"
import { MainContent } from "./componentes/MainContent/MainContent"
import { RotateWhell } from "./componentes/MainContent/RotateWhell"
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
      </MainContent>
    </div>
  )
}

export default App
