'use client';

import { useMemo, useState } from 'react';
import itemsData from '@/data/items.json';

interface CalculatorClientProps {
  gameName: string;
  calculatorType: 'stat' | 'loot' | 'damage' | 'progression' | 'drop' | 'profit';
  logicDescription: string;
}

type CropItem = {
  slug: string;
  name: string;
  baseValue?: number;
};

const MUTATIONS: { name: string; mult: number }[] = [
  { name: 'None', mult: 1 },
  { name: 'Aurora', mult: 1.5 },
  { name: 'Chained', mult: 4 },
  { name: 'Dawnbound', mult: 10 },
  { name: 'Gold', mult: 10 },
  { name: 'Starstruck', mult: 25 },
  { name: 'Rainbow', mult: 30 },
  { name: 'Frozen', mult: 40 },
  { name: 'Electric', mult: 70 },
  { name: 'Bloodlit', mult: 80 },
];

/**
 * GAG2 profit calculator.
 * Sell Value = BaseValue(1kg) × weight² × Mutation × (1 + FriendBoost%) × Quantity
 * Mutations are mutually exclusive in GAG2 — only one applies per crop.
 */
export default function CalculatorClient({
  gameName,
  calculatorType,
  logicDescription,
}: CalculatorClientProps) {
  const crops: CropItem[] = (((itemsData as unknown) as { items: CropItem[] }).items ?? [])
    .filter((it) => typeof it.baseValue === 'number')
    .sort((a, b) => (b.baseValue ?? 0) - (a.baseValue ?? 0));

  const [cropSlug, setCropSlug] = useState<string>(crops[0]?.slug ?? '');
  const [weight, setWeight] = useState<number>(1);
  const [mutationIdx, setMutationIdx] = useState<number>(0);
  const [friendBoost, setFriendBoost] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const crop = crops.find((c) => c.slug === cropSlug) ?? crops[0];
  const baseValue = crop?.baseValue ?? 0;
  const mutation = MUTATIONS[mutationIdx] ?? MUTATIONS[0];

  const result = useMemo(() => {
    const raw = baseValue * Math.pow(weight, 2) * mutation.mult * (1 + friendBoost / 100) * quantity;
    return Math.round(raw);
  }, [baseValue, weight, mutation.mult, friendBoost, quantity]);

  const labelClass = 'flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200';
  const inputClass =
    'rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-base';
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className={labelClass}>
          <span>Crop</span>
          <select
            value={cropSlug}
            onChange={(e) => setCropSlug(e.target.value)}
            className={inputClass}
          >
            {crops.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name} ({(c.baseValue ?? 0).toLocaleString()} S/kg)
              </option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          <span>Harvest weight (kg)</span>
          <input
            type="number"
            min={0}
            step={0.1}
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(Math.max(0, Number(e.target.value) || 0))}
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          <span>Mutation (mutually exclusive)</span>
          <select
            value={mutationIdx}
            onChange={(e) => setMutationIdx(Number(e.target.value))}
            className={inputClass}
          >
            {MUTATIONS.map((m, i) => (
              <option key={m.name} value={i}>
                {m.name} (×{m.mult})
              </option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          <span>Friend boost (%)</span>
          <input
            type="number"
            min={0}
            step={1}
            inputMode="numeric"
            value={friendBoost}
            onChange={(e) => setFriendBoost(Math.max(0, Number(e.target.value) || 0))}
            className={inputClass}
          />
        </label>

        <label className={`${labelClass} md:col-span-2`}>
          <span>Quantity</span>
          <input
            type="number"
            min={1}
            step={1}
            inputMode="numeric"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
            className={inputClass}
          />
        </label>
      </div>

      <div className="mt-8 rounded-md bg-blue-50 dark:bg-blue-900/30 p-4 text-center" aria-live="polite">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Estimated sell value</p>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
          {result.toLocaleString()} Sheckles
        </p>
      </div>

      <div className="mt-6 rounded-md bg-gray-50 dark:bg-gray-900/50 p-4 text-sm text-gray-600 dark:text-gray-300">
        <p className="font-semibold mb-1">Formula</p>
        <code className="block text-xs break-words">
          BaseFormula({weight}kg) × {mutation.mult} × (1 + {friendBoost}%) × {quantity}
        </code>
        <p className="mt-3 text-gray-500 dark:text-gray-400">{logicDescription}</p>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Obsidian source note: per-crop curves may use a power fit (coefficient × weight^exp,
          exp 2.0-3.4) or a quadratic fit. This browser calculator keeps the current community
          weight² model for consistent instant estimates while flagging unverified curve data.
        </p>
      </div>

      {crops.length === 0 ? (
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          No crop value data is available yet.
        </p>
      ) : null}
    </div>
  );
}
