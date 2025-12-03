import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { Input } from '../components/ui/Input';
import { PWAInstallModal } from '../components/PWAInstallModal';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [showInstallModal, setShowInstallModal] = useState(false);
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setError('Por favor ingresa un email válido.');
            return;
        }

        login(email);
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md z-10"
            >
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block mb-6"
                    >
                        <div className="w-24 h-24 mx-auto mb-4 relative z-10">
                            <img
                                src="https://i.postimg.cc/xCSpT3NH/sce5.png"
                                alt="Calistenia Elite Logo"
                                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                            />
                        </div>
                    </motion.div>

                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
                        CALISTENIA <span className="text-primary">ELITE</span>
                    </h1>
                    <p className="text-text-secondary text-sm uppercase tracking-widest">Sistema de Entrenamiento Premium</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="tucorreo@ejemplo.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError('');
                            }}
                            error={error}
                            className="text-center text-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all transform active:scale-95 uppercase tracking-wide group relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            ENTRAR EN LA ELITE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </form>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowInstallModal(true)}
                        className="text-text-secondary hover:text-primary text-sm flex items-center justify-center gap-2 mx-auto transition-colors"
                    >
                        <Smartphone className="w-4 h-4" />
                        ¿Cómo instalar la App?
                    </button>
                </div>
            </motion.div>

            <PWAInstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
            />
        </div>
    );
};
