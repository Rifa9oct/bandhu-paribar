import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";

export const metadata = {
    title: "Bandhu paribar | Login page",
    description: "Login page description",
};

const LoginPage = async () => {

    return (
        <div className="py-[100px] px-5">
            <div className="max-w-lg mx-auto shadow-lg border p-8 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Welcome back
                </p>

                <LoginForm />

                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 px-3 bg-white z-10 relative">OR LOGIN WITH</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>

                <SocialLogin />

                <p className="mt-4 text-center text-gray-600">Don&apos;t have an account?
                    <Link href="/register" className="text-[#39b54a] hover:text-[#006837]"> Register Now</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;