import { Fragment, memo } from 'react'

import { useFormContext } from 'react-hook-form'
import { FormValues } from '@/components/Form'

const Confirm = () => {
  const { getValues } = useFormContext<FormValues>()

  return (
    <>
      <div className="relative mb-8 space-y-2">
        <p className="text-lg font-medium">
          内容を確認の上、送信ボタンを押して下さい。
        </p>
      </div>
      <div className="flex overflow-hidden flex-col space-y-3">
        <div className="rounded border border-gray-300">
          <div className="p-2 font-medium bg-gray-100 border-b border-gray-300">
            お名前
          </div>
          <p className="p-3">{getValues('name')}</p>
        </div>
        <div className="rounded border border-gray-300">
          <div className="p-2 font-medium bg-gray-100 border-b border-gray-300">
            メールアドレス
          </div>
          <p className="p-3 break-words">{getValues('email')}</p>
        </div>
        <div className="rounded border border-gray-300">
          <div className="p-2 font-medium bg-gray-100 border-b border-gray-300">
            電話番号
          </div>
          <p className="p-3">{getValues('tel')}</p>
        </div>
        <div className="rounded border border-gray-300">
          <div className="p-2 font-medium bg-gray-100 border-b border-gray-300">
            好きなアニメ
          </div>
          <p className="p-3">{getValues('anime')}</p>
        </div>
        <div className="rounded border border-gray-300">
          <div className="p-2 font-medium bg-gray-100 border-b border-gray-300">
            好きな食べ物
          </div>
          <ul className="p-3">
            {getValues('foods').map((value, idx) => (
              <li key={idx}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default memo(Confirm)
