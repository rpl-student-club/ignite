import { router, Link, usePage } from "@inertiajs/react";
import { Box } from "lucide-react";
import { login, home } from "@/routes";

export default function Navbar() {
    const { url } = usePage();

    const navItems = [
        { name: 'BERANDA', href: home().url },
        { name: 'I-TEACH', href: '#i-teach' },
        { name: 'I-GAME', href: '#i-game' },
    ];

    const handleLoginClicked = () => {
        router.visit(login());
    }

    return (
        <nav className="w-full bg-[#FFF9ECF2] absolute top-0 z-999">
            <div className="mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
                <div className="flex flex-col justify-center">
                    <span className="font-grotesk text-2xl font-black tracking-widest text-[#550017] leading-none">
                        IGNITE
                    </span>
                    <span className="text-xs font-bold tracking-widest text-[#574143] mt-1 uppercase">
                        DIGITAL ARCADE '26
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-2 border-2 border-[#1E1E1E] bg-[#FAF5E9] p-1.5 rounded-sm shadow-[2px_2px_0px_0px_#1E1E1E]">
                    {navItems.map((item) => {
                        const isActive = url === item.href || url.endsWith(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                    text-xs font-bold tracking-widest px-4 py-2 uppercase transition-all duration-75 rounded-none
                                    ${
                                        isActive
                                        ? 'bg-[#800A2C] text-white border-2 border-[#1E1E1E] shadow-[3px_3px_0px_0px_#1E1E1E] -translate-x-px -translate-y-px'
                                        : 'text-[#5C061C] hover:bg-[#800A2C] hover:text-white hover:border-2 hover:border-[#1E1E1E] hover:shadow-[3px_3px_0px_0px_#1E1E1E] hover:-translate-x-px hover:-translate-y-px active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0px_0px_#1E1E1E]'
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
                <div onClick={handleLoginClicked}>
                    <button
                        className="
                            flex items-center space-x-2
                            bg-[#D4A000] text-[#1A1A1A] text-sm
                            font-bold tracking-widest px-5 py-4 cursor-pointer
                            rounded-none border-2 border-[#1A1A1A]
                            shadow-[4px_4px_0px_0px_#1A1A1A]
                            hover:-translate-x-0.5 hover:-translate-y-0.5
                            hover:shadow-[6px_6px_0px_0px_#1A1A1A]
                            hover:bg-[#E5B100]
                            active:translate-x-0.5 active:translate-y-0.5
                            active:shadow-[2px_2px_0px_0px_#1A1A1A]
                            transition-all duration-75 ease-out
                        "
                    >
                        <Box className="w-4 h-4 stroke-[2.5]" />
                        <span>MASUK/LOGIN</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
