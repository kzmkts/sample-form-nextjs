import React, { useMemo, useState } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

import ContactInfo from '@/components/ContactInfo'
import Foods from '@/components/Foods'
import Anime from '@/components/Anime'
import Confirm from '@/components/Confirm'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export type FormValues = {
  name: string
  email: string
  tel: string
  foods: string[]
  anime: string
}

const telRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const REQUIRE_MSG = '入力が必要な項目です'
const VIOLATION_EMAIL_MSG = '正しいメールの形式で入力してください'
const VIOLATION_TEL_MSG = '正しい電話番号の形式で入力してください'
const VIOLATION_NAME_COUNT_MSG = '名前は16文字以下で入力してください'
const VIOLATION_AT_LEAST_ONE_MSG = '項目を1つ以上選択してください'

const schema = yup
  .object({
    name: yup.string().required(REQUIRE_MSG).max(16, VIOLATION_NAME_COUNT_MSG),
    email: yup.string().email(VIOLATION_EMAIL_MSG).required(REQUIRE_MSG),
    tel: yup
      .string()
      .required(REQUIRE_MSG)
      .matches(telRegExp, VIOLATION_TEL_MSG),
    anime: yup.string().required(VIOLATION_AT_LEAST_ONE_MSG),
    foods: yup
      .array(yup.string().required())
      .default([])
      .required()
      .min(1, VIOLATION_AT_LEAST_ONE_MSG),
  })
  .required()

const Form = () => {
  const totalSteps = 4
  const [currentStep, setCurrentStep] = useState(1)

  const progressBar = useMemo(() => {
    return (100 / totalSteps) * currentStep + '%'
  }, [currentStep])

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      tel: '',
      anime: '',
      foods: [],
    },
    resolver: yupResolver(schema),
  })

  const goNextStep = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const currentValidation = ():
      | keyof FormValues
      | Array<keyof FormValues>
      | undefined => {
      switch (currentStep) {
        case 1:
          return 'foods'
        case 2:
          return 'anime'
        case 3:
          return ['name', 'email', 'tel']
        default:
          break
      }
    }
    const result = await methods.trigger(currentValidation())
    if (result) {
      if (currentStep !== totalSteps) setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }
  const goPrevStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (currentStep !== 1) setCurrentStep(currentStep - 1)
  }

  const onSubmit: SubmitHandler<FormValues> = () => {
    alert('送信完了！')
  }

  return (
    <>
      <div className="px-3 mx-auto mt-10 max-w-sm">
        <div className="mr-1 mb-1 text-lg font-medium text-right">{`STEP ${currentStep}/${totalSteps}`}</div>
        <div className="h-2 bg-slate-300 rounded-full">
          <div
            className="h-full bg-orange-600 rounded-full"
            style={{ width: progressBar }}
          ></div>
        </div>
      </div>
      <FormProvider {...methods}>
        <div className="flex flex-col py-10 px-3 mx-auto space-y-10 max-w-sm">
          <form
            name="contact"
            data-netlify="true"
            className="flex flex-col flex-1 space-y-10 w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="flex-1">
              {currentStep === 1 && <Foods />}
              {currentStep === 2 && <Anime />}
              {currentStep === 3 && <ContactInfo />}
              {currentStep === 4 && <Confirm />}
            </div>

            <div className="flex justify-between items-center mx-2 space-x-5">
              <div>
                {currentStep !== 1 && (
                  <button
                    type="button"
                    onClick={goPrevStep}
                    className="px-8 text-white bg-slate-500 hover:bg-slate-600 btn"
                  >
                    戻る
                  </button>
                )}
              </div>
              <div>
                {currentStep < totalSteps - 1 && (
                  <button
                    className="px-8 text-white bg-green-600 hover:bg-green-700 disabled:opacity-20 btn"
                    onClick={async (e) => {
                      await goNextStep(e)
                    }}
                  >
                    次へ
                  </button>
                )}
                {currentStep === totalSteps - 1 && (
                  <button
                    className="px-8 text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-20 btn"
                    onClick={async (e) => {
                      await goNextStep(e)
                    }}
                  >
                    確認
                  </button>
                )}
                {currentStep === totalSteps && (
                  <button
                    className="inline-flex justify-center items-center px-8 space-x-2 text-white bg-orange-700 hover:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed btn"
                    type="submit"
                  >
                    送信
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </FormProvider>
    </>
  )
}

export default Form
