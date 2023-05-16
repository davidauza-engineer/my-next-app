import topics from '../../../api/topics';

// @ts-ignore
export default function Name({ params }) {
  const topic = topics.find(topic => topic.id === params.name)

  return (
      <h1>Learn {topic?.id}</h1>
  )
}
