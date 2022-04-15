import { memo } from 'react'
import Input from '@/components/parts/Input'

const ContactInfo = () => {
  return (
    <>
      <div className="mb-8 space-y-2">
        <p className="text-lg font-medium">お名前と連絡先をご入力下さい</p>
      </div>
      <div className="space-y-5">
        <Input name="name" label="お名前" type="text" placeholder="John Doe" />
        <Input
          name="email"
          label="メールアドレス"
          type="email"
          placeholder="xxxxxxx@xxx.xxx"
        />
        <Input
          name="tel"
          label="電話番号"
          type="tel"
          placeholder="123-4567-8901"
        />
      </div>
    </>
  )
}

export default memo(ContactInfo)
