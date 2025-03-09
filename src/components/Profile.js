import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";
export default function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  return (
    <div
      className="card p-4 shadow-lg mx-auto mt-5"
      style={{ maxWidth: "500px" }}
    >
      <h2 className="text-center fw-bold">Profile Page</h2>
      <div className="text-center mb-3">
        <ProfilePicture />
      </div>
      <UserInfo name={user.name} />
      <div className="mt-3">
        <label className="form-label fw-bold">Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={handleNameChange}
          className="form-control"
        />
      </div>
    </div>
  );
}
