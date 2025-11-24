import { useEffect } from "react";
import gsap from "gsap";

export const useTitleSplit = (ref) => {
    useEffect(() => {
        if (!ref || !ref.current) return;

        const left = ref.current.querySelector(".title-left");
        const right = ref.current.querySelector(".title-right");

        if (!left || !right) {
            console.warn("useTitleSplit: elementos .title-left ou .title-right não encontrados", {
                leftFound: !!left,
                rightFound: !!right,
                node: ref.current,
            });
            return;
        }

        left.style.display = left.style.display || "inline-block";
        right.style.display = right.style.display || "inline-block";
        left.style.willChange = "transform, opacity";
        right.style.willChange = "transform, opacity";

        let hasAnimated = false;
        let tl = null;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;

                    tl = gsap.timeline();

                    gsap.set(left, { x: "-100%", y: -10, opacity: 0 });
                    gsap.set(right, { x: "100%", y: 10, opacity: 0 });

                    tl.to(left, {
                        x: "0%",
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    }, 0);

                    tl.to(right, {
                        x: "0%",
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    }, 0);

                    // tl.to([left, right], {
                    //     scale: 1.02,
                    //     duration: 0.12,
                    //     yoyo: true,
                    //     repeat: 1,
                    //     ease: "power1.inOut",
                    // }, 0.75);

                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(ref.current);

        return () => {
            if (tl) tl.kill();
            observer.disconnect();
        };
    }, [ref]);
};
