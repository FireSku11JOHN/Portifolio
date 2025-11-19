export const MainContent = ({ children }) => {
    return (
        <main className="bg-bg-main-content px-16 py-16 rounded-t-3xl
            text-light relative z-10 max-tablet:px-6 max-tablet:py-6">
            {children}
        </main>
    )
}