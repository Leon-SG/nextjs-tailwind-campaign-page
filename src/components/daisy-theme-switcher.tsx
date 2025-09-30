"use client";

import { useEffect, useState } from "react";

const BUILT_IN_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export function DaisyThemeSwitcher({
  themes = BUILT_IN_THEMES,
  defaultTheme = "light",
}: {
  themes?: string[];
  defaultTheme?: string;
}) {
  const [theme, setTheme] = useState<string>(defaultTheme);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current) setTheme(current);
    else document.documentElement.setAttribute("data-theme", defaultTheme);
  }, [defaultTheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="form-control">
      <label className="label" htmlFor="daisy-theme-select">
        <span className="label-text">Theme</span>
      </label>
      <select
        id="daisy-theme-select"
        className="select select-bordered select-sm"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map((t) => (
          <option value={t} key={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DaisyThemeSwitcher;

