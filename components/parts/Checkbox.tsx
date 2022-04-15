import { memo } from 'react'

import { Path, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { FormValues } from '@/components/Form'

import { FaCheck } from 'react-icons/fa'

type InputProps = {
  values: string[]
  name: Path<FormValues>
}

const Checkbox = ({ values, name }: InputProps) => {
  // console.log('Checkbox')
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext()

  return (
    <>
      <div className="flex flex-col space-y-2">
        {values &&
          values.map((value, idx) => (
            <div key={idx}>
              <label>
                <div className="flex justify-between items-center font-normal hover:bg-slate-100 border-2 btn">
                  <input
                    className="peer hidden appearance-none"
                    type="checkbox"
                    value={value}
                    {...register(name, {
                      onChange: () => {
                        trigger(name)
                      },
                    })}
                  />
                  <span className="mr-5">{value}</span>
                  <span className="w-8 h-8 text-slate-300 peer-checked:text-white bg-white peer-checked:bg-green-600 rounded-full border-4 border-slate-300 peer-checked:border-green-600 transition-all peer-checked:animate-scale centered">
                    <FaCheck className="w-4 h-4 " />
                  </span>
                </div>
              </label>
            </div>
          ))}
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <span className="text-sm text-red-600">{message}</span>
          )}
        />
      </div>
    </>
  )
}

export default memo(Checkbox)
