import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import styles from "./rating.module.css"

export default function Rating({ required }) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className={styles.rating}>
      {[5, 4, 3, 2, 1].map((star) => (
        <Fragment key={star}>
          <input
            type="radio"
            id={`rating-star${star}`}
            name="rating"
            value={star}
            {...register("rating", { required: required && "Это поле обязательно" })}
          />
          <label htmlFor={`rating-star${star}`}>
            <svg
              className={styles.star}
              width="44"
              height="44"
              viewBox="0 0 51 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24.6826 1.54557C25.0651 0.866929 26.0423 0.86693 26.4249 1.54557L33.2641 13.6796C33.4068 13.9327 33.6526 14.1113 33.9374 14.1688L47.591 16.9237C48.3546 17.0777 48.6566 18.0072 48.1294 18.5807L38.7027 28.8348C38.506 29.0487 38.4122 29.3377 38.4455 29.6264L40.0447 43.463C40.1341 44.2369 39.3435 44.8113 38.6351 44.4871L25.9699 38.6905C25.7056 38.5695 25.4018 38.5695 25.1375 38.6905L12.4723 44.4871C11.764 44.8113 10.9733 44.2369 11.0628 43.463L12.6619 29.6264C12.6953 29.3377 12.6014 29.0487 12.4047 28.8348L2.97803 18.5807C2.4508 18.0072 2.75279 17.0777 3.51643 16.9237L17.17 14.1688C17.4549 14.1113 17.7006 13.9327 17.8433 13.6796L24.6826 1.54557Z"/>
            </svg>
          </label>
        </Fragment>
      ))}
      {errors && errors.rating && (
        <p className={styles.error}>{errors.rating.message}</p>
      )}
    </div>
  )
}
