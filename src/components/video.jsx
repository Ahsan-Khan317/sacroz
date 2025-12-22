import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";

const Video = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
  };

  const handleFullscreen = () => {
    videoRef.current.requestFullscreen();
  };

  const formatTime = (time) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <section className="w-full bg-black/50 rounded-2xl backdrop-blur-2xl py-16 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Product Showcase
        </h2>
        <p className="text-gray-400 mt-3">
          Precision. Design. Performance.
        </p>
      </div>

      {/* Video */}
      <div className="max-w-5xl mx-auto">
        <video
          ref={videoRef}
          src="https://www.sacrozindustries.com/Project/video/videotwo.mp4"
          className="w-full h-65 sm:h-95 md:h-80 object-cover rounded-2xl shadow-2xl"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={(e) => setDuration(e.target.duration)}
          onEnded={() => setIsPlaying(false)}
          playsInline
        />

        {/* Controls BELOW video */}
        <div className="mt-4 px-2">
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={duration ? (currentTime / duration) * 100 : 0}
            onChange={handleSeek}
            className="w-full h-0.5 accent-white cursor-pointer"
          />

          {/* Control Row */}
          <div className="flex items-center justify-between mt-4 text-white">
            <div className="flex items-center gap-5">
              <button onClick={togglePlay}>
                {isPlaying ? <Pause /> : <Play />}
              </button>

              <button onClick={toggleMute}>
                {isMuted ? <VolumeX /> : <Volume2 />}
              </button>

              <span className="text-sm text-gray-400">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button onClick={handleFullscreen}>
              <Maximize />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
