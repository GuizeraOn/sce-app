import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Camera } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useToastStore } from '../store/useToastStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export const EditProfile = () => {
    const navigate = useNavigate();
    const { userEmail, login } = useAuthStore();
    const { addToast } = useToastStore();

    const [name, setName] = useState('Usuario Elite');
    const [email, setEmail] = useState(userEmail || '');
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            login(email); // Update store
            addToast('Perfil actualizado correctamente', 'success');
            setIsLoading(false);
            navigate('/perfil');
        }, 1000);
    };

    return (
        <div className="max-w-xl mx-auto space-y-6 animate-in fade-in duration-500 pb-20">
            <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="sm" onClick={() => navigate('/perfil')} className="p-0 hover:bg-transparent">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </Button>
                <h1 className="text-2xl font-bold text-white">Editar Perfil</h1>
            </div>

            <div className="flex flex-col items-center mb-8">
                <div className="relative group cursor-pointer" onClick={() => addToast('Funcionalidad de cámara simulada', 'info')}>
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-yellow-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                            <span className="font-bold text-4xl text-primary">CE</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-black shadow-lg">
                        <Camera className="w-4 h-4" />
                    </div>
                </div>
                <p className="text-text-secondary text-sm mt-3">Toca para cambiar foto</p>
            </div>

            <Card className="p-6">
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary">Nombre Completo</label>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary">Correo Electrónico</label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            type="email"
                        />
                    </div>

                    <div className="pt-4">
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Guardando...' : 'Guardar Cambios'}
                            {!isLoading && <Save className="w-4 h-4 ml-2" />}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};
