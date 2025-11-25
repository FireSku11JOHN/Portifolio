export const copyEmail = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Texto copiado!");
        })
        .catch(err => {
            console.error("Erro ao copiar:", err);
        });
}
