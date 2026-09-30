import { Head } from '@inertiajs/react';
import {
    ArrowRight,
    ChevronDown,
    Clock3,
    Download,
    KeyRound,
    Medal,
    Play,
    Presentation,
    ScanSearch,
} from 'lucide-react';
import { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

const schedule = [
    {
        label: '01. REGISTRATION',
        date: 'AUG 15 - OCT 20',
        icon: FlagIcon,
        featured: true,
    },
    {
        label: '02. THEME REVEAL',
        date: 'OCT 24 • 18:00 WIB',
        icon: KeyRound,
    },
    {
        label: '03. 48TH SPRINT',
        date: 'OCT 24 - OCT 26',
        icon: Clock3,
    },
    {
        label: '04. PLAYTEST & JURY',
        date: 'OCT 27 - NOV 01',
        icon: ScanSearch,
    },
    {
        label: '05. FINAL PITCH',
        date: 'NOV 05',
        icon: Presentation,
    },
    {
        label: '06. AWARD CEREMONY',
        date: 'NOV 08',
        icon: Medal,
    },
];

const faqs = [
    'Apakah anggota tim harus berasal dari program studi / fakultas yang sama?',
    'Seberapa jauh tingkat kematangan prototype MVP yang diwajibkan saat babak penyisihan?',
    'Apakah panitia menanggung biaya transportasi dan akomodasi finalis ke Bandung?',
    'Apakah karya yang diikutsertakan boleh menggunakan aset gratis atau open-source?',
    'Apakah diperbolehkan mendaftar di cabang lomba ”iTeach” dan ’Isola Game Jam’ sekaligus?',
];

function FlagIcon({ className }: { className?: string }) {
    return <span className={className}>⚑</span>;
}

export default function ITeach() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            <Head title="I-Teach Detail" />
            <div className="w-full overflow-x-hidden bg-[#fff9e9] text-[#172238]">
                <main className="w-full">
                    <section className="bg-[#72001f] px-5 py-10 text-[#fff9e9] sm:px-8 lg:px-12 lg:py-12">
                        <div className="mx-auto max-w-[1480px]">
                            <p className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-[#e9b6bd]">
                                IGNITE '26 • EDUCATION & DIGITAL INNOVATION
                                COMPETITION
                            </p>
                            <h1 className="font-grotesk max-w-4xl text-4xl leading-[0.96] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                                ITEACH - INNOVATIVE TECHNOLOGY-ENHANCED TEACHING
                                CHALLENGE
                            </h1>
                            <p className="font-jakarta mt-5 max-w-4xl text-base md:text-lg leading-relaxed text-[#f4cdd0]">
                                Panggung kompetisi perancangan terobosan
                                pedagogi digital tingkat nasional. Bangun
                                prototype edutech paling imersif, pecahkan
                                krisis ruang kelas modern, dan menangkan
                                pengakuan prestisius di Universitas Pendidikan
                                Indonesia.
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
                            <div className="mt-6 flex flex-wrap gap-4">
                                <CtaButton
                                    href="/pendaftaran-i-teach"
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
                        </div>
                    </section>

                    <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
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
                            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {schedule.map(
                                    ({ label, date, icon: Icon, featured }) => (
                                        <div
                                            key={label}
                                            className={`min-h-24 border-4 border-[#172238] p-3 ${featured ? 'bg-[#ffdba9]' : 'bg-[#f5eedc]'}`}
                                        >
                                            <div className="flex items-center justify-between font-mono text-xs font-bold tracking-wide">
                                                <span>{label}</span>
                                                <Icon className="size-4 text-[#657084]" />
                                            </div>
                                            <p
                                                className={`mt-3 font-mono text-lg font-bold tracking-wide sm:text-xl ${featured ? 'text-[#172238]' : 'text-[#647087]'}`}
                                            >
                                                {date}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#fff9e9] px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
                        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.7fr]">
                            <div>
                                <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#72001f]">
                                    DEBUG & SUPPORT MANUAL
                                </p>
                                <h2 className="font-grotesk mt-2 text-2xl leading-none font-bold text-[#72001f] uppercase sm:text-3xl">
                                    Frequently Asked Questions (FAQ)
                                </h2>
                                <p className="font-jakarta mt-4 text-sm leading-relaxed text-[#776e6b] md:text-base">
                                    Punya pertanyaan lebih lanjut? Hubungi
                                    narahubung resmi via Discord IGNITE.
                                </p>
                            </div>
                            <div className="space-y-2">
                                {faqs.map((question, index) => {
                                    const isOpen = openFaq === index;
                                    return (
                                        <Collapsible
                                            key={question}
                                            open={isOpen}
                                            onOpenChange={(open) =>
                                                setOpenFaq(open ? index : null)
                                            }
                                            className="w-full"
                                        >
                                            <CollapsibleTrigger className="font-jakarta flex w-full items-center justify-between gap-4 bg-[#f5eedc] px-4 py-3 text-left text-sm font-semibold text-[#292523] transition-colors hover:bg-[#f1e4c6] md:text-base">
                                                {question}
                                                <ChevronDown
                                                    className={`size-4 shrink-0 text-[#72001f] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="font-jakarta border-t border-[#ded1b8] bg-[#f5eedc] px-4 pb-3 text-left text-sm leading-relaxed text-[#776e6b] md:text-base">
                                                Informasi lengkap akan diumumkan
                                                melalui kanal resmi IGNITE '26.
                                            </CollapsibleContent>
                                        </Collapsible>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    <section
                        id="register"
                        className="bg-[#8c062c] px-5 py-12 text-center text-[#fff9e9] sm:px-8 lg:py-16"
                    >
                        <h2 className="font-grotesk mx-auto max-w-3xl text-3xl leading-tight font-bold uppercase sm:text-4xl">
                            Siapkan pasukanmu. Taklukkan arena ITeach 2026!
                        </h2>
                        <p className="font-jakarta mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#f3cdd0] md:text-lg">
                            Registrasi Gelombang 2 ditutup otomatis saat kuota
                            tercapai.
                            <br />
                            Bergabunglah bersama puluhan inovator muda
                            se-Indonesia dan cetak sejarah di panggung nasional.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <CtaButton
                                href="/pendaftaran-i-teach"
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
                            DEADLINE: 15 OKTOBER 2026, 23:59 WIB • BIAYA
                            PENDAFTARAN: GRATIS
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
