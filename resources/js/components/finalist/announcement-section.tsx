import { Megaphone } from "lucide-react";
import { Label } from "@/components/ui/label";

interface AnnouncementProps {
    isComingSoon: boolean;
}

export default function Announcement({
    isComingSoon,
}: AnnouncementProps) {
    if (isComingSoon) {
        return null;
    }

    return (
        <section className="mx-auto w-full space-y-6 text-[#550017]">
            <div className="bg-amber-100/40 border border-gray-400/40 border-l-12 rounded-none p-5 md:p-6 space-y-2">
                <div className="flex items-center gap-2">
                    <Megaphone className="w-4 h-4 text-[#550017]" />
                    <span className="text-xs font-black tracking-widest uppercase text-[#550017]">
                        KETERANGAN RESMI DEWAN JURI
                    </span>
                </div>
                <p className="font-jakarta text-sm md:text-base text-gray-800 leading-relaxed">
                    Selamat kepada tim yang berhasil terseleksi. Seluruh tim yang tercantum berhak melanjutkan ke babak final demonstrasi interaktif luring di Kampus UPI Bandung pada tanggal 12-14 November 2026.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <Label className="uppercase text-base font-bold pb-2 border-b-2 border-b-[#550017]/10">Daftar tim finalis resmi</Label>
                <div className="w-full bg-[#550017] rounded-md max-h-150 p-4 overflow-hidden shadow-sm">
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReL2yS6DdTy0z5M9vM0q5yetXcCCt-ZF9Ket3QrB9M_0Fn5hUnmooH7ertKIPkfjdreFHHvuBnxTAg/pubhtml?widget=false&amp;headers=false&amp;chrome=false" className="w-full min-h-140 border-0 rounded-sm" />
                </div>
            </div>
            <div className="bg-[#FFE087] rounded-md shadow-xl min-h-20 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-2 border-[#1E1E1E]">
                <div className="flex items-start space-x-3 md:space-x-4">
                    <span className="text-2xl md:text-3xl font-black text-[#1E1E1E] leading-none shrink-0">
                        !
                    </span>
                    <div className="space-y-1.5">
                        <h4 className="text-sm md:text-base font-bold tracking-widest text-[#1E1E1E] uppercase">
                            INSTRUKSI WAJIB BAGI TIM FINALIS
                        </h4>
                        <p className="font-jakarta text-xs md:text-sm text-[#1E1E1E] leading-relaxed">
                            Seluruh ketua tim finalis wajib menghadiri <strong className="font-bold text-black">Technical Meeting Finalis daring pada 24 Oktober 2026 pukul 14:00 WIB via Zoom Meeting</strong>. Pastikan nomor kontak ketua tim aktif pada grup koordinasi resmi untuk verifikasi akomodasi onsite Bandung.
                        </p>
                    </div>
                </div>
                <a
                    href="#whatsapp-group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        shrink-0 w-full md:w-auto text-center
                        bg-[#500014] text-white text-xs
                        font-bold tracking-widest px-4 py-3 cursor-pointer
                        rounded-none border-2 border-[#1E1E1E]
                        shadow-[3px_3px_0px_0px_#1E1E1E]
                        hover:bg-[#6A041D] hover:-translate-x-px hover:-translate-y-px
                        hover:shadow-[4px_4px_0px_0px_#1E1E1E]
                        active:translate-x-0.5 active:translate-y-0.5
                        active:shadow-[1px_1px_0px_0px_#1E1E1E]
                        transition-all duration-75 uppercase block
                    "
                >
                    GRUP KOORDINASI WHATSAPP
                </a>
            </div>
        </section>
    )
}