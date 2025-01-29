import {useGameContext} from "@/shared/store";
import {useEffect} from "react";
import {IWinner} from "@/shared/interfaces";

const useBoardUseCase = () => {
	const {board, setWinner} = useGameContext()

	// TODO: Реализовать функцию расчета победителя
	const checkWinner = (): IWinner => {
		const winningCombinations = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		];

		for (const combination of winningCombinations) {
			const [a, b, c] = combination;
			const playerA = board[a].player;
			const playerB = board[b].player;
			const playerC = board[c].player;

			if (playerA && playerA === playerB && playerA === playerC) {
				return playerA;
			}
		}

		// Проверяем на ничью
		const isDraw = board.every(cell => cell.player !== null);
		if (isDraw) {
			alert("Ничья");
			return null;
		}

		return null;
	};


	useEffect(() => {
		setWinner(checkWinner())
	}, [board]);
}

export {
	useBoardUseCase,
}