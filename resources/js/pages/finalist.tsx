import { Head } from '@inertiajs/react';
import FinalistIndex from '@/components/finalist/finalist-index';

export default function Finalist() {
    const isComingSoon = false;

    return (
        <>
            <Head title="Finalist" />
            <FinalistIndex isComingSoon={isComingSoon} />
        </>
    );
}
