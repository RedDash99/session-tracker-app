import Container from './components/Container/Container'
import Feed from './components/Feed/Feed'
import './App.css'

function App() {
  return (
    <Container>
      <h1 style={{ marginTop: '1.5rem', fontWeight: '400' }}>Main page</h1>
      <Feed />
    </Container>
  )
}

export default App
