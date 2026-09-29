import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { usePage } from '@inertiajs/react';

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { component } = usePage();
    const isWelcome = component === 'welcome';

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-between bg-[#FFF9EC]">
            <Navbar />
            <main className={`relative flex w-full flex-1 items-center justify-center text-[#550017] ${isWelcome ? 'pt-16' : 'px-4 py-28 md:px-12 md:py-32'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
