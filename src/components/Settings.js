export default function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
  };

  return (
    <div
      className="card p-4 shadow-lg mx-auto mt-5"
      style={{ maxWidth: "500px" }}
    >
      <h2 className="text-center fw-bold">Settings Page</h2>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          Dark Mode
        </label>
      </div>
    </div>
  );
}
