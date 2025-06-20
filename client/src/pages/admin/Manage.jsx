import { useEffect, useState } from "react";
import {
  actionDeleteUser,
  actionListUsers,
  actionUpdateRole,
} from "../../api/user";
import useAuthStore from "../../stores/auth-store";
import { createAlert } from "../../utils/createAlert";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";

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

  const hdlUpdateRole = async (token, id, role) => {
    console.log(token, id, role);
    try {
      const res = await actionUpdateRole(token, id, { role });
      console.log(res);
      createAlert("success", res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlDeleteUser = async (token, id) => {
    const { isConfirmed } = await Swal.fire({
      icon: "question",
      text: "Are you sure?",
      showCancelButton: true,
      showCloseButton: true,
    });
    if (isConfirmed) {
      try {
        const res = await actionDeleteUser(token, id);
        console.log(res);
        createAlert("success", res.data.msg);
        fetchUsers();
      } catch (error) {}
    }
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead className="text-center">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((item, index) => {
            return (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>
                  <select
                    defaultValue={item.role}
                    className="select select-primary"
                    onChange={(e) =>
                      hdlUpdateRole(token, item.id, e.target.value)
                    }
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </td>

                <td>
                  <Trash
                    className=""
                    onClick={() => hdlDeleteUser(token, item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
