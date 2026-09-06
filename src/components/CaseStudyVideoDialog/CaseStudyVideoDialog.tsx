import { useEffect, useRef } from 'react';
import { Button } from '../Button';

export interface CaseStudyVideoDialogProps {
  title: string;
  videoSrc: string;
  videoType?: string;
  posterSrc?: string;
  open: boolean;
  onClose: () => void;
}

/** Controlled video player. The parent decides which interaction opens it. */
export function CaseStudyVideoDialog({ title, videoSrc, videoType = 'video/mp4', posterSrc, open, onClose }: CaseStudyVideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const video = videoRef.current;
    if (!dialog || !video) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      void video.play().catch(() => { /* Native controls remain available when autoplay is blocked. */ });
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      video.pause();
      video.currentTime = 0;
    };
  }, [open, videoSrc]);

  return <dialog ref={dialogRef} className="enj-case-study-card__dialog"
    aria-label={`Video introduction: ${title}`}
    onClose={() => {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      onClose();
    }}
    onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
    <div className="enj-case-study-card__dialog-content">
      <Button className="enj-case-study-card__close" variant="secondary" icon="close" autoFocus
        onClick={() => dialogRef.current?.close()}>Close video</Button>
      <video ref={videoRef} controls playsInline preload="none" poster={posterSrc} aria-label={title}>
        <source src={videoSrc} type={videoType} />
        Your browser does not support this video. <a href={videoSrc}>Open the video</a>.
      </video>
    </div>
  </dialog>;
}
