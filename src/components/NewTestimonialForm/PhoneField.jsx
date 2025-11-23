import { useEffect, useRef } from "react"
import { IMaskInput } from "react-imask"
import { useFormContext, Controller } from "react-hook-form"
import usePhone from "@/hooks/usePhone"
import styles from "./field.module.css"

let placeholder = "Ваш номер телефона"

export default function PhoneField() {
  const { phoneValidationPattern, phoneMask, phonePlaceholder } = usePhone()
  const { control, reset, watch, clearErrors, formState: { errors, isSubmitSuccessful } } = useFormContext()
  const value = watch("phone")
  const ref = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!isSubmitSuccessful) return
    reset({phone: ""})
    clearErrors("phone")
  }, [reset, isSubmitSuccessful])

  return (
    <div className={styles.field}>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Поле обязательно для заполнения",
          pattern: {
            value: phoneValidationPattern,
            message: "Неверный формат",
          },
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask={phoneMask}
            radix="."
            ref={ref}
            defaultValue=""
            onFocus={(e) => (e.target.placeholder = phonePlaceholder)}
            onBlur={(e) => (e.target.placeholder = "")}
            id="phone-field"
            inputRef={inputRef}
            className={`${styles.input} ${errors.phone ? styles.withError : ""}`}
            onAccept={(value) => field.onChange(value)}
            placeholder=""
          />
        )}
      />
      <label
        className={`${styles.placeholder} ${value ? styles.placeholderFocused : ""}`}
        htmlFor={"phone-field"}
      >
        {placeholder}
      </label>
      {errors && errors.phone && (
        <span className={styles.error} title={errors.phone.message}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 21.7898C14.5859 21.7898 17.0658 20.7626 18.8943 18.9341C20.7228 17.1056 21.75 14.6257 21.75 12.0398C21.75 9.45393 20.7228 6.97398 18.8943 5.1455C17.0658 3.31702 14.5859 2.28979 12 2.28979C9.41414 2.28979 6.93419 3.31702 5.10571 5.1455C3.27723 6.97398 2.25 9.45393 2.25 12.0398C2.25 14.6257 3.27723 17.1056 5.10571 18.9341C6.93419 20.7626 9.41414 21.7898 12 21.7898ZM12 24.0398C15.1826 24.0398 18.2348 22.7755 20.4853 20.5251C22.7357 18.2746 24 15.2224 24 12.0398C24 8.8572 22.7357 5.80495 20.4853 3.55451C18.2348 1.30408 15.1826 0.0397949 12 0.0397949C8.8174 0.0397949 5.76516 1.30408 3.51472 3.55451C1.26428 5.80495 0 8.8572 0 12.0398C0 15.2224 1.26428 18.2746 3.51472 20.5251C5.76516 22.7755 8.8174 24.0398 12 24.0398ZM13.5 16.5398C13.5 16.9376 13.342 17.3192 13.0607 17.6005C12.7794 17.8818 12.3978 18.0398 12 18.0398C11.6022 18.0398 11.2206 17.8818 10.9393 17.6005C10.658 17.3192 10.5 16.9376 10.5 16.5398C10.5 16.142 10.658 15.7604 10.9393 15.4791C11.2206 15.1978 11.6022 15.0398 12 15.0398C12.3978 15.0398 12.7794 15.1978 13.0607 15.4791C13.342 15.7604 13.5 16.142 13.5 16.5398ZM13.125 7.16479C13.125 6.86643 13.0065 6.58028 12.7955 6.3693C12.5845 6.15832 12.2984 6.03979 12 6.03979C11.7016 6.03979 11.4155 6.15832 11.2045 6.3693C10.9935 6.58028 10.875 6.86643 10.875 7.16479V12.4148C10.875 12.7132 10.9935 12.9993 11.2045 13.2103C11.4155 13.4213 11.7016 13.5398 12 13.5398C12.2984 13.5398 12.5845 13.4213 12.7955 13.2103C13.0065 12.9993 13.125 12.7132 13.125 12.4148V7.16479Z" fill="#FF4040"/>
          </svg>
        </span>
      )}
    </div>
  )
}
