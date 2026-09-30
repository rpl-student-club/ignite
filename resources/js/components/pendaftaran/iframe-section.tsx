import { useState, useEffect } from 'react';

export default function IframeSection({ src }: { src: string }) {
    const [focusMode, setFocusMode] = useState(false);

    useEffect(() => {
        document.body.style.overflow = focusMode ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [focusMode]);

    return (
        <section
            aria-label="Formulir Pendaftaran"
            className={
                focusMode
                    ? 'fixed inset-0 z-50 flex flex-col bg-white md:static md:z-auto'
                    : 'w-full rounded-[3px] border border-stone-300 bg-white p-2 shadow-xl'
            }
        >
            <button
                onClick={() => setFocusMode((v) => !v)}
                className="m-2 self-end rounded bg-rose-900 px-3 py-1.5 text-xs font-bold text-white md:hidden"
            >
                {focusMode ? 'Tutup' : 'Isi Form Layar Penuh'}
            </button>

            <iframe
                src={src}
                className={
                    focusMode
                        ? 'm-0 w-full flex-1 border-0'
                        : 'm-0 h-[calc(100dvh-1rem)] w-full border-0 md:h-[800px]'
                }
            >
                Loading…
            </iframe>
        </section>
    );
}
