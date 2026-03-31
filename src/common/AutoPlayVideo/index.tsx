import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AutoPlayVideoProps } from './types';
import { CustomVideo } from './styles';

const AutoPlayVideo = ({ src  }: AutoPlayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Detect if video is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // Triggers when 50% of the video is visible
  });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: '600px' }}>
      <CustomVideo
        ref={videoRef}
        src={src}
        muted        // Required for autoplay
        playsInline  // Required for mobile autoplay
        loop         // Optional: loops the short clip
        controls={false} // Ensures no controls are visible
      />
    </div>
  );
};

export default AutoPlayVideo;
