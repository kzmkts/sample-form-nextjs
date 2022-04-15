import { Path, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import type { FormValues } from '@/components/Form'
import { memo } from 'react'

type InputProps = {
  name: Path<FormValues>
  placeholder?: string
}

const Textarea = ({ placeholder, name }: InputProps) => {
  // console.log('TextArea')
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <textarea
        placeholder={placeholder}
        {...register(name)}
        className="p-4 w-full h-60 font-normal leading-relaxed border-2 border-slate-200 focus:outline-none focus:shadow-none active:scale-100 appearance-none cursor-text btn"
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <span className="text-sm text-red-600">{message}</span>
        )}
      />
    </>
  )
}

export default memo(Textarea)
