import ExplanationSection from "./explanation-section";
import IframeSection from "./iframe-section";

export default function PendaftaranIndex() {
    return (
        <div className="flex w-full bg-[#550017] selection:bg-rose-900 selection:text-white">
            <div className="flex w-full max-w-8xl mx-auto p-2 md:p-10 flex-col-reverse md:flex-row gap-8">
                <IframeSection src="https://docs.google.com/forms/d/e/1FAIpQLSdvNJGwNHdp8hC5euOBJQB6jyKluo0c87jIV_zKE-hEEtbGtA/viewform?embedded=true" />                
                <ExplanationSection />
            </div>
        </div>
    );
}
