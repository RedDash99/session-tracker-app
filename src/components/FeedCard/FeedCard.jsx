import styles from './FeedCard.module.css'

function Description({ description }) {
  if (typeof description === 'string') {
    return <p className={styles.feedCard_description}>{description}</p>
  }
  return (
    <ul className={styles.feedCard_description_list}>
      {description.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function FeedCard({ title, description, timeline }) {
  return (
    <div className={styles.feedCard}>
      <div className={styles.feedCard_timeline}>{`${timeline.start} - ${timeline.finish}`}</div>
      <div className={styles.feedCard_body}>
        <h2 className={styles.feedCard_title}>{title}:</h2>
        <Description description={description} />
      </div>
    </div>
  )
}
