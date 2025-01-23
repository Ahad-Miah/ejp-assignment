import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
        <div className=" bg-base-300 sticky z-10 top-0 ">
            <div className="navbar flex items-center container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link href={"/"}> <li className="font-semibold"><p>Home</p></li></Link>
                            <Link href={"/myProfile"}><li className="font-semibold"><p>My Profile</p></li></Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl hidden sm:block mt-3">BlogSphere</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link href={"/"}> <li className="font-semibold"><p>Home</p></li></Link>
                        <Link href={"/myProfile"}><li className="font-semibold"><p>My Profile</p></li></Link>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    {
                        user?<LogoutLink className="btn">Log out</LogoutLink>:<>
                         <RegisterLink className="btn">Sign up</RegisterLink>
                         <LoginLink className="btn">Sign in</LoginLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;