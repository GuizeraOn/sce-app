import { useState, useRef } from 'react';
import YouTube, { type YouTubeProps } from 'react-youtube';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { cn } from '../lib/utils';

interface PremiumPlayerProps {
    videoId: string;
    onEnded?: () => void;
    className?: string;
    autoPlay?: boolean;
}

export const PremiumPlayer = ({ videoId, onEnded, className, autoPlay = false }: PremiumPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [, setIsReady] = useState(false);
    const playerRef = useRef<any>(null);

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: autoPlay ? 1 : 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
        },
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        setIsReady(true);
        playerRef.current = event.target;
        if (autoPlay) {
            event.target.playVideo();
        }
    };

    return (
        <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/50 group", className)}>
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-yellow-600/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative w-full h-full bg-black rounded-xl overflow-hidden border border-white/10">
                {!isPlaying ? (
                    <div className="absolute inset-0 z-10 cursor-pointer group/overlay" onClick={handlePlay}>
                        {/* Thumbnail */}
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover opacity-60 group-hover/overlay:opacity-40 transition-opacity duration-500"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover/overlay:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-shadow duration-500"
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center pl-1 shadow-lg">
                                    <Play className="w-6 h-6 text-black fill-black" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    <YouTube
                        videoId={videoId}
                        opts={opts}
                        onReady={onPlayerReady}
                        onEnd={onEnded}
                        className="w-full h-full"
                        iframeClassName="w-full h-full"
                    />
                )}
            </div>
        </div>
    );
};
