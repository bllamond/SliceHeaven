import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onclick }) {
  const base =
    "focus:ring-offset-2 text-sm focus:ring-yellow-300 disabled:cursor-not-allowed inline-block  rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800   transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:px-4",
    small: base + "py-2 md:px-5 md:py-2.5 px-4 text-xs",
    round: base + "py-1 md:px-3.5 md:py-2 px-2.5 text-sm",
    secondary:
      "focus:ring-offset-2 text-sm focus:ring-stone-200 disabled:cursor-not-allowed inline-block  rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400   transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 :text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring py-2.5 md:px-6 md:py-3.5 px-4 ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onclick)
    return (
      <button disabled={disabled} onClick={onclick} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
