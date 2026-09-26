import { useEffect, useRef, useState } from 'react';
const rolePhrases = [
  "AI Researcher",
  "Vision–Language Models",
  "Information Retrieval",
];

export function DynamicBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: null, y: null, radius: 130 };
    let frame = 0;
    let width = 0;
    let height = 0;
    let particles = [];

    const palette = {
      mono: ["180,27,27", "190,143,38"],
      dark: ["34,211,238", "250,204,21"],

    }[theme];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 0.8 + Math.random() * 1.8;
        this.vx = (Math.random() - 0.5) * 0.24;
        this.vy = (Math.random() - 0.5) * 0.24;
        this.color = palette[Math.random() > 0.82 ? 1 : 0];
      }

      update() {
        if (!reducedMotion) {
          this.x += this.vx;
          this.y += this.vy;
        }
        if (this.x < -8) this.x = width + 8;
        if (this.x > width + 8) this.x = -8;
        if (this.y < -8) this.y = height + 8;
        if (this.y > height + 8) this.y = -8;

        if (pointer.x !== null && !reducedMotion) {
          const dx = pointer.x - this.x;
          const dy = pointer.y - this.y;
          const distance = Math.hypot(dx, dy) || 1;
          if (distance < pointer.radius) {
            const force = (pointer.radius - distance) / pointer.radius;
            this.x -= (dx / distance) * force * 1.8;
            this.y -= (dy / distance) * force * 1.8;
          }
        }
      }

      draw() {
        context.beginPath();
        context.fillStyle = `rgba(${this.color}, .42)`;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 768 ? 32 : 68;
      particles = Array.from({ length: count }, () => new Particle());
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 118) {
            context.beginPath();
            context.strokeStyle = `rgba(${palette[0]}, ${0.11 * (1 - distance / 118)})`;
            context.lineWidth = 0.8;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const movePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const clearPointer = () => {
      pointer.x = null;
      pointer.y = null;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", movePointer, { passive: true });
    document.documentElement.addEventListener("mouseleave", clearPointer);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
      document.documentElement.removeEventListener("mouseleave", clearPointer);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="dynamic-background" aria-hidden="true" />;
}

export function TypewriterRole() {
  const [text, setText] = useState(rolePhrases[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let phrase = 0;
    let character = rolePhrases[0].length;
    let deleting = true;
    let timer;
    let active = true;

    const tick = () => {
      if (!active) return;
      const current = rolePhrases[phrase];
      character += deleting ? -1 : 1;
      setText(current.slice(0, character));
      let delay = deleting ? 34 : 64;
      if (!deleting && character === current.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && character === 0) {
        deleting = false;
        phrase = (phrase + 1) % rolePhrases.length;
        delay = 380;
      }
      timer = window.setTimeout(tick, delay);
    };

    timer = window.setTimeout(tick, 1500);
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, []);

  return <p className="role"><span>{text}</span><span className="typewriter-cursor" aria-hidden="true">|</span></p>;
}




