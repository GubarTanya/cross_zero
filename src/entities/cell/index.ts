import {useGameContext} from "@/shared/store";
import {ICell} from "@/shared/interfaces";

const useCellUseCase = () => {
	// Деструктуризируйте нужные вам элементы для работы
	useGameContext()

	const {board, setBoard, currentPlayer, setCurrentPlayer, winner} = useGameContext();
	// TODO: Реализовать логику нажатия на ячейку в поле
	const handleCellClick = (cell: ICell): void => {
		if (winner) {
			alert("win");
			return;
		}

		if (cell.player) {
			alert("Ячейка занята");
			return;
		}

		const updatedBoard = board.map(c => {
			if (c.id === cell.id) {
				return { ...c, player: currentPlayer };
			}
			return c;
		});

		setBoard(updatedBoard);
		setCurrentPlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));
	};




	return {
		handleCellClick
	}
}

export {
	useCellUseCase,
}