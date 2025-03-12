"use client";
import React, { useState } from "react";

const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
    centimeter: 100,
  },
  weight: {
    gram: 1,
    kilogram: 0.001,
    pound: 0.00220462,
    ounce: 0.035274,
    ton: 0.000001,
    stone: 0.000157473,
  },
  temperature: {
    celsius: 1,
    fahrenheit: (c: number) => (c * 9) / 5 + 32,
    kelvin: (c: number) => c + 273.15,
  },
};

type Category = keyof typeof units;
type Unit = keyof (typeof units)[Category];

const UnitConverter: React.FC = () => {
  const [category, setCategory] = useState<Category>("length");
  const [fromUnit, setFromUnit] = useState<Unit>(Object.keys(units["length"])[0] as Unit);
  const [toUnit, setToUnit] = useState<Unit>(Object.keys(units["length"])[1] as Unit);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    if (category === "temperature") {
      const conversionFn = units.temperature[toUnit] as (c: number) => number;
      setResult(conversionFn(value));
    } else {
      const factor = (units[category][toUnit] as number) / (units[category][fromUnit] as number);
      setResult(value * factor);
    }
  };

  return (
    <div className="max-w-md w-full text-gray-900">
      <div className="mb-4">
        <label className="block font-semibold mb-1">Category</label>
        <select
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={category}
          onChange={(e) => {
            const newCategory = e.target.value as Category;
            setCategory(newCategory);
            setFromUnit(Object.keys(units[newCategory])[0] as Unit);
            setToUnit(Object.keys(units[newCategory])[1] as Unit);
          }}
        >
          {Object.keys(units).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">From</label>
          <select
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as Unit)}
          >
            {Object.keys(units[category]).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">To</label>
          <select
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as Unit)}
          >
            {Object.keys(units[category]).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="block font-semibold mb-1">Value</label>
        <input
          type="number"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
        />
      </div>
      <button
        className="mt-4 w-full bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition shadow-lg"
        onClick={convert}
      >
        Convert
      </button>
      {result !== null && (
        <div className="mt-4 text-center text-2xl font-bold text-indigo-700">
          Result: {result.toFixed(4)} {toUnit}
        </div>
      )}
    </div>
  );
};

export default UnitConverter;
