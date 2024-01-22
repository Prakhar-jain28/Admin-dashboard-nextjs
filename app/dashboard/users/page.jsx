import Search from "../../ui/dashboard/search/search";
import Styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchUsers } from "../../lib/data";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { users, count } = await fetchUsers(q, page);

  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Search placeholder="Search for a User..." />
        <Link href="/dashboard/users/add">
          <button className={Styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={Styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={Styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().splice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "client"}</td>
              <td>{user.isActive ? "Active" : "passive"}</td>
              <td>
                <div className={Styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${Styles.button} ${Styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${Styles.button} ${Styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
