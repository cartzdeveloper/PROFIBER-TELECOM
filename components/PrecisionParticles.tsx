import React, { useEffect, useRef } from 'react';

interface PrecisionParticlesProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
  theme?: 'dark' | 'light';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export const PrecisionParticles: React.FC<PrecisionParticlesProps> = ({
  className = '',
  particleCount = 55,
  interactive = true,
  theme = 'dark'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 120
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const isDark = theme === 'dark';
    const colors = isDark
      ? [
          'rgba(59, 130, 246, ',   // blue-500
          'rgba(6, 182, 212, ',    // cyan-500
          'rgba(99, 102, 241, ',   // indigo-500
          'rgba(255, 255, 255, '   // pure white light glint
        ]
      : [
          'rgba(37, 99, 235, ',    // blue-600
          'rgba(8, 145, 178, ',    // cyan-600
          'rgba(79, 70, 229, ',    // indigo-600
          'rgba(30, 58, 138, '     // dark blue
        ];

    // Initialize particles
    const effectiveCount = Math.min(particleCount, Math.floor((width * height) / 12000));
    const particles: Particle[] = [];

    for (let i = 0; i < effectiveCount; i++) {
      const baseRadius = Math.random() * 1.8 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: baseRadius,
        baseRadius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Handle window resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive precision
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    const maxConnectDistance = 110;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines between nearby particles (Fiber optic web)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineAlpha = (1 - dist / maxConnectDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${lineAlpha})`
              : `rgba(37, 99, 235, ${lineAlpha * 0.7})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse cursor if within interactive radius
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mdx = particles[i].x - mouseRef.current.x;
          const mdy = particles[i].y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouseRef.current.radius) {
            const mAlpha = (1 - mDist / mouseRef.current.radius) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${mAlpha})`
              : `rgba(2, 132, 199, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();

            // Subtle attraction towards cursor
            particles[i].x -= (mdx / mDist) * 0.3;
            particles[i].y -= (mdy / mDist) * 0.3;
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from edges
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // Pulsing glow radius
        const currentAlpha = Math.max(0.1, p.alpha + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.25);
        const currentRadius = p.baseRadius * (1 + Math.sin(time * p.pulseSpeed * 1.5 + p.pulseOffset) * 0.2);

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.fill();

        // Delicate outer halo for select bright particles
        if (p.baseRadius > 2.0 && isDark) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${currentAlpha * 0.15})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particleCount, interactive, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
