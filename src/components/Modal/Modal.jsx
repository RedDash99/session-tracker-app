import { useQuiz } from '@/providers/quiz-context'
import PageOverlay from '../PageOverlay/PageOverlay'
import SuccessModal from '../successModal/SuccessModal'
import styles from './modal.module.css'

export default function Modal() {
  const { onModalClose } = useQuiz()
  return (
    <>
      <PageOverlay onClose={onModalClose} />
      <div className={styles.modal_wrapper}>
        <SuccessModal onClose={onModalClose} />
      </div>
    </>
  )
}
