import { Head, Link, router } from '@inertiajs/react';
import { iTeach, iGame, register, pendaftaranITeach } from '@/routes';
import { ArrowRight, Play } from 'lucide-react';

function CtaButton({
    href,
    children,
    icon,
    primary = false,
    external = false,
}: {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    primary?: boolean;
    external?: boolean;
}) {
    const className = `inline-flex items-center gap-2 border-4 border-[#172238] px-4 py-3 font-mono text-[10px] font-bold tracking-wide shadow-[4px_4px_0_#172238] transition-all duration-75 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#172238] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#172238] ${
        primary ? 'bg-[#f5c54e] text-[#172238]' : 'bg-[#49000A] text-[#FFF9EC]'
    }`;

    const content = (
        <>
            {icon}
            {children}
            <ArrowRight className="size-3" />
        </>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {content}
        </Link>
    );
}

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({
    label,
    value,
    sub,
    icon,
}: {
    label: string;
    value: string;
    sub?: string;
    icon?: React.ReactNode;
}) {
    return (
        <div className="flex flex-col justify-between bg-[#FFF9EC] p-4 sm:p-5">
            <div className="mb-3 flex items-start justify-between">
                <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#574143] uppercase">
                    {label}
                </span>
                {icon && (
                    <span className="text-[#800A2C] opacity-60">{icon}</span>
                )}
            </div>
            <div>
                <p className="font-grotesk text-3xl font-black leading-none tracking-tight text-[#172238] sm:text-4xl">
                    {value}
                </p>
                {sub && (
                    <p className="font-jakarta mt-1 text-[10px] font-bold tracking-widest text-[#574143] uppercase">
                        {sub}
                    </p>
                )}
            </div>
        </div>
    );
}

// ─── Competition Card ─────────────────────────────────────────────────────────
function CompCard({
    tag,
    deadline,
    title,
    description,
    detailHref,
    ctaLabel,
    ctaHref,
    ctaExternal,
}: {
    tag: string;
    deadline: string;
    title: string;
    description: string;
    detailHref: string;
    ctaLabel: string;
    ctaHref: string;
    ctaExternal?: boolean;
}) {
    return (
        <div className="flex flex-col justify-between border-[3px] border-[#172238] bg-[#FFF9EC] p-5 shadow-[4px_4px_0px_0px_#172238] sm:p-6">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
                <span className="border-2 border-[#172238] bg-[#F4EDDD] px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-[#172238] uppercase">
                    TIM: 2–3 MAHASISWA
                </span>
                <span className="border-2 border-[#172238] bg-[#FFE087] px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-[#172238] uppercase">
                    {tag}
                </span>
            </div>

            {/* Title */}
            <h3 className="font-grotesk mb-3 text-xl font-black leading-tight tracking-tight text-[#550017] uppercase sm:text-2xl">
                {title}
            </h3>

            {/* Description */}
            <p className="font-jakarta mb-6 text-sm leading-relaxed text-[#172238]">
                {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
                <CtaButton href={detailHref}>
                    {ctaLabel === 'DISCORD CHANNEL' ? 'LIHAT DETAIL' : 'LIHAT DETAIL'}
                </CtaButton>
                <CtaButton
                    href={ctaHref}
                    primary
                    external={ctaExternal}
                    icon={ctaLabel === 'DAFTAR SEKARANG' ? <Play className="size-3.5 fill-current" /> : undefined}
                >
                    {ctaLabel}
                </CtaButton>
            </div>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Welcome() {
    return (
        <>
            <Head title="IGNITE — Education & Digital Innovation Competition" />

            <div className="w-full overflow-x-hidden bg-[#FFF9EC] text-[#1E1E1E]">
                
                {/* ── HERO ──────────────────────────────────────────── */}
                <section
                    id="beranda"
                    className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden border-b-4 border-[#1E1E1E] bg-[#FFF9EC] px-5 pt-10 pb-10 text-center sm:px-8"
                >
                    {/* Decorative Background Blur (Glow) */}
                    <div className="pointer-events-none absolute top-[-5%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#8A3A3A] opacity-20 blur-[100px]" />

                    <div className="relative z-10 -translate-y-2 flex flex-col items-center justify-center">
                        {/* Main title */}
                        <h1 
                            className="font-mono mb-3 text-[42px] font-bold uppercase text-[#550017] sm:text-[42px]"
                            style={{ 
                                lineHeight: '1', 
                                letterSpacing: '0px',
                                textShadow: '2px 2px 0px #1E1E1E'
                            }}
                        >
                            IGNITE
                        </h1>

                        {/* Subtitle badge */}
                        <div className="mb-1 -rotate-2 border-2 border-[#1E1E1E] bg-[#FFDDB4] px-3 py-1.5 shadow-[3px_3px_0px_0px_#1E1E1E] z-10">
                            <span className="font-mono text-xs font-bold tracking-[0.1em] text-[#1E1E1E] uppercase sm:text-sm">
                                EDUCATION &amp; DIGITAL INNOVATION COMPETITION
                            </span>
                        </div>

                        {/* Tagline badge */}
                        <div className="mb-10 border-2 border-[#1E1E1E] bg-[#FFF9EC] px-3 py-1.5 shadow-[3px_3px_0px_0px_#1E1E1E]">
                            <span className="font-mono text-xs font-bold tracking-[0.1em] text-[#550017] uppercase sm:text-sm">
                                "IGNITE IDEAS, INSPIRE INNOVATION, SHAPE THE FUTURE."
                            </span>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={() =>
                                document
                                    .getElementById('challenges')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="flex cursor-pointer items-center gap-2 border-2 border-[#1E1E1E] bg-[#550017] px-9 py-3 font-mono text-xs font-bold tracking-widest text-white uppercase shadow-[3px_3px_0px_0px_#1E1E1E] transition-all duration-75 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#72001f] hover:shadow-[5px_5px_0px_0px_#1E1E1E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1E1E1E]"
                        >
                            VIEW COMPETITIONS
                        </button>
                    </div>
                </section>

                {/* ── ABOUT ─────────────────────────────────────────── */}
                <section id="about" className="border-b-4 border-[#1E1E1E] bg-[#FFF9EC] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
                    <div className="mx-auto max-w-5xl">
                        {/* Main About Box */}
                        <div className="relative border-[3px] border-[#000000] bg-[#F4EDDD] px-8 py-10">
                            {/* Decorative corner circles */}
                            <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full border-2 border-[#000000] bg-[#FFE087]" />
                            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full border-2 border-[#000000] bg-[#FFE087]" />
                            <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full border-2 border-[#000000] bg-[#FFE087]" />
                            <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full border-2 border-[#000000] bg-[#FFE087]" />

                            {/* Header row */}
                            <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                                <h2 className="font-grotesk text-2xl font-black tracking-wide text-[#172238] uppercase sm:text-3xl">
                                    ABOUT IGNITE
                                </h2>
                                <span className="border-2 border-[#172238] bg-[#FFE087] px-3 py-1 font-mono text-[9px] font-bold tracking-[0.12em] text-[#172238] uppercase">
                                    ● UNIVERSITAS-PENDIDIKAN-INDONESIA
                                </span>
                            </div>

                            {/* Description */}
                            <p className="font-jakarta text-sm leading-7 text-[#172238] sm:text-base">
                                IGNITE 2026 merupakan kompetisi inovasi pendidikan dan teknologi digital bagi
                                mahasiswa Indonesia untuk menghadirkan ide kreatif, inovatif, aplikatif, dan
                                berdampak dalam menjawab tantangan pendidikan di era digital.
                            </p>
                        </div>

                        {/* Stats — separate cards below */}
                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {/* Card 1: Challenges */}
                            <div className="relative border-[3px] border-[#000000] bg-white p-5">
                                <div className="mb-3 flex items-start justify-between">
                                    <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[#574143] uppercase">
                                        CHALLENGES
                                    </span>
                                    <span className="text-[#550017] opacity-70">⊞</span>
                                </div>
                                <p className="font-grotesk text-4xl font-black leading-none text-[#550017]">
                                    02
                                </p>
                                <p className="font-mono mt-2 text-[9px] font-bold tracking-[0.15em] text-[#574143] uppercase">
                                    COMPETITION
                                </p>
                            </div>

                            {/* Card 2: Bounty */}
                            <div className="relative border-[3px] border-[#000000] bg-white p-5">
                                <div className="mb-3 flex items-start justify-between">
                                    <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[#574143] uppercase">
                                        BOUNTY
                                    </span>
                                    <span className="text-[#550017] opacity-70">◎</span>
                                </div>
                                <p className="font-grotesk text-4xl font-black leading-none text-[#550017]">
                                    75M+
                                </p>
                                <p className="font-mono mt-2 text-[9px] font-bold tracking-[0.15em] text-[#574143] uppercase">
                                    TOTAL PRIZE POOL (IDR)
                                </p>
                            </div>

                            {/* Card 3: Terbuka Untuk */}
                            <div className="relative border-[3px] border-[#000000] bg-white p-5">
                                <div className="mb-3 flex items-start justify-between">
                                    <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[#574143] uppercase">
                                        TERBUKA UNTUK
                                    </span>
                                    <span className="text-[#550017] opacity-70">◈</span>
                                </div>
                                <p className="font-grotesk text-3xl font-black leading-none text-[#550017] sm:text-4xl">
                                    MAHASISWA
                                </p>
                                <p className="font-mono mt-2 text-[9px] font-bold tracking-[0.15em] text-[#574143] uppercase">
                                    DARI BERBAGAI PERGURUAN TINGGI DI INDONESIA
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SELECT CHALLENGE ──────────────────────────────── */}
                <section id="challenges" className="border-b-4 border-[#1E1E1E] bg-[#FFF9EC] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
                    <div className="mx-auto max-w-5xl">
                        <p className="font-mono mb-2 text-[9px] font-bold tracking-[0.25em] text-[#800A2C] uppercase">
                            ▸ SELECT STAGE TO DEPLOY
                        </p>
                        <h2 className="font-grotesk mb-8 text-3xl font-black tracking-tight text-[#172238] uppercase sm:text-4xl lg:text-5xl">
                            SELECT YOUR CHALLENGE
                        </h2>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <CompCard
                                tag="DEADLINE: 1 OKT 2026"
                                deadline="AUG 15 – OCT 20"
                                title="ITEACH — INNOVATIVE TECHNOLOGY-ENHANCED TEACHING CHALLENGE"
                                description="Tantangan merancang media pembelajaran interaktif berbasis web, AI pedagogi adaptif, atau simulasi/edukasi interaktif untuk merevolusi ekosistem kelas dan memecahkan disparitas belajar di Indonesia."
                                detailHref={iTeach().url}
                                ctaLabel="DAFTAR SEKARANG"
                                ctaHref={pendaftaranITeach().url}
                            />
                            <CompCard
                                tag="DEADLINE: 1 OKT 2026"
                                deadline="AUG 15 – OCT 20"
                                title="IGAME — ISOLA GAME JAM"
                                description="Tantangkan diri merancang dan mengimplementasikan game indie original dalam 48 jam turut-turun sesuai tema misteri yang dirilis serentak."
                                detailHref={iGame().url}
                                ctaLabel="DISCORD CHANNEL"
                                ctaHref="https://discord.gg/P8KUFj4v6"
                                ctaExternal
                            />
                        </div>
                    </div>
                </section>

                {/* ── CTA BANNER ────────────────────────────────────── */}
                <section className="border-b-4 border-[#1E1E1E] bg-[#FFF9EC] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
                    <div className="mx-auto max-w-5xl">
                        <div className="relative overflow-hidden border-[3px] border-[#000000] bg-[#72001f] px-8 py-16 text-center shadow-[6px_6px_0px_0px_#000000] sm:px-12 lg:py-20">
                            {/* Decorative accent */}
                            <div className="pointer-events-none absolute top-4 left-4 flex gap-1">
                                <span className="h-3 w-3 bg-[#FFE087]" />
                                <span className="h-3 w-3 bg-[#BA1A1A]" />
                            </div>
                            <div className="pointer-events-none absolute top-5 right-5 font-mono text-[10px] font-bold tracking-widest text-[#FFE087] uppercase">
                                CREDITS: ∞ UNLIMITED
                            </div>

                            <div className="mx-auto max-w-2xl">
                                <h2 className="font-grotesk mb-4 text-4xl font-black italic tracking-tight text-[#FFF9EC] uppercase sm:text-5xl lg:text-6xl">
                                    READY PLAYER?
                                </h2>
                                <p className="font-grotesk mb-4 text-sm font-bold tracking-widest text-[#FFE087] uppercase sm:text-base">
                                    PILIH MISIMU. CIPTAKAN KARYA BERDAMPAK. NYALAKAN INOVASIMU!
                                </p>
                                <p className="font-jakarta text-sm leading-relaxed text-[#f4cdd0] sm:text-base">
                                    Pendaftaran dibuka untuk seluruh mahasiswa perguruan tinggi di
                                    Indonesia. Bentuk tim terbaikmu dan kirimkan proposal sebelum slot
                                    kualifikasi habis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
