import { Reorder } from 'framer-motion'
import { useState } from 'react'
import data from '@/lib/data/mock-feed.json'
import styles from './Feed.module.css'
import { Item } from './Item'

// const initialItems = [
//   {
//     id: 0,
//     title: 'Цель',
//     content:
//       'Получить знания о headless WP, обновить знания о nextjs в целом, а также изучить что нового в 15-Й версии.',
//   },
//   {
//     id: 1,
//     title: 'Шаги',
//     content: [
//       'Прочесть несколько блоков из migration guide 15',
//       'Спрашивать у ИИ и читать документацию в процессе изучения и создания ДЕМо',
//       'Создать демо',
//     ],
//   },
//   {
//     id: 2,
//     title: 'ДЕМО',
//     content: [
//       'СОздать БД для WP',
//       'Залить на локалку WP',
//       'Установка плагинов, настройка кастомных полей и изучение вообще всей этой темы до понимания как создавать полноценные статьи с pre-built блоками',
//       'Собрать фронт на nextjs с TS и tailwindcSS',
//       'Написать взаимодействие с wp-backend',
//     ],
//   },
// ]

export default function Feed() {
  const [items, setItems] = useState(data)

  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items} className={styles.feed_list}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Reorder.Group>
  )
}
