import { useEffect } from "react";
import { themeChange } from "theme-change";
const ToggleTheme = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
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

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost rounded-btn'>
        Themes
      </label>
      <ul
        tabIndex={0}
        className='menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4'
      >
        {themes.map((theme, index) => (
          <li data-set-theme={theme} key={index}>
            <a className='capitalize'>{theme}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleTheme;
