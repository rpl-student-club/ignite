import HeroSection from '@/components/finalist/hero-section';
import ComingSoon from '@/components/coming-soon';
import Announcement from '@/components/finalist/announcement-section';

interface FinalistIndexProps {
    isComingSoon: boolean;
}

export default function FinalistIndex({
    isComingSoon
}: FinalistIndexProps) {
    return (
        <div className="flex w-full flex-col gap-8">
            <HeroSection />
            <Announcement isComingSoon={isComingSoon} />
            <ComingSoon
                description="tunggu ya, Penilaian juri masih dilakukan"
                isComingSoon={isComingSoon}
            />
        </div>
    );
}
