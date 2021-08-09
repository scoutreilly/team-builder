import { useState } from "react";

const baseFormValues = {
  userName: "",
  email: "",
  role: "",
};

const currentUsers = [
  { userName: "Scout", email: "scout@project.com", role: "Street Coder" },
  { userName: "Jp", email: "jp@project.com", role: "Manager" },
];

export default function UserForm() {
  const [users, setUsers] = useState(currentUsers);
  const [formValues, setFormValues] = useState(baseFormValues);

  function onChange(event) {
    const { newName: value } = event.target;
    setFormValues({ ...formValues, newName: value });
    console.log({ newName: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const newUsers = [...users, formValues];
    setUsers(newUsers);
    setFormValues(baseFormValues);
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          value={formValues.userName}
          name="userName"
          onChange={onChange}
        />
        <input
          type="email"
          value={formValues.email}
          name="email"
          size="30"
          onChange={onChange}
        />
        <select name="role" onChange={onChange} value={formValues.role}>
          <option>please choose role..</option>
          <option>Street Coder</option>
          <option>Manager</option>
          <option>Full Stack</option>
          <option>Server Management</option>
        </select>
        <button>Submit</button>
      </form>
      <div>
        {users.map((user) => (
          <div key={user.name}>
            <h4>Hello there, I'm {user.userName}</h4>
            <p>
              My role is {user.role} and you can reach me at {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
