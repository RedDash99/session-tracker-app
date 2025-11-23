import { Reorder, useMotionValue } from 'framer-motion'
import { useRaisedShadow } from '@/hooks/useRaisedShadow'
import FeedCard from '../FeedCard/FeedCard'

export const Item = ({ item }) => {
  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)
  return (
    <Reorder.Item
      value={item}
      id={item.id.toString()}
      style={{
        boxShadow,
        y,
        borderRadius: 12,
        cursor: 'grab',
      }}
    >
      <FeedCard title={item.title} description={item.description} timeline={item.timeline} />
    </Reorder.Item>
  )
}
