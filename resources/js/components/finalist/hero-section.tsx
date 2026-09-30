import { Star, Trophy } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="mx-auto w-full space-y-6 text-[#550017]">
            <div className="flex flex-col items-start justify-between gap-6 border-b-2 border-[#550017]/10 pb-4 md:flex-row md:items-center">
                <div className="max-w-3xl space-y-3">
                    <div className="flex items-center gap-2 md:gap-4">
                        <Star className="h-6 w-6 fill-[#550017] text-[#550017] md:h-8 md:w-8" />
                        <h1 className="text-3xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
                            FINALIST ITEACH 2026
                        </h1>
                    </div>
                    <p className="font-jakarta text-base leading-relaxed text-gray-700 md:text-lg">
                        Congratulations to the selected teams advancing to the
                        final round of the Innovative Technology-Enhanced
                        Teaching Challenge!
                    </p>
                </div>
                <div className="flex w-full min-w-60 flex-col items-center justify-center self-end rounded-xl border border-amber-200/50 bg-white/70 p-5 shadow-sm backdrop-blur-sm md:w-fit md:self-auto">
                    <Trophy className="mb-2 h-12 w-12 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-black tracking-widest text-[#550017] uppercase">
                        STAGE 04 CLEAR
                    </span>
                    <span className="mt-0.5 text-[11px] font-bold tracking-wider text-gray-500 uppercase">
                        PLAYTEST & JURY
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-none border border-amber-100/40 bg-white/60 p-5 shadow-sm backdrop-blur-sm">
                    <span className="mb-1 block text-xs font-extrabold tracking-widest text-[#550017] uppercase">
                        ANNOUNCED
                    </span>
                    <span className="text-xl font-black text-[#550017] md:text-2xl">
                        20 OKT 2026
                    </span>
                </div>
                <div className="rounded-none border border-amber-100/40 bg-white/60 p-5 shadow-sm backdrop-blur-sm">
                    <span className="mb-1 block text-xs font-extrabold tracking-widest text-[#550017] uppercase">
                        STAGE LEVEL
                    </span>
                    <span className="text-xl font-black text-gray-500 md:text-2xl">
                        IN REVIEW
                    </span>
                </div>
            </div>
        </section>
    );
}
