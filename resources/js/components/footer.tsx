import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="flex min-h-[35vh] w-full flex-col justify-between border-t-4 border-[#1E1E1E] bg-[#7B0828] px-6 pt-10 pb-8 text-[#FAF5E9] sm:px-12">
            <div className="my-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="space-y-2 lg:col-span-5">
                    <h2 className="font-grotesk text-2xl font-extrabold tracking-wider text-[#E8C248] uppercase md:text-3xl">
                        IGNITE '26
                    </h2>
                    <h3 className="font-grotesk text-xl leading-tight font-bold tracking-tight text-white md:text-2xl">
                        Education & Digital Innovation Competition
                    </h3>
                    <p className="font-jakarta pt-2 text-sm tracking-wide text-[#D8B4BC] italic md:pt-4 md:text-base">
                        "Ignite Ideas, Inspire Innovation, Shape the Future."
                    </p>
                </div>
                <div className="space-y-3 lg:col-span-4">
                    <h4 className="border-b-2 border-[#960b2e] pb-2 text-xs font-bold tracking-widest text-[#E8C248] uppercase md:text-sm lg:text-base">
                        PETA TURNAMEN
                    </h4>
                    <div className="grid grid-cols-2 gap-3 pt-1 text-sm">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="#beranda"
                                className="font-jakarta text-sm text-gray-200 transition-colors hover:text-white hover:underline md:text-base"
                            >
                                Beranda
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="#i-teach"
                                className="font-jakarta text-sm text-gray-200 transition-colors hover:text-white hover:underline md:text-base"
                            >
                                I-Teach
                            </Link>
                            <Link
                                href="#i-game"
                                className="font-jakarta text-sm text-gray-200 transition-colors hover:text-white hover:underline md:text-base"
                            >
                                I-Game
                            </Link>
                            <Link
                                href="/pendaftaran-i-teach"
                                className="font-jakarta text-sm text-gray-200 transition-colors hover:text-white hover:underline md:text-base"
                            >
                                Pendaftaran I-Teach
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 lg:col-span-3">
                    <h4 className="border-b-2 border-[#960b2e] pb-2 text-xs font-bold tracking-widest text-[#E8C248] uppercase md:text-sm lg:text-base">
                        MARKAS PANITIA
                    </h4>
                    <p className="font-jakarta text-sm leading-relaxed text-gray-200 md:text-base">
                        Diselenggarakan oleh {` `}
                        <Link
                            href="https://upi.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer font-bold text-white hover:underline"
                        >
                            Universitas Pendidikan Indonesia
                        </Link>
                    </p>
                    <div className="space-y-1.5 pt-1 text-[11px] font-bold tracking-wider text-[#FFB2B9] uppercase md:text-xs">
                        <p>EMAIL: halo@ignite-competition.id</p>
                        <p>DISCORD: IGNITE Arcade Server #2026</p>
                        <p>LOKASI: Bandung, Jawa Barat</p>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-dashed border-[#1E1E1E] pt-6 text-[11px] font-bold tracking-widest text-gray-300 uppercase sm:flex-row">
                <div>2026 IGNITE INDONESIA. ALL RIGHTS RESERVED.</div>
                <div className="flex items-center space-x-6">
                    <Link
                        href="#privasi"
                        className="transition-colors hover:text-white hover:underline"
                    >
                        PRIVASI
                    </Link>
                    <Link
                        href="#ketentuan"
                        className="transition-colors hover:text-white hover:underline"
                    >
                        KETENTUAN
                    </Link>
                </div>
            </div>
        </footer>
    );
}
