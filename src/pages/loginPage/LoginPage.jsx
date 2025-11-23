import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/providers/auth-context'
import logo from '/images/logo.svg'
import styles from './page.module.css'

export default function Page() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm()
  const nameValue = watch('name')
  const emailValue = watch('email')
  const passwordValue = watch('password')

  const handleClose = () => {
    window.history.length > 1 ? navigate(-1) : navigate('/')
  }

  const onSubmit = async ({ name, email, password }) => {
    if (login(name, email, password)) {
      navigate('/account', { replace: true })
    } else {
      setError('password', {
        type: 'manual',
        message: 'Неверный пароль',
      })
    }
  }

  const nameValidation = (name) => {
    const names = name.trim().split(/\s+/).filter(Boolean)

    if (names.length === 0) return true
    if (names.length === 1) return 'Добавьте имя'
    if (names.some((name) => name.length < 2)) {
      return 'Каждая часть имени должна содержать минимум 2 символа'
    }

    return true
  }

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.logo} title="На главную" aria-label="На главную">
        <img
          className={styles.image}
          src={logo}
          alt="Логотип компании Космофикс"
          width="134"
          height="20"
        />
      </Link>
      <div className={styles.form_wrapper}>
        <div className={styles.form_header}>
          <h2 className={styles.title}>Вход для мастеров</h2>
          <button
            className={styles.closeButton}
            type="button"
            onClick={handleClose}
            title="Вернуться обратно"
            aria-label="Вернуться обратно"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L12 10.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L13.4142 12L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L12 13.4142L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.5858 12L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
                fill="#898995"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <p className={styles.info}>
            Пожалуйста, указывайте действующий email — в случае оплаты на него будет выслан чек.
          </p>
          <div className={styles.field}>
            <input
              {...register('email', {
                required: 'Поле обязательно для заполнения',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Некорректный email',
                },
              })}
              type="email"
              autoComplete="email"
              id="emailInput"
              className={styles.input}
            />
            <label
              className={`${styles.placeholder} ${emailValue ? styles.placeholderFocused : ''}`}
              htmlFor={'emailInput'}
            >
              Email
            </label>
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div className={styles.field}>
            <input
              {...register('name', {
                required: 'Поле обязательно для заполнения',
                validate: (value) => nameValidation(value),
              })}
              type="text"
              id="nameInput"
              className={styles.input}
            />
            <label
              className={`${styles.placeholder} ${nameValue ? styles.placeholderFocused : ''}`}
              htmlFor={'nameInput'}
            >
              Фамилия и имя
            </label>
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div className={styles.field}>
            <input
              {...register('password', {
                required: 'Поле обязательно для заполнения',
              })}
              type="password"
              autoComplete="current-password"
              id="passwordInput"
              className={styles.input}
            />
            <label
              className={`${styles.placeholder} ${passwordValue ? styles.placeholderFocused : ''}`}
              htmlFor={'passwordInput'}
            >
              Пароль
            </label>
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          </div>
          <button type="submit" className={`${styles.submitButton} ${styles.rippleButton} button`}>
            Войти
          </button>
        </form>
      </div>
      <Link to="/" className={styles.mainPageLink}>
        На главную
      </Link>
    </div>
  )
}
