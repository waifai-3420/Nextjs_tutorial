'use client';

import { useState } from 'react';

type Player = 'X' | 'O' | null;

export default function Home() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index: number) {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  const status = winner
    ? `勝者: ${winner}`
    : board.every(Boolean)
    ? '引き分け！'
    : `次の手番: ${xIsNext ? 'X' : 'O'}`;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">三目並べ</h1>
      <div className="mb-4 text-xl">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, index) => (
          <button
            key={index}
            className="w-24 h-24 text-3xl font-bold bg-white border border-gray-400 hover:bg-gray-200"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        リセット
      </button>
    </main>
  );
}

// 勝者を判定する関数
function calculateWinner(squares: Player[]): Player {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦
    [0, 4, 8], [2, 4, 6]             // 斜め
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
