// src/hooks/useAnimateCards.jsx

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * @param {string} containerSelector - Seletor CSS do container que disparará a animação (ex: "#projects").
 */
export const useAnimateCards = (containerSelector) => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            const cards = gsap.utils.toArray(".project-card");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".tt",
                    start: "top 90%", 
                    end: "bottom bottom", 
                    toggleActions: "play none none none",
                    markers: true
                }
            });

            tl.fromTo(cards, 
                {
                    y: 160,
                    opacity: 0
                }, 
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    stagger: 0.15
                }
            );

        }, containerSelector);

        return () => ctx.revert(); 
        
    }, [containerSelector]); 
};