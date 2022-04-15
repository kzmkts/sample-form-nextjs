import { memo } from 'react'
import Radio from '@/components/parts/Radio'

const values = ['Naruto', 'DRAGON BALL', 'DEATH NOTE', 'ONE PIECE', 'AKIRA']
const Anime = () => (
  <>
    <div className="mb-8 space-y-2">
      <p className="text-lg font-medium">一番好きなアニメを選択して下さい</p>
    </div>
    <div className="flex flex-col space-y-5">
      <Radio name="anime" values={values} />
    </div>
  </>
)

export default memo(Anime)
