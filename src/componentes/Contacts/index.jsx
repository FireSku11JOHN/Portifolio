import bgGridContacts from "../../assets/img/bgGridContacts.png"
import notebookBaloon from "../../assets/img/notebook-baloon.png"
import IconGitHubContacts from "../../assets/Icons/IconGitHubContacts.svg"

export const Contacts = () => {
    return (
        <div
            className="text-light p-16 flex flex-col gap-12 relative "
            style={{
                backgroundImage: `url(${bgGridContacts})`
                ,
                backgroundSize: "cover", backgroundPosition: "bottom center"
            }}
        >
            <h2 className="text-[32px] font-bold">Contatos</h2>

            <div className="flex justify-evenly z-5">
                <div className="flex flex-col py-20 px-18 items-center bg-bg-card-contacts w-fit border border-light rounded-lg gap-10">
                    <img src={IconGitHubContacts} alt="Icone GitHub"
                        className="w-40"
                    />
                    <p className="text-[22px] font-bold">
                        GitHub
                    </p>
                    <a
                        href=""
                        className="text-[18px] font-medium text-dark bg-light py-4 px-6 w-fit rounded-[10px]"
                    >
                        Ir para site
                    </a>
                </div>
                <div className="flex flex-col py-20 px-18 items-center bg-bg-card-contacts w-fit border border-light rounded-lg gap-10">
                    <img src={IconGitHubContacts} alt="Icone GitHub"
                        className="w-40"
                    />
                    <p className="text-[22px] font-bold">
                        GitHub
                    </p>
                    <a
                        href=""
                        className="text-[18px] font-medium text-dark bg-light py-4 px-6 w-fit rounded-[10px]"
                    >
                        Ir para site
                    </a>
                </div>
            </div>

            <div
                className="w-[1040px] bg-linear-to-r from-email-dark-blue to-email-blue py-10 z-5 border border-light rounded-lg self-center"
            >
                <div className="flex flex-col gap-8 w-fit py-3 px-2 rounded-lg bg-linear-to-r from-email-light-blue to-email-sky-blue">
                    <h4 className="text-[22px] font-bold">Email</h4>
                    <div className="bg-light text-dark text-[20px] py-1 px-3 rounded-[10px]">
                        <p>avylanjohn@gmail.com</p>
                    </div>
                </div>
            </div>

            <img
                className="absolute z-1 w-[600px] h-[800px] right-[10%]"
                src={notebookBaloon} alt=""
            />
        </div >
    )
}