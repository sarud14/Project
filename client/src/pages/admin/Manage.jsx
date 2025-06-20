import { useEffect, useState } from "react";
import { actionListUsers } from "../../api/user";
import useAuthStore from "../../stores/auth-store";

export default function Manage() {
  const token = useAuthStore((state) => state.token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await actionListUsers(token);
      // console.log(res.data.result);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item,index) => {
            return (
              <tr key={item.id}>
                <th>{index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
