import { useRef } from "react";
import { Button } from "../Button";
import LinkedinIcon from "../../assets/Icons/Linkedin.svg";
import GitHubIcon from "../../assets/Icons/GitHub.svg";
import Photo from "../../assets/Icons/Photo.svg";
import { SOCIAL_LINKS } from "../../constants/socials"
import { useSplitText } from "../../hooks/useSplitText";
import { useThreeScene } from "../../hooks/useThreeScene";
import { useSwingContainer } from "../../hooks/useSwingContainer";


export const HomePage = () => {
    const mountRef = useRef();
    useThreeScene(mountRef)

    const titleRef = useRef();
    useSplitText(titleRef);

    const containerRef = useRef();
    useSwingContainer(containerRef)

    return (
        <div ref={mountRef} className="relative flex items-center w-full h-screen overflow-hidden
            bg-linear-to-t from-cyan via-light-cyan to-cyan">
            {/* Elemento 3D aqui */}
            <div className="absolute gap-2 inset-0 flex justify-between items-center mx-16 z-10 max-xs:flex-col max-xs:justify-center max-xs:mx-6">

                <div ref={containerRef} className="flex flex-col bg-dark-trans gap-8 p-6 text-light h-fit w-fit rounded-lg max-ls:gap-4">
                    <h1 ref={titleRef} className="text-[32px] font-semibold max-mobile:text-[26px]">John Ávylan</h1>
                    <p className="text-[26px] font-medium max-mobile:text-[20px]">Desenvolvedor Front-End</p>
                    <div className="inline-flex gap-8 max-mobile:gap-4 ">
                        <Button
                            text="LinkedIn"
                            icon={LinkedinIcon}
                            link={SOCIAL_LINKS.linkedin}
                        />
                        <Button
                            text="GitHub"
                            icon={GitHubIcon}
                            link={SOCIAL_LINKS.github}
                            addClass="border border-white text-light bg-transparent "
                        />
                    </div>
                </div>
                <div className="max-xs:hidden ">
                    <img src={Photo} alt="" />
                </div>

            </div>
        </div>
    );
};
