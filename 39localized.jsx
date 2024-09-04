import * as React from "react";

export default function LocalizedPrimeNumbers() {
  const [count, setCount] = React.useState(1);
  const [locale, setLocale] = React.useState("en-US");

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleLocaleChange = (e) => {
    setLocale(e.target.vaule);
  };

  return (
    <div>
      <header>
        <select value={locale} onChange={handleLocaleChange}>
          <option value="en-US">English (US)</option>
          <option value="es-ES">Español (ES)</option>
        </select>

        <button className="primary" onClick={handleClick}>
          Next Number
        </button>
      </header>
      <p>Number {count}</p>
    </div>
  );
}
