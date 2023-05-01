import React from "react";
import {Link} from 'react-router-dom';
import {BsApple} from 'react-icons/bs';
import {BsFillPencilFill} from 'react-icons/bs';
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "./context/AuthContext";

export default function Navbar() {
    const {user, login, logout} = useAuthContext();

    return (
        <header className="flex justify-between border-b border-gray-300 p-2"> 
            <Link to='/' className='flex items-center text-4xl text-brand'>
                <BsApple />
                <h1>Store</h1>
            </Link>
            <nav className="flex items-center gap-4 font-semibold">
                <Link to='/products'>Products</Link>
                {user && <Link to='/carts'>Carts</Link>}
                {user && user.isAdmin && (
                    <Link to='/products/new' className='text-2xl'>
                        <BsFillPencilFill />
                    </Link>
                )}
                {user && <User user={user} />}
                {!user && <Button onClick={login} text={'Login'} />}
                {user && <Button onClick={logout} text={'Logout'} />}
            </nav>
        </header>
    )
}