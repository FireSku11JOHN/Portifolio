import { Container } from "./componentes/Container"
import { Header } from "./componentes/Header"
import { HomePage } from "./componentes/HomePage"
import { MainContent } from "./componentes/MainContent/MainContent"
import { TicTacToe } from "./componentes/MainContent/TicTacToe/TicTacToe"

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
