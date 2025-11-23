import { useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'
import { useHead } from '@/hooks/useHead'
import { usePage } from '@/providers/page-context'
import Field from '@/ui/Field/Field'
import styles from './Page.module.css'

const mock_data = {
  goal: 'Получить знания о headless WP, обновить знания о nextjs в целом, а также изучить что нового в 15-Й версии.',
  steps: [
    'Прочесть несколько блоков из migration guide 15',
    'Спрашивать у ИИ и читать документацию в процессе изучения и создания демо',
  ],
  demo: [
    [
      'Создать БД для WP',
      'Залить на локалку WP',
      'Установка плагинов, настройка кастомных полей и изучение вообще всей этой темы до понимания как создавать полноценные статьи с pre-built блоками',
    ],
    ['Собрать фронт на nextjs с TS и tailwindcSS', 'Написать взаимодействие с wp-backend'],
  ],
}

function AddNewButton({ handleClick }) {
  return (
    <button
      type="button"
      title="Добавить задачу"
      onClick={() => handleClick('Создать демо')}
      className={styles.addNewButton}
    >
      <div className={styles.addNewButton_line}></div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Add new task</title>
        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="url(#paint0_linear_66_173)" />
        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="white" />
        <path
          d="M8.625 3H7.375V7.375H3V8.625H7.375V13H8.625V8.625H13V7.375H8.625V3Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_66_173"
            x1="0"
            y1="8"
            x2="16"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D52FF" />
            <stop offset="1" stopColor="#3025C2" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  )
}

export default function Page() {
  const { session } = usePage()
  const [task, setTask] = useQueryState('')
  const [showField, setShowField] = useState(false)
  const [data, setData] = useState(mock_data)
  useHead(`Сессия по ${session.title}`)

  useEffect(() => {
    document.addEventListener('touchstart', () => {}, true)
    return () => document.removeEventListener('touchstart', () => {}, true)
  }, [])

  // const addNewTask = (task) => {
  //   setData((prevState) => ({
  //     ...prevState,
  //     steps: [...prevState.steps, task],
  //   }))
  // }

  const openTaskInput = () => {
    setShowField(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const task = new FormData()
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div id="goal" className={`${styles.goal} ${styles.panel}`}>
          <h2 className={styles.panel_title}>Цель:</h2>
          <p>{mock_data.goal}</p>
        </div>
        <div id="steps" className={`${styles.steps} ${styles.panel}`}>
          <h2 className={styles.panel_title}>Шаги:</h2>
          <ul className={styles.list}>
            {data.steps.map((step) => (
              <li key={step} className={styles.list_item}>
                {step}
              </li>
            ))}
            <AddNewButton handleClick={openTaskInput} />
            <form onSubmit={handleSubmit}>
              <Field
                value={task || ''}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Прочитать..."
                visibility={showField}
              />
            </form>
          </ul>
        </div>
        <div id="demo" className={`${styles.demo} ${styles.panel}`}>
          <h2 className={styles.panel_title}>Демо:</h2>
          {mock_data.demo.map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Static data, order won't change
            <ul key={index} className={styles.list}>
              {mock_data.steps.map((step) => (
                <li key={step} className={styles.list_item}>
                  {step}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
