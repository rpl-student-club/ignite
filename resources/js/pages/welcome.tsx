import { Head, Link, router } from '@inertiajs/react';
import { iTeach, iGame, register } from '@/routes';
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
    const className = `inline-flex items-center gap-2 border-4 border-[#1E1E1E] px-4 py-3 font-mono text-[10px] font-bold tracking-wide shadow-[4px_4px_0_#1E1E1E] transition-all duration-75 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1E1E1E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#1E1E1E] ${
        primary ? 'bg-[#D4A000] text-[#1E1E1E]' : 'bg-[#FFF9EC] text-[#1E1E1E]'
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
        <div className="flex flex-col justify-between border-2 border-[#1E1E1E] bg-[#72001f] p-5 shadow-[4px_4px_0px_0px_#1E1E1E] sm:p-6">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
                <span className="border border-[#e9b6bd] px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-[#e9b6bd] uppercase">
                    TIM: 2–3 ORANG
                </span>
                <span className="border border-[#e9b6bd] px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-[#e9b6bd] uppercase">
                    {tag}
                </span>
                <span className="border border-[#e9b6bd] px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-[#e9b6bd] uppercase">
                    {deadline}
                </span>
            </div>

            {/* Title */}
            <h3 className="font-grotesk mb-3 text-xl font-black leading-tight tracking-tight text-[#FFF9EC] uppercase sm:text-2xl">
                {title}
            </h3>

            {/* Description */}
            <p className="font-jakarta mb-6 text-sm leading-relaxed text-[#f4cdd0]">
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
                    className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FFF9EC] px-5 pt-20 pb-16 text-center sm:px-8"
                >
                    {/* Decorative Background Blur (Glow) */}
                    <div className="pointer-events-none absolute top-[-5%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#8A3A3A] opacity-20 blur-[100px]" />

                    <div className="relative z-10 flex flex-col items-center justify-center">
                        {/* Main title */}
                        <h1 
                            className="font-mono font-bold uppercase text-[#550017] mb-2"
                            style={{ 
                                fontSize: '48px', 
                                lineHeight: '56px', 
                                letterSpacing: '-2.4px',
                                textShadow: '2px 2px 0px #1E1E1E, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF' 
                            }}
                        >
                            IGNITE
                        </h1>

                        {/* Subtitle badge */}
                        <div className="mb-3 border-[3px] border-[#1E1E1E] bg-[#FFF9EC] px-4 py-1.5 shadow-[4px_4px_0px_0px_#1E1E1E]">
                            <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-[#1E1E1E] uppercase sm:text-[11px]">
                                EDUCATION &amp; DIGITAL INNOVATION COMPETITION
                            </span>
                        </div>

                        {/* Tagline badge */}
                        <div className="mb-10 border-[3px] border-[#1E1E1E] bg-[#FFF9EC] px-4 py-1.5 shadow-[4px_4px_0px_0px_#1E1E1E]">
                            <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-[#550017] uppercase sm:text-[11px]">
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
                            className="flex cursor-pointer items-center gap-2 border-[3px] border-[#1E1E1E] bg-[#550017] px-8 py-3.5 font-mono text-[11px] font-bold tracking-widest text-white uppercase shadow-[4px_4px_0px_0px_#1E1E1E] transition-all duration-75 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#72001f] hover:shadow-[6px_6px_0px_0px_#1E1E1E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#1E1E1E]"
                        >
                            VIEW COMPETITIONS
                        </button>
                    </div>
                </section>

                {/* ── ABOUT ─────────────────────────────────────────── */}
                <section id="about" className="bg-[#FFF9EC] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
                    <div className="mx-auto max-w-5xl">
                        <div className="border-2 border-[#1E1E1E] bg-[#FFF9EC] shadow-[6px_6px_0px_0px_#1E1E1E]">
                            {/* Header row */}
                            <div className="flex flex-col items-start justify-between gap-3 border-b-2 border-[#1E1E1E] p-5 sm:flex-row sm:items-center sm:p-6">
                                <h2 className="font-grotesk text-xl font-black tracking-widest text-[#172238] uppercase sm:text-2xl">
                                    ABOUT IGNITE
                                </h2>
                                <span className="border-2 border-[#D4A000] bg-[#D4A000] px-3 py-1 font-mono text-[9px] font-bold tracking-[0.15em] text-[#1A1A1A] uppercase shadow-[2px_2px_0px_0px_#1E1E1E]">
                                    ✦ UNIVERSITAS PENDIDIKAN INDONESIA
                                </span>
                            </div>

                            {/* Description */}
                            <div className="p-5 sm:p-6">
                                <p className="font-jakarta text-sm leading-7 text-[#172238] sm:text-base">
                                    IGNITE 2026 merupakan kompetisi inovasi pendidikan dan teknologi digital bagi
                                    mahasiswa Indonesia untuk menghadirkan ide kreatif, inovatif, aplikatif, dan
                                    berdampak dalam menjawab tantangan pendidikan di era digital.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 border-t-2 border-[#1E1E1E] sm:grid-cols-3">
                                <div className="border-b-2 border-[#1E1E1E] sm:border-b-0 sm:border-r-2">
                                    <StatCard
                                        label="CHALLENGE"
                                        value="02"
                                        sub="COMPETITION"
                                        icon={<span className="text-lg">⊞</span>}
                                    />
                                </div>
                                <div className="border-b-2 border-[#1E1E1E] sm:border-b-0 sm:border-r-2">
                                    <StatCard
                                        label="PRIZE"
                                        value="75M+"
                                        sub="TOTAL PRIZE POOL (IDR)"
                                        icon={<span className="text-lg">◈</span>}
                                    />
                                </div>
                                <div>
                                    <StatCard
                                        label="TERBUKA UNTUK"
                                        value="MAHASISWA"
                                        sub="DARI BERBAGAI PERGURUAN TINGGI DI INDONESIA"
                                        icon={<span className="text-lg">◎</span>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SELECT CHALLENGE ──────────────────────────────── */}
                <section id="challenges" className="bg-[#FFF9EC] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
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
                                ctaHref={register().url}
                            />
                            <CompCard
                                tag="DEADLINE: 1 OKT 2026"
                                deadline="AUG 15 – OCT 20"
                                title="IGAME — ISOLA GAME JAM"
                                description="Tantangkan diri merancang dan mengimplementasikan game indie original dalam 48 jam turut-turun sesuai tema misteri yang dirilis serentak."
                                detailHref={iGame().url}
                                ctaLabel="DISCORD CHANNEL"
                                ctaHref="https://discord.gg/ignite"
                                ctaExternal
                            />
                        </div>
                    </div>
                </section>

                {/* ── CTA BANNER ────────────────────────────────────── */}
                <section className="relative overflow-hidden border-y-4 border-[#1E1E1E] bg-[#72001f] px-5 py-16 text-center sm:px-8 lg:py-20">
                    {/* Decorative accent */}
                    <div className="pointer-events-none absolute top-4 left-4 flex gap-1 opacity-40">
                        <span className="h-2 w-2 bg-[#D4A000]" />
                        <span className="h-2 w-2 bg-[#D4A000]" />
                    </div>
                    <div className="pointer-events-none absolute right-4 bottom-4 font-mono text-[10px] font-bold tracking-widest text-[#e9b6bd] uppercase opacity-60">
                        ENTRIES: ∞ UNLIMITED
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <h2 className="font-grotesk mb-4 text-4xl font-black tracking-tight text-[#FFF9EC] uppercase sm:text-5xl lg:text-6xl">
                            READY PLAYER?
                        </h2>
                        <p className="font-grotesk mb-4 text-base font-bold tracking-widest text-[#D4A000] uppercase sm:text-lg">
                            PILIH MISIMU. CIPTAKAN KARYA BERDAMPAK. NYALAKAN INOVASIMU!
                        </p>
                        <p className="font-jakarta mb-8 text-sm leading-relaxed text-[#f4cdd0] sm:text-base">
                            Pendaftaran dibuka untuk seluruh mahasiswa perguruan tinggi
                            Indonesia. Bentuk tim terbaikmu dan kirimkan proposal sebelum batas
                            waktu habis.
                        </p>
                        <CtaButton
                            href={register().url}
                            primary
                            icon={<Play className="size-3.5 fill-current" />}
                        >
                            DAFTAR SEKARANG
                        </CtaButton>
                    </div>
                </section>

            </div>
        </>
    );
}
