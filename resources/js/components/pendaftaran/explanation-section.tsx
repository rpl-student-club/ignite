import { ShieldCheck } from 'lucide-react';

export default function ExplanationSection() {
    return (
        <section
            aria-label="Informasi dan Syarat Pendaftaran"
            className="w-full bg-white rounded-[3px] p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-xl border border-stone-300"
        >
            <div>
                <h2 className="text-rose-950 text-xl sm:text-3xl md:text-4xl font-bold font-['Space_Grotesk'] uppercase leading-tight break-words">
                    pendaftaran tim i-teach
                </h2>
                <p className="text-stone-700 text-xs sm:text-base leading-relaxed mt-2">
                    Lengkapi formulir kredensial di bawah ini untuk memulai perjalanan kompetisi inovasi digital dan game development skala nasional.
                </p>
            </div>

            <div className="p-3 sm:p-5 bg-orange-50 border border-orange-200/80 rounded-md flex flex-col gap-3">
                <span className="text-stone-800 text-[10px] sm:text-xs font-bold font-['Space_Mono'] uppercase tracking-wider">
                    // syarat &amp; Ketentuan Pendaftaran
                </span>
                <div className="p-3 sm:p-4 bg-orange-100/70 rounded border border-orange-200">
                    <h3 className="text-stone-900 text-[10px] sm:text-xs font-bold font-['Space_Mono'] uppercase mb-2">
                        Ketentuan Umum
                    </h3>
                    <ol
                        className="list-decimal list-outside pl-8 text-stone-700 text-[11px] sm:text-sm font-['Space_Mono'] leading-relaxed space-y-2 max-h-[45dvh] md:max-h-[60vh] overflow-y-scroll overflow-x-hidden wrap-break-words scrollbar-thin scrollbar-thumb-rose-900/50 scrollbar-track-orange-100/50"
                    >
                        <li>Peserta merupakan mahasiswa aktif Program Diploma atau Sarjana pada perguruan tinggi di Indonesia. Peserta wajib melampirkan bukti keaktifan sebagai mahasiswa dari perguruan tinggi masing-masing.</li>
                        <li>Peserta dapat berasal dari berbagai program studi, dengan ketua tim berasal dari bidang kependidikan.</li>
                        <li>Peserta mengikuti kompetisi secara tim dengan jumlah anggota 3-6 mahasiswa.</li>
                        <li>Setiap tim wajib didampingi oleh 1 (satu) orang dosen pembimbing dari perguruan tinggi asal peserta.</li>
                        <li>Setiap mahasiswa hanya diperbolehkan terdaftar dalam 1 (satu) tim dan 1 (satu) karya.</li>
                        <li>Karya yang diikutsertakan harus orisinal, belum pernah diikutkan dalam lomba dan atau menjadi juara dalam kompetisi sejenis, dan tidak merupakan hasil plagiasi.</li>
                        <li>Peserta wajib mematuhi seluruh ketentuan, mekanisme, dan jadwal yang telah ditetapkan oleh panitia.</li>
                        <li>Panitia berhak melakukan verifikasi dan/atau mendiskualifikasi peserta yang terbukti tidak memenuhi ketentuan lomba.</li>
                    </ol>
                </div>
            </div>

            <div className="px-3 sm:px-4 py-3 bg-orange-100 rounded-lg border border-amber-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-rose-900 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-stone-800 text-[11px] sm:text-xs leading-relaxed">
                    Semua peserta diwajibkan menggunakan data identitas valid (KTM/Surat Aktif Mahasiswa). Pelanggaran integritas dikenakan diskualifikasi langsung.
                </p>
            </div>
        </section>
    );
}