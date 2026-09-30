import { Head } from '@inertiajs/react';
import { ArrowRight, Download, Play } from 'lucide-react';
import ComingSoon from '@/components/coming-soon';

export default function IGame() {
    const isComingSoon = true;

    return (
        <>
            <Head title="I-Game Detail" />
            <div className="w-full overflow-x-hidden bg-[#fff9e9] text-[#172238]">
                <main className="w-full">
                    <section className="bg-[#72001f] px-5 py-10 text-[#fff9e9] sm:px-8 lg:px-12 lg:py-12">
                        <div className="mx-auto max-w-370">
                            <p className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-[#e9b6bd]">
                                IGNITE '26 • EDUCATION & DIGITAL INNOVATION
                                COMPETITION
                            </p>
                            <h1 className="font-grotesk max-w-4xl text-4xl leading-[0.96] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                                IGAME - ISOLA GAME JAM
                            </h1>
                            <p className="font-jakarta mt-5 max-w-5xl text-base leading-relaxed text-[#f4cdd0] md:text-lg">
                                Tantangan kilat merancang dan
                                mengimplementasikan game indie original dalam 48
                                jam berturut-turut sesuai tema misterius yang
                                dirilis serentak.
                            </p>
                            <div className="mt-6 grid overflow-hidden rounded-md border-4 border-[#fff9e9] bg-[#fff9e9] text-[#172238] sm:grid-cols-3">
                                <Meta
                                    label="TIER ELIGIBILITY"
                                    value="MAHASISWA D3/D4/S1"
                                />
                                <Meta
                                    label="SQUAD FORMAT"
                                    value="2 - 3 PERSONEL"
                                />
                                <Meta
                                    label="FINAL VENUE"
                                    value="UNIVERSITAS PENDIDIKAN INDONESIA"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="px-5 py-6 sm:px-8 lg:px-12 lg:py-7">
                        <div className="mx-auto max-w-370 border-4 border-[#172238] bg-[#fff9e9] p-4 shadow-[6px_6px_0_#172238] sm:p-6 lg:p-7">
                            <div className="border-b-4 border-[#172238] pb-2">
                                <h2 className="font-grotesk text-2xl font-bold sm:text-3xl">
                                    Rundown & Quest Timeline
                                </h2>
                                <p className="font-jakarta text-sm text-[#655b5b] md:text-base">
                                    Jadwal lengkap kegiatan dari start line
                                    hingga stage final perolehan hadiah.
                                </p>
                            </div>
                            <div className="mt-4">
                                <ComingSoon
                                    description="TUNGGU YA, KAMI SEDANG MEMAKSIMALKAN ACARANYA!!!"
                                    isComingSoon={isComingSoon}
                                />
                            </div>
                        </div>
                    </section>

                    <section
                        id="register"
                        className="bg-[#8c062c] px-5 py-10 text-center text-[#fff9e9] sm:px-8 lg:py-12"
                    >
                        <h2 className="font-grotesk mx-auto max-w-3xl text-3xl leading-tight font-bold uppercase sm:text-4xl">
                            Siapkan pasukanmu. Persiapkan rencanamu di IGame
                            2026!
                        </h2>
                        <p className="font-jakarta mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#f3cdd0] md:text-lg">
                            Registrasi akan otomatis terbuka pada masa
                            pendaftaran. Buatlah grup kamu sekarang dan
                            persiapkan ide untuk dikembangkan.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <CtaButton
                                href="#register"
                                primary
                                icon={
                                    <Play className="size-4 fill-current" />
                                }
                            >
                                DAFTAR SEKARANG
                            </CtaButton>
                            <CtaButton
                                href="#guidebook"
                                icon={<Download className="size-4" />}
                            >
                                UNDUH GUIDEBOOK RESMI (PDF)
                            </CtaButton>
                        </div>
                        <p className="mt-5 font-mono text-xs font-bold tracking-widest text-[#f3cdd0]">
                            DEVELOPMENT PROGRESS • BIAYA PENDAFTARAN: GRATIS
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div className="border-b-2 border-[#eadfc9] p-2 last:border-b-0 sm:border-r-2 sm:border-b-0 sm:last:border-r-0">
            <p className="font-mono text-xs font-bold tracking-widest text-[#665b56]">
                {label}
            </p>
            <p className="mt-1 font-mono text-sm font-bold sm:text-base">
                {value}
            </p>
        </div>
    );
}

function CtaButton({
    href,
    children,
    icon,
    primary = false,
}: {
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    primary?: boolean;
}) {
    return (
        <a
            href={href}
            className={`inline-flex items-center gap-2 border-4 border-[#172238] px-5 py-3.5 font-mono text-sm font-bold tracking-wide shadow-[4px_4px_0_#172238] transition-all duration-75 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#172238] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#172238] ${primary ? 'bg-[#f5c54e] text-[#172238]' : 'bg-[#fff9e9] text-[#172238]'}`}
        >
            {icon}
            {children}
            <ArrowRight className="size-4" />
        </a>
    );
}
