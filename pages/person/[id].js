import {useRouter} from 'next/router'


export default function Home() {
    const { query } = useRouter()
  return (
    <div >
        <h1 >
          Welcome People {query.id}
        </h1>
    </div>
  )
}
