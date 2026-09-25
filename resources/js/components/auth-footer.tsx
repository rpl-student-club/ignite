import { ShieldCheck } from 'lucide-react';

export default function AuthFooter() {
    return (
        <footer className="w-full bg-[#FAF5E9] border-t-2 border-[#1E1E1E] relative md:absolute bottom-0 left-0 z-40">
            <div className="mx-auto px-4 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <div className="space-y-1">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                        <span className="font-grotesk text-lg md:text-xl font-extrabold text-[#550017] tracking-wide">
                            IGNITE 2026
                        </span>
                        <span className="text-[10px] md:text-xs font-bold tracking-widest bg-[#E8C248] text-[#1E1E1E] px-2 py-0.5 border border-[#1E1E1E] rounded-none shadow-[1px_1px_0px_0px_#1E1E1E] uppercase">
                            OFFICIAL HUB
                        </span>
                    </div>
                    <p className="font-jakarta text-xs md:text-sm text-[#574143]">
                        Diselenggarakan secara resmi oleh Universitas Pendidikan Indonesia (UPI) & Komite Isola Game Jam.
                    </p>
                </div>
                
                <div className="space-y-1 text-center md:text-right">
                    <div className="flex items-center justify-center md:justify-end space-x-1.5 text-[#574143] text-[10px] md:text-xs font-bold tracking-wider uppercase">
                        <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5] shrink-0" />
                        <span className="break-all md:break-normal">256-BIT ENCRYPTED CREDENTIALS • STRICT ACADEMIC INTEGRITY</span>
                    </div>
                    <p className="font-jakarta text-xs md:text-sm text-gray-600">
                        © 2026 IGNITE Arcade Portal. Hak Cipta Dilindungi Undang-Undang.
                    </p>
                </div>
            </div>
        </footer>
    );
}