import { motion, AnimatePresence } from 'framer-motion';
import { useToastStore } from '../../store/useToastStore';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

export const ToastContainer = () => {
    const { toasts } = useToastStore();

    return (
        <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col gap-2 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className={cn(
                            "pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border backdrop-blur-md min-w-[300px]",
                            toast.type === 'success' && "bg-green-500/10 border-green-500/20 text-green-500",
                            toast.type === 'error' && "bg-red-500/10 border-red-500/20 text-red-500",
                            toast.type === 'info' && "bg-blue-500/10 border-blue-500/20 text-blue-500"
                        )}
                    >
                        {toast.type === 'success' && <CheckCircle className="w-5 h-5" />}
                        {toast.type === 'error' && <AlertCircle className="w-5 h-5" />}
                        {toast.type === 'info' && <Info className="w-5 h-5" />}
                        <span className="font-medium text-sm">{toast.message}</span>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
