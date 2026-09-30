interface ComingSoonProps {
    description: string;
    isComingSoon: boolean;
}

export default function ComingSoon({
    description,
    isComingSoon,
}: ComingSoonProps) {
    if (!isComingSoon) {
        return null;
    }

    const nailPositions = [
        'top-3 left-3',
        'top-3 right-3',
        'bottom-3 left-3',
        'bottom-3 right-3',
    ];

    return (
        <section className="relative flex w-full flex-col items-center justify-center rounded-lg border border-black/15 bg-[#F4EEDB] p-8 shadow-2xl drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] sm:p-12 md:p-16">
            {nailPositions.map((position, index) => (
                <div
                    key={index}
                    className={`absolute ${position} h-3.5 w-3.5 rounded-full border-2 border-black/80 bg-[#E8C248] shadow-inner`}
                />
            ))}

            <div className="my-4 flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-4xl font-black tracking-wide text-[#550017] uppercase sm:text-6xl md:text-7xl">
                    COMING SOON
                </h2>
                <div className="border-r border-b border-black/80 bg-white px-6 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xs font-bold tracking-widest text-[#550017] uppercase sm:text-sm">
                        {description}
                    </span>
                </div>
            </div>
        </section>
    );
}
