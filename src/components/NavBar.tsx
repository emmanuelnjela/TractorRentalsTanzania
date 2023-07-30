import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className="text-white bg-dark-green h-30 py-5 flex justify-between items-center p-5">
      <p className="font-extrabold text-2xl"><NavLink to="/">TractorRentalsTz</NavLink></p>
      <ul className="flex justify-between">
        <li className="">
          <NavLink to="about" className="font-bold">About</NavLink>
        </li>
        <li className="ml-8">
          <NavLink to="vans" className="font-bold">Vans</NavLink>
        </li>
      </ul>
    </div>
  );
} 
