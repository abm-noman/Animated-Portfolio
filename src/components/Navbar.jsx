import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">NMN</p>
        </NavLink>
        <nav>
            <ul className="flex text-lg gap-7 font-medium space-x-4">
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black-700 hover:text-blue-300"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black-700 hover:text-blue-300"}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500" : "text-black-700 hover:text-blue-300"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
