import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Home() {
  const { userData } = useSelector((state) => state.userData)

    useEffect(() => {
    console.log(userData);
    

  }, [])
  
  return (
    <div>Home</div>
  )
}
