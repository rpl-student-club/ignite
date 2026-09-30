import { ShieldCheck } from 'lucide-react';

export default function ExplanationSection() {
    return (
        <section
            aria-label="Informasi dan Syarat Pendaftaran"
            className="flex w-full flex-col gap-4 rounded-[3px] border border-stone-300 bg-white p-4 shadow-xl sm:gap-6 sm:p-6"
        >
            <div>
                <h2 className="font-['Space_Grotesk'] text-xl leading-tight font-bold break-words text-rose-950 uppercase sm:text-3xl md:text-4xl">
                    pendaftaran tim i-teach
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-stone-700 sm:text-base">
                    Lengkapi formulir kredensial di bawah ini untuk memulai
                    perjalanan kompetisi inovasi digital dan game development
                    skala nasional.
                </p>
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-orange-200/80 bg-orange-50 p-3 sm:p-5">
                <span className="font-['Space_Mono'] text-[10px] font-bold tracking-wider text-stone-800 uppercase sm:text-xs">
                    // syarat &amp; Ketentuan Pendaftaran
                </span>
                <div className="rounded border border-orange-200 bg-orange-100/70 p-3 sm:p-4">
                    <h3 className="mb-2 font-['Space_Mono'] text-[10px] font-bold text-stone-900 uppercase sm:text-xs">
                        Ketentuan Umum
                    </h3>
                    <ol className="wrap-break-words max-h-[45dvh] scrollbar-thin scrollbar-thumb-rose-900/50 scrollbar-track-orange-100/50 list-outside list-decimal space-y-2 overflow-x-hidden overflow-y-scroll pl-8 font-['Space_Mono'] text-[11px] leading-relaxed text-stone-700 sm:text-sm md:max-h-[60vh]">
                        <li>
                            Peserta merupakan mahasiswa aktif Program Diploma
                            atau Sarjana pada perguruan tinggi di Indonesia.
                            Peserta wajib melampirkan bukti keaktifan sebagai
                            mahasiswa dari perguruan tinggi masing-masing.
                        </li>
                        <li>
                            Peserta dapat berasal dari berbagai program studi,
                            dengan ketua tim berasal dari bidang kependidikan.
                        </li>
                        <li>
                            Peserta mengikuti kompetisi secara tim dengan jumlah
                            anggota 3-6 mahasiswa.
                        </li>
                        <li>
                            Setiap tim wajib didampingi oleh 1 (satu) orang
                            dosen pembimbing dari perguruan tinggi asal peserta.
                        </li>
                        <li>
                            Setiap mahasiswa hanya diperbolehkan terdaftar dalam
                            1 (satu) tim dan 1 (satu) karya.
                        </li>
                        <li>
                            Karya yang diikutsertakan harus orisinal, belum
                            pernah diikutkan dalam lomba dan atau menjadi juara
                            dalam kompetisi sejenis, dan tidak merupakan hasil
                            plagiasi.
                        </li>
                        <li>
                            Peserta wajib mematuhi seluruh ketentuan, mekanisme,
                            dan jadwal yang telah ditetapkan oleh panitia.
                        </li>
                        <li>
                            Panitia berhak melakukan verifikasi dan/atau
                            mendiskualifikasi peserta yang terbukti tidak
                            memenuhi ketentuan lomba.
                        </li>
                    </ol>
                </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-amber-300 bg-orange-100 px-3 py-3 sm:px-4">
                <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-rose-900"
                    aria-hidden="true"
                />
                <p className="text-[11px] leading-relaxed text-stone-800 sm:text-xs">
                    Semua peserta diwajibkan menggunakan data identitas valid
                    (KTM/Surat Aktif Mahasiswa). Pelanggaran integritas
                    dikenakan diskualifikasi langsung.
                </p>
            </div>
        </section>
    );
}
