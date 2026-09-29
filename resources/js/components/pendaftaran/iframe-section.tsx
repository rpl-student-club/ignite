import { useState, useEffect } from "react";

export default function IframeSection({ src }: { src: string }) {
    const [focusMode, setFocusMode] = useState(false);

    useEffect(() => {
        document.body.style.overflow = focusMode ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [focusMode]);

    return (
        <section
            aria-label="Formulir Pendaftaran"
            className={
                focusMode
                    ? "fixed inset-0 z-50 bg-white flex flex-col md:static md:z-auto"
                    : "w-full bg-white rounded-[3px] p-2 shadow-xl border border-stone-300"
            }
        >
            <button
                onClick={() => setFocusMode((v) => !v)}
                className="md:hidden self-end m-2 px-3 py-1.5 text-xs font-bold bg-rose-900 text-white rounded"
            >
                {focusMode ? "Tutup" : "Isi Form Layar Penuh"}
            </button>

            <iframe
                src={src}
                className={
                    focusMode
                        ? "w-full flex-1 border-0 m-0"
                        : "w-full h-[calc(100dvh-1rem)] md:h-[800px] border-0 m-0"
                }
            >
                Loading…
            </iframe>
        </section>
    );
}
