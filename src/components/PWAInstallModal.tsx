import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share, PlusSquare, MoreVertical, Download, X, Smartphone } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

interface PWAInstallModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PWAInstallModal = ({ isOpen, onClose }: PWAInstallModalProps) => {
    const [activeTab, setActiveTab] = useState<'ios' | 'android'>('ios');

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-surface border border-white/10 rounded-2xl p-6 z-50 shadow-2xl shadow-black"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Smartphone className="w-6 h-6 text-primary" />
                                Instala la App Premium
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-text-secondary" />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex p-1 bg-black/40 rounded-lg mb-6">
                            <button
                                onClick={() => setActiveTab('ios')}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                    activeTab === 'ios'
                                        ? "bg-white/10 text-white shadow-lg"
                                        : "text-text-secondary hover:text-white"
                                )}
                            >
                                iPhone (iOS)
                            </button>
                            <button
                                onClick={() => setActiveTab('android')}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                    activeTab === 'android'
                                        ? "bg-white/10 text-white shadow-lg"
                                        : "text-text-secondary hover:text-white"
                                )}
                            >
                                Android
                            </button>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            {activeTab === 'ios' ? (
                                <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                            <Share className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Paso 1</p>
                                            <p className="text-gray-300 text-sm">Toca el botón <span className="text-white font-bold">Compartir</span> en la barra inferior de Safari.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                            <PlusSquare className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Paso 2</p>
                                            <p className="text-gray-300 text-sm">Baja y selecciona <span className="text-white font-bold">Agregar a Inicio</span>.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                            <span className="text-lg font-bold text-primary">Add</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Paso 3</p>
                                            <p className="text-gray-300 text-sm">Confirma en <span className="text-white font-bold">Agregar</span> arriba a la derecha.</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                            <MoreVertical className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Paso 1</p>
                                            <p className="text-gray-300 text-sm">Toca los <span className="text-white font-bold">tres puntos</span> en la esquina superior de Chrome.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                            <Download className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Paso 2</p>
                                            <p className="text-gray-300 text-sm">Selecciona <span className="text-white font-bold">Instalar aplicación</span> o <span className="text-white font-bold">Agregar a la pantalla principal</span>.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <Button onClick={onClose} className="w-full" variant="ghost">
                                Entendido
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
