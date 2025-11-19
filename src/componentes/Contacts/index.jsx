import bgGridContacts from "../../assets/img/bgGridContacts.png"
import notebookBaloon from "../../assets/img/notebook-baloon.png"
import IconGitHubContacts from "../../assets/Icons/IconGitHubContacts.svg"
import IconLinkedInContacts from "../../assets/Icons/IconLinkedInContacts.svg"
import IconCopy from "../../assets/Icons/IconCopy.svg"
import IconSend from "../../assets/Icons/IconSend.svg"
import IconDiagonalArrow from "../../assets/Icons/Icon-diagonal-arrow-right-up-outline.svg"

const DEFAULT_STYLE_CARD = "flex flex-col py-20 px-6 items-center bg-bg-card-contacts w-full max-w-[320px] border border-light rounded-lg gap-10 max-desktop:py-14 max-desktop:px-4 max-mobile:py-4 max-mobile:gap-2"

const DEFAULT_STYLE_TITLE_CARD = "text-[22px] font-medium max-mobile:text-[16px]"

const DEFAULT_STYLE_BUTTON_CARD = "flex justify-center gap-2 text-[18px] font-medium text-dark bg-light py-4 px-6 w-fit rounded-[10px] max-tablet:text-[14px] max-tablet:py-2 max-mobile:w-full max-mobile:px-2  "

export const Contacts = () => {
    return (
        <div
            className="text-light p-16 flex flex-col gap-12 relative text-center max-tablet:p-6"
            style={{
                backgroundImage: `url(${bgGridContacts})`
                ,
                backgroundSize: "cover", backgroundPosition: "top center"
            }}
        >
            <h2 className="text-[32px] font-bold z-5">Contatos</h2>

            <div className="flex justify-evenly z-5 max-desktop:justify-between gap-6">
                <div className={DEFAULT_STYLE_CARD}>
                    <img src={IconGitHubContacts} alt="Icone GitHub"
                        className="w-40"
                    />
                    <p className={DEFAULT_STYLE_TITLE_CARD}>
                        GitHub
                    </p>
                    <a
                        href=""
                        className={DEFAULT_STYLE_BUTTON_CARD}
                    >
                        Ir para
                        <img 
                            src={IconDiagonalArrow} 
                            alt="Ir para" 
                            className="max-tablet:w-[18px]"
                        />
                    </a>
                </div>

                <div className={DEFAULT_STYLE_CARD}>
                    <img src={IconLinkedInContacts} alt="Icone GitHub"
                        className="w-40"
                    />
                    <p className={DEFAULT_STYLE_TITLE_CARD }>
                        LinkedIn
                    </p>
                    <a
                        href=""
                        className={DEFAULT_STYLE_BUTTON_CARD}
                    >
                        Ir para
                        <img 
                            src={IconDiagonalArrow} 
                            alt="Ir para" 
                            className="max-tablet:w-[18px]"
                        />
                    </a>
                </div>
            </div>

            <div
                className="flex flex-wrap gap-6 justify-center w-full bg-linear-to-r from-email-dark-blue to-email-blue p-10 z-5 border border-light rounded-lg self-center max-desktop:w-full max-mobile:p-4"
            >

                <div className="flex flex-col h-fit w-[500px] text-start gap-8 py-3 px-2 rounded-lg bg-linear-to-r from-email-light-blue to-email-sky-blue">
                    <h4 className="text-[22px] font-bold max-mobile:text-[16px]">
                        Email
                    </h4>
                    <div className="flex justify-between gap-2 bg-light text-dark text-[20px] py-1 px-3 rounded-[10px] max-mobile:text-[13px]">
                        <p>avylanjohn@gmail.com</p>
                        <button>
                            <img src={IconCopy} alt="Copiar"
                            />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-6 text-start w-[500px] ">
                    <label
                        className="text-[22px] font-bold max-mobile:text-[16px]"
                        htmlFor="msg">
                        Envie uma menssagem
                    </label>
                    <textarea
                        name="msg"
                        id="msg"
                        placeholder="Escreva sua mensagem"
                        className="h-[120px] bg-light rounded-[10px] text-left text-dark p-3 resize-none focus:outline-hidden max-mobile:text-[13px]"
                    >

                    </textarea>

                    <button
                        className="flex gap-2 w-fit text-[16px] text-dark font-medium bg-light rounded-[10px] py-2 px-4"
                    >
                        Enviar
                        <img src={IconSend} alt="Enviar" />
                    </button>
                </div>
            </div>

            <img
                className="absolute z-1 w-[600px] h-[800px] right-[10%]"
                src={notebookBaloon} alt=""
            />
        </div >
    )
}