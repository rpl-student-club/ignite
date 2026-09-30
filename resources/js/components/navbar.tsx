import { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { home, iTeach, iGame } from '@/routes';

export default function Navbar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { name: 'BERANDA', href: home().url },
        { name: 'I-TEACH', href: iTeach().url },
        { name: 'I-GAME', href: iGame().url },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 z-50 w-full border-b-2 border-[#1E1E1E] bg-[#FFF9ECF2]"
        >
            <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-12">
                <div className="flex flex-col justify-center">
                    <span className="font-grotesk text-xl leading-none font-black tracking-widest text-[#550017] md:text-2xl">
                        IGNITE
                    </span>
                    <span className="mt-1 text-[10px] font-bold tracking-widest text-[#574143] uppercase md:text-xs">
                        DIGITAL ARCADE '26
                    </span>
                </div>

                {/* nav desktop */}
                <div className="hidden items-center space-x-2 rounded-sm border-2 border-[#1E1E1E] bg-[#FAF5E9] p-1.5 shadow-[2px_2px_0px_0px_#1E1E1E] md:flex">
                    {navItems.map((item) => {
                        const isActive =
                            url === item.href || url.endsWith(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`rounded-none px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-75 ${
                                    isActive
                                        ? '-translate-x-px -translate-y-px border-2 border-[#1E1E1E] bg-[#800A2C] text-white shadow-[3px_3px_0px_0px_#1E1E1E]'
                                        : 'text-[#5C061C] hover:-translate-x-px hover:-translate-y-px hover:border-2 hover:border-[#1E1E1E] hover:bg-[#800A2C] hover:text-white hover:shadow-[3px_3px_0px_0px_#1E1E1E] active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0px_0px_#1E1E1E]'
                                } `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* mobile hamburger button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer items-center justify-center border-2 border-[#1E1E1E] bg-[#FAF5E9] p-2 text-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E] active:translate-x-0.5 active:translate-y-0.5 md:hidden"
                    aria-label="Toggle Navigation"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* mobile menu dropdown */}
            {isOpen && (
                <div className="animate-in slide-in-from-top-2 space-y-3 border-t-2 border-[#1E1E1E] bg-[#FAF5E9] p-4 shadow-lg duration-150 md:hidden">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => {
                            const isActive =
                                url === item.href || url.endsWith(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`w-full rounded-none border-2 border-[#1E1E1E] py-3 text-center text-xs font-bold tracking-widest uppercase transition-all duration-75 ${
                                        isActive
                                            ? 'bg-[#800A2C] text-white shadow-[2px_2px_0px_0px_#1E1E1E]'
                                            : 'bg-[#FFF9EC] text-[#5C061C] hover:bg-[#800A2C] hover:text-white'
                                    } `}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
