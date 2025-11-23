import { Link } from 'react-router-dom'
import Container from './components/Container/Container'
import { useHead } from './hooks/useHead'

export default function ErrorPage() {
  useHead('404 | Страница не найдена')

  return (
    <div id="error-page" className="error-page">
      <Container>
        <div className="error-page_content">
          <h1 className="error-page_title">Ой!</h1>
          <p className="error-page_subtitle">
            Случилась ошибка! Вероятно, вы попали <br /> на несуществующую страницу.
          </p>
          <Link to="/" className="button error-page_button">
            Перейти на главную
          </Link>
        </div>
      </Container>
    </div>
  )
}
