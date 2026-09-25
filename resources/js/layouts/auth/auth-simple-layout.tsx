import type { AuthLayoutProps } from '@/types';
import Navbar from '@/components/navbar';
import AuthFooter from '@/components/auth-footer';

export default function AuthSimpleLayout({
    children,
}: AuthLayoutProps) {
    return (
        <div className="bg-[#7B0828] relative min-h-screen flex flex-col items-center justify-between">
            <Navbar />
            <main className="w-full flex-1 flex items-center justify-center px-4 py-28 md:py-32">
                <div className="w-full max-w-3xl bg-white border-4 border-[#1E1E1E] shadow-[6px_6px_0px_0px_#1E1E1E] md:shadow-[8px_8px_0px_0px_#1E1E1E] rounded-md p-6 md:p-10">
                    <div className="flex flex-col gap-6">
                        {children}
                    </div>
                </div>
            </main>
            <AuthFooter />
        </div>
    );
}
