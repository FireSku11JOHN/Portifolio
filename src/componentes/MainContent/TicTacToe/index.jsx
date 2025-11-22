import { useState } from "react";
import IconRestart from "../../../assets/Icons/IconRestart.svg"

export const TicTacToe = () => {

    const [boardState, setBoardState] = useState(Array(9).fill(null))
    const [message, setMessage] = useState("");
    const [isCircleTurn, setIsCircleTurn] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const startGame = () => {
        setIsCircleTurn(false);
        setMessage("");
        setBoardState(Array(9).fill(null));
        setGameOver(false);
    };

    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const isDraw = board => {
        return board.every(cell => cell !== null);
    };

    const checkWin = (player, board) => {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => board[index] === player);
        });
    };

    const handleClick = (index) => {
        if (gameOver) return;
        if (boardState[index] !== null) return;

        const newBoard = [...boardState];
        const currentPlayer = isCircleTurn ? "o" : "x";

        newBoard[index] = currentPlayer;

        setBoardState(newBoard);

        if (checkWin(currentPlayer, newBoard)) {
            setMessage(`${currentPlayer.toUpperCase()} venceu!`);
            setGameOver(true)
            return;
        }

        if (isDraw(newBoard)) {
            setMessage("Empate!");
            setGameOver(true);
            return;
        }

        setIsCircleTurn(!isCircleTurn);
    };


    return (
        <div id="about" className="aboutSec flex justify-between items-center max-tablet:flex-col max-tablet:gap-8 max-tablet:pt-16">
            <div className="max-w-[60%] max-mobile:max-w-none max-mobile:text-center">
                Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e seu impacto na vida das pessoas. Tenho grande interesse em aprender e aprimorar minhas habilidades, sempre buscando novos desafios.
            </div>
            <div className=" text-light flex flex-col items-center justify-center h-[370px] gap-8">
                <p className="underline">Vamos Jogar!</p>
                <div className="grid grid-cols-3 grid-rows-3 gap-[5px] w-fit bg-light items-center justify-center">
                    {boardState.map((value, index) => (
                        <div
                            className="bg-bg-main-content w-16 h-16 text-center text-[30px] font-bold "
                            key={index}
                            onClick={() => handleClick(index)}
                        >
                            {value ? value.toUpperCase() : ""}
                        </div>
                    ))}
                </div>
                <button
                    onClick={startGame}
                    className=""
                >
                    <img src={IconRestart} alt="Icone de Reiniciar" />
                </button>
                <p className="">{message}</p>
            </div>
        </div>
    )
}