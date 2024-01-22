import Styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <div className={Styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={Styles.bg} />
        </div>
        <div className={Styles.texts}>
          <span className={Styles.notification}>🔥Available Now </span>
          <h3 className={Styles.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={Styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={Styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            unde excepturi iste eum nemo quia aperiam ut ducimus quibusdam.
          </p>
          <button className={Styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={Styles.item}>
        <div className={Styles.texts}>
          <span className={Styles.notification}>🚀Comming Soon</span>
          <h3 className={Styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={Styles.subtitle}>Boost your productivity</span>
          <p className={Styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            unde excepturi iste eum nemo quia aperiam ut ducimus quibusdam.
          </p>
          <button className={Styles.button}>
            <MdReadMore />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
