import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Info, Mail, Key, Box, Flag, Headphones } from 'lucide-react';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Login" />

            <div className="w-full max-w-2xl mx-auto space-y-6">
                <div className="space-y-2">
                    <h1 className="font-grotesk text-3xl md:text-4xl font-extrabold text-[#5C061C] tracking-tight uppercase">
                        PORTAL LOGIN PESERTA
                    </h1>
                    <p className="font-jakarta text-lg text-gray-600 leading-relaxed">
                        Akses dashboard tim, submission berkas game/prototype, dan evaluasi juri IGNITE 2026.
                    </p>
                </div>

                {/* alert */}
                <div className="bg-[#FAF5E9] border-2 border-[#1E1E1E] p-4 rounded-none shadow-[2px_2px_0px_0px_#1E1E1E] flex items-start space-x-3">
                    <Info className="w-5 h-5 text-[#5C061C] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1E1E1E] leading-relaxed">
                        <span className="font-bold text-[#5C061C]">Perhatian Akun:</span> Gunakan alamat email terverifikasi yang sudah didaftarkan saat registrasi awal tim atau workshop Isola Game Jam.
                    </p>
                </div>

                {status && (
                    <div className="p-3 bg-green-100 border border-green-500 text-green-800 text-xs font-space-mono">
                        {status}
                    </div>
                )}

                {/* form */}
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-5"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="email" className="text-sm font-bold text-[#1E1E1E] uppercase flex items-center space-x-1.5">
                                        <Mail className="w-4 h-4 text-[#5C061C]" />
                                        <span>EMAIL KETUA TIM</span>
                                    </Label>
                                    <span className="text-xs text-[#574143] font-semibold">Wajib diisi</span>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="ketua.tim@universitas.edu"
                                        className="bg-[#FAF5E9] border-2 border-[#1E1E1E] text-[#1E1E1E] rounded-none px-4 py-6 text-sm font-jakarta placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-[#5C061C] shadow-[2px_2px_0px_0px_#1E1E1E]"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-sm font-bold text-[#1E1E1E] uppercase flex items-center space-x-1.5">
                                        <Key className="w-4 h-4 text-[#5C061C]" />
                                        <span>PASSCODE / KATA SANDI</span>
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-xs font-bold text-[#5C061C] hover:underline uppercase"
                                            tabIndex={5}
                                        >
                                            LUPA KATA SANDI?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="••••••••••••"
                                    className="bg-[#FAF5E9] border-2 border-[#1E1E1E] text-[#1E1E1E] rounded-none px-4 py-6 text-sm font-jakarta placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-[#5C061C] shadow-[2px_2px_0px_0px_#1E1E1E]"
                                />
                                <InputError message={errors.password} />
                            </div>
                            <Button
                                type="submit"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                                className="
                                    mt-2 w-full py-6
                                    flex items-center justify-center space-x-2
                                    bg-[#D4A000] hover:bg-[#E5B100] text-[#1E1E1E]
                                    text-sm font-bold tracking-wider uppercase
                                    rounded-none border-2 border-[#1E1E1E]
                                    shadow-[4px_4px_0px_0px_#1E1E1E]
                                    hover:-translate-x-px hover:-translate-y-px
                                    hover:shadow-[5px_5px_0px_0px_#1E1E1E]
                                    active:translate-x-0.5 active:translate-y-0.5
                                    active:shadow-[2px_2px_0px_0px_#1E1E1E]
                                    transition-all duration-75
                                    cursor-pointer
                                "
                            >
                                {processing ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        <Box className="w-4 h-4 stroke-[2.5]" />
                                        <span>[ LOGIN KE DASHBOARD ]</span>
                                    </>
                                )}
                            </Button>
                        </>
                    )}
                </Form>

                {/* help section */}
                <div className="bg-[#FAF5E9] border-2 border-[#1E1E1E] p-4 rounded-none shadow-[2px_2px_0px_0px_#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-2">
                        <Flag className="w-4 h-4 text-[#5C061C] shrink-0" />
                        <div className="text-sm">
                            <span className="font-jakarta text-gray-700">Belum mendaftarkan tim kamu? </span>
                            <a href="#daftar" className="font-bold text-[#5C061C] underline decoration-2 underline-offset-4 hover:opacity-80">
                                DAFTARKAN_TIM_KAMU &lt;&lt;
                            </a>
                        </div>
                    </div>
                    <a 
                        href="#bantuan" 
                        className="
                            inline-flex items-center space-x-1.5 
                            bg-[#FAF5E9] border-2 border-[#1E1E1E] 
                            px-3 py-1.5 rounded-none text-xs font-bold text-[#1E1E1E] uppercase
                            shadow-[2px_2px_0px_0px_#1E1E1E] 
                            hover:bg-[#E8C248] hover:-translate-x-px hover:-translate-y-px
                            active:translate-x-px active:translate-y-px transition-all duration-75
                        "
                    >
                        <Headphones className="w-3.5 h-3.5" />
                        <span>BANTUAN PANITIA</span>
                    </a>
                </div>
            </div>
        </>
    );
}