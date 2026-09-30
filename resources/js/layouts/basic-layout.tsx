import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function BasicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-between bg-[#FFF9EC]">
            <Navbar />
            <main className="relative flex w-full flex-1 items-center justify-center pt-20 text-[#550017] md:pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}
