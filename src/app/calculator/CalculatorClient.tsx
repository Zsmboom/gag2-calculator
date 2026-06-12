'use client';

import { useMemo, useState } from 'react';

interface CalculatorClientProps {
  gameName: string;
  calculatorType: 'stat' | 'loot' | 'damage' | 'progression' | 'drop' | 'profit';
  logicDescription: string;
}

/**
 * Skeleton input → output calculator.
 *
 * Codex: replace the inputs and the `result` computation with the
 * real formula for `calculatorType` (stat, loot, damage, etc.).
 */
export default function CalculatorClient({
  gameName,
  calculatorType,
  logicDescription,
}: CalculatorClientProps) {
  const [level, setLevel] = useState<number>(1);
  const [multiplier, setMultiplier] = useState<number>(1);

  const result = useMemo(() => {
    const base = level * 10;
    return Math.round(base * multiplier);
  }, [level, multiplier]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          <span>Base level</span>
          <input
            type="number"
            min={1}
            value={level}
            onChange={(e) => setLevel(Math.max(1, Number(e.target.value) || 1))}
            className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-base"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          <span>Multiplier</span>
          <input
            type="number"
            min={0}
            step={0.1}
            value={multiplier}
            onChange={(e) => setMultiplier(Math.max(0, Number(e.target.value) || 0))}
            className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-base"
          />
        </label>
      </div>

      <div className="mt-8 rounded-md bg-blue-50 dark:bg-blue-900/30 p-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          Estimated {calculatorType} value
        </p>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{result}</p>
      </div>

      {logicDescription ? (
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          {logicDescription}
        </p>
      ) : (
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          {gameName} {calculatorType} calculator — replace this skeleton with the real formula.
        </p>
      )}
    </div>
  );
}
