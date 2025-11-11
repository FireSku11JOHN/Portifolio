import { Container } from "./componentes/Container"
import { HomePage } from "./componentes/HomePage"
import { MainContent } from "./componentes/MainContent/MainContent"

function App() {

  return (
    <div className="w-full">
      <Container>
        <HomePage />
      </Container>
      <MainContent>
        <p>teste</p>
      </MainContent>
    </div>
  )
}

export default App
