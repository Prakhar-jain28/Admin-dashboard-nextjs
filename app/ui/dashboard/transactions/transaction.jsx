import Styles from "./transaction.module.css";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className={Styles.container}>
      <h2>Latest Transaction</h2>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
