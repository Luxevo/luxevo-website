"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Sparkles, Award, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { useTranslations, type Locale } from '@/lib/i18n';

const inter = Inter({ subsets: ["latin"] });

const SQRT_5000 = Math.sqrt(5000);

// Positive minimal icons for testimonials
const testimonialIcons = [Star, Heart, Sparkles, Award, Zap];

interface Testimonial {
  tempId: number;
  testimonial: string;
  by: string;
  avatar: string;
}

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out flex flex-col",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${position * (cardSize + 40)}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div
        className="mb-4 h-14 w-14 rounded-full flex items-center justify-center flex-shrink-0 bg-white text-primary"
        style={{
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        {React.createElement(testimonialIcons[testimonial.tempId % testimonialIcons.length], {
          size: 28,
          strokeWidth: 2
        })}
      </div>
      <div className="flex-1 overflow-y-auto pr-2 mb-16 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <h3 className={cn(
          "text-base sm:text-xl font-medium",
          inter.className,
          isCenter ? "text-primary-foreground" : "text-foreground"
        )}>
          "{testimonial.testimonial}"
        </h3>
      </div>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        inter.className,
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

interface StaggerTestimonialsProps {
  locale: Locale;
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({ locale }) => {
  const t = useTranslations(locale);
  const [cardSize, setCardSize] = useState(365);

  // Map translation testimonials to component format with unique IDs
  const baseTestimonials = t.testimonials.items.map((item, index) => ({
    tempId: index,
    testimonial: item.quote,
    by: `${item.name}, ${item.title}`,
    avatar: item.avatar
  }));

  const [testimonialsList, setTestimonialsList] = useState(baseTestimonials);

  // Update testimonials when locale changes
  useEffect(() => {
    setTestimonialsList(baseTestimonials);
  }, [locale]);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Date.now() + i });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Date.now() + i });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;

        // Only show center card and 1 card on each side (total 3 visible)
        if (Math.abs(position) > 1) return null;

        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
