import { usePathname } from "next/navigation"
import { categories } from "../constants"
import Navlink from "./Navlink"


const Navlinks = () => {

    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path
    }

  return (
    <nav
        className="mt-[35px] grid sm:grid-cols-4 ss:grid-cols-3 grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-[20px] pb-10 lg:px-6 px-10
        max-w-[1280px] mx-auto"
    >
        {categories.map((category) => (
            <Navlink
                key={category}
                category={category}
                isActive={isActive(category)}
            />
        ))}
    </nav>
  )
}

export default Navlinks