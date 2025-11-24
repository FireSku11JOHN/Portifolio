// src/hooks/useAnimateCount.jsx

import { useEffect } from "react"
import { animateCount } from "../animations/animateCount"

/**
 * Hook para iniciar e gerenciar a animação de contagem GSAP.
 * @param {string} id - O ID do elemento a ser animado (ex: "count-projects").
 * @param {string} targetValue - O valor final (ex: "+6").
 */
export const useAnimateCount = (id, targetValue) => {
    useEffect(() => {
        // O seletor que será passado para a função animateCount
        const elementSelector = `#${id}` 

        // 1. Inicia a animação (gsap.core.Tween)
        const animation = animateCount(elementSelector, targetValue)

        // 2. Cleanup: Garante que a animação e o ScrollTrigger sejam destruídos
        return () => {
            if (animation && animation.scrollTrigger) {
                animation.scrollTrigger.kill()
            }
        }
    }, [id, targetValue]) // Dependências garantem que o efeito roda se ID ou valor mudar.
}