import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-opacity-20 border-blue-500 border-t-blue-500">

      </div>
    </div>
    </Html>
  )
}

export default Loader
