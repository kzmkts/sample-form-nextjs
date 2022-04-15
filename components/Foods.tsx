import { memo } from 'react'
import Checkbox from '@/components/parts/Checkbox'

const values = ['お寿司', '天ぷら', 'すき焼き', '納豆', '刺身', 'うどん']

const Foods = () => {
  return (
    <>
      <div className="mb-8 space-y-2">
        <p className="text-lg font-medium">好きな食べ物を選択して下さい</p>
      </div>
      <div className="space-y-5">
        <Checkbox name="foods" values={values} />
      </div>
    </>
  )
}

export default memo(Foods)
