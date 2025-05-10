import './style.css';

export const TShirtSetup = ({
  onTypeChange,
  onColorChange,
  onPrintChange,
  currentType,
  currentColor,
  currentPrint
}) => {
  return (
    <form className="tshirt-setup">
      {/* Výběr typu trička */}
      <label className="tshirt-setup__label">Typ:</label>
      <select
        className="tshirt-setup__input"
        value={currentType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="normalShortSleeve">Krátký rukáv</option>
        <option value="tallShortSleeve">Krátký rukáv (prodloužené)</option>
        <option value="normalLongSleeve">Dlouhý rukáv</option>
        <option value="tallLongSleeve">Dlouhý rukáv (prodloužené)</option>
        <option value="normalNoSleeve">Bez rukávů</option>
        <option value="tallNoSleeve">Bez rukávů (prodloužené)</option>
      </select>

      {/* Výběr barvy */}
      <label className="tshirt-setup__label">Barva:</label>
      <select
        className="tshirt-setup__input"
        value={currentColor}
        onChange={(e) => onColorChange(e.target.value)}
      >
        <option value="yellow">Žlutá</option>
        <option value="red">Červená</option>
        <option value="blue">Modrá</option>
        <option value="green">Zelená</option>
      </select>

      {/* Potisk */}
      <label className="tshirt-setup__label">Potisk:</label>
      <input
        className="tshirt-setup__input"
        type="text"
        value={currentPrint}
        onChange={(e) => onPrintChange(e.target.value)}
      />
    </form>
  );
};
