import { Path, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import type { FormValues } from '@/components/Form'
import { memo } from 'react'

type InputProps = {
  type: 'text' | 'tel' | 'email'
  name: Path<FormValues>
  label: string
  placeholder?: string
}

const Input = ({ placeholder, name, label, type }: InputProps) => {
  // console.log('Input')
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <div className="flex flex-col space-y-2">
        <label>
          <span className="text-sm">{label}</span>
          <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className="w-full font-normal border-2 border-slate-200 focus:outline-none focus:shadow-none appearance-none cursor-text btn"
          />
        </label>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <span className="text-sm text-red-600">{message}</span>
          )}
        />
        {/* <span className="text-sm text-red-600">{errors[label]?.message}</span> */}
      </div>
    </>
  )
}

export default memo(Input)
