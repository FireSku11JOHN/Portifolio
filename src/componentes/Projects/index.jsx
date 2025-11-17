import builtitImg from "../../assets/img/built-it-home.png"
import arrowRight from "../../assets/Icons/arrow-right.svg"
import arrowRightWhite from "../../assets/Icons/arrow-right-white.svg"
import bgGridProjects from "../../assets/img/bgGridProjects.png"

const PROJETCS_CARDS = [
    {
        img: builtitImg,
        description: "O BuildIt é um site criado para reunir tutoriais de construções no Minecraft. O projeto foi desenvolvido com o objetivo de praticar HTML, CSS e JavaScript, ao mesmo tempo em que compartilha ideias criativas para o jogo.",
        stack: ["HTML", "CSS", "JavaScript"],
        url: "https://build-it-kappa.vercel.app/",
        github: "https://github.com/FireSku11JOHN/BuildIt?tab=readme-ov-file"
    },
    {
        img: builtitImg,
        description: "O BuildIt é um site criado para reunir tutoriais de construções no Minecraft. O projeto foi desenvolvido com o objetivo de praticar HTML, CSS e JavaScript, ao mesmo tempo em que compartilha ideias criativas para o jogo.",
        stack: ["HTML", "CSS", "JavaScript"],
        url: "https://build-it-kappa.vercel.app/",
        github: "https://github.com/FireSku11JOHN/BuildIt?tab=readme-ov-file"
    },
    {
        img: builtitImg ,
        description: "O BuildIt é um site criado para reunir tutoriais de construções no Minecraft. O projeto foi desenvolvido com o objetivo de praticar HTML, CSS e JavaScript, ao mesmo tempo em que compartilha ideias criativas para o jogo.",
        stack: ["HTML", "CSS", "JavaScript"],
        url: "https://build-it-kappa.vercel.app/",
        github: "https://github.com/FireSku11JOHN/BuildIt?tab=readme-ov-file"
    }
];

export const Projects = () => {
    return (
        <div
            className="p-16 text-light max-tablet:p-6"
            style={{
                backgroundImage: `url(${bgGridProjects})`,
                backgroundSize: "cover", backgroundPosition: "bottom center"
            }}
        >
            <h2 className="text-[32px] font-bold">Projetos</h2>

            <div className="grid grid-cols-3 gap-4 my-18 max-desktop:grid-cols-2 max-tablet:my-10 max-mobile-grid:grid-cols-1">
                {PROJETCS_CARDS.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-dark-blue p-6 rounded-xl max-mobile:p-4"
                    >
                        <img src={project.img} alt="" className="rounded-lg" />

                        <p className="mt-4 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div>
                            <h4 className="mt-4 font-semibold">Tecnologias:</h4>
                            <ul className="flex flex-wrap gap-2 mt-2">
                                {project.stack.map((tech, i) => (
                                    <li
                                        key={i}
                                        className="bg-[#1e1e2e] px-3 py-1 rounded-lg text-xs"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex mt-6 gap-6 max-tablet:gap-4">
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-[10px] font-medium max-desktop:text-[14px]"
                                >
                                    Ver Site
                                    <img src={arrowRight} alt="" />
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 bg-transparent border border-white px-5 py-2 rounded-[10px] font-medium max-tablet:text-[14px]"
                                >
                                    GitHub
                                    <img src={arrowRightWhite} alt="" />
                                </a>
                            )}

                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-6 bg-white text-black px-5 py-2 rounded-[10px] font-medium text-center">
                Ver mais
            </button>
        </div>
    );
};
