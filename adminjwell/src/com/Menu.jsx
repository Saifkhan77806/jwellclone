import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <NavigationMenu className="shadow-none max-sm:m-0 max-md:hidden">
      <NavigationMenuList className="">


        {/* Home option */}
        <NavigationMenuItem className='shadow-none luxuria cursor-pointer hover:font-bold transition-all'>
          <Link to="/">
          Home
          </Link>
        </NavigationMenuItem>


        {/* Features */}

        {/* How its works */}

        <NavigationMenuItem className='luxuria cursor-pointer px-3 hover:font-bold transition-all'>
          <Link to="/aprov" >
        Aprove review
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className='luxuria cursor-pointer px-3 hover:font-bold transition-all'>
          <Link to="/post-blog">
        Post blog
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className='luxuria cursor-pointer px-3 hover:font-bold transition-all'>
          <Link to="/history">
      History
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  )
}

export default Menu