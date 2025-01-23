import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const MyProfile =async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        redirect("/api/auth/login");
      }

    return (
        <div className="flex items-center justify-center min-h-screen shadow-xl border border-base-300">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Your Profile!</h1>
                <p className="text-gray-700 text-lg mb-4">
                    We're delighted to have you here. This is your personal space where you can explore updates, manage settings, and discover personalized features just for you!.
                </p>
                <p className="text-gray-600 text-base">
                    Stay connected and enjoy the seamless experience built with you in mind. Thank you for being a part of our journey!
                </p>
            </div>
        </div>
    );
};

export default MyProfile;