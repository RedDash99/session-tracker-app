import styles from './Field.module.css'

export default function Field({
  value = '',
  onChange,
  type = 'text',
  placeholder = '',
  visibility = true,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
      className={`${styles.input} ${visibility ? styles.visible : styles.hidden}`}
    />
  )
}
