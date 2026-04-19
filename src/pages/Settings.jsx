function Settings({ alertDays, setAlertDays, darkMode, setDarkMode, clearAll }) {
  function handleClearAll() {
    const confirm = window.confirm(
      "Are you sure? This will delete ALL food items."
    );
    if (confirm) clearAll();
  }

  return (
    <div className="page">
      <h1 className="page-title">Settings</h1>

      {/* Alert Days Setting */}
      <div className="settings-card">
        <h2 className="setting-title">Alert Days</h2>
        <p className="setting-desc">
          Items expiring within this many days will show as "Expiring Soon"
        </p>
        <div className="setting-control">
          <input
            type="number"
            min="1"
            max="30"
            value={alertDays}
            onChange={(e) => setAlertDays(Number(e.target.value))}
            className="number-input"
          />
          <span>days before expiry</span>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="settings-card">
        <h2 className="setting-title">Dark Mode</h2>
        <p className="setting-desc">Toggle dark/light theme</p>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="toggle-slider"></span>
          <span className="toggle-label">
            {darkMode ? "Dark Mode ON" : "Light Mode ON"}
          </span>
        </label>
      </div>

      {/* Clear All Data */}
      <div className="settings-card danger-card">
        <h2 className="setting-title">Clear All Data</h2>
        <p className="setting-desc">
          This will permanently delete all food items.
        </p>
        <button className="danger-btn" onClick={handleClearAll}>
          Delete All Items
        </button>
      </div>
    </div>
  );
}

export default Settings;