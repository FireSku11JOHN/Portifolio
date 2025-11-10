import { Container } from "./componentes/Container"
import { HomePage } from "./componentes/HomePage"
import { Header } from "./componentes/Header"

function App() {

  return (
    <div className="w-screen">
      <Container>
        <HomePage />
      </Container>
    </div>
  )
}

export default App
