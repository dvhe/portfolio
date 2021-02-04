import styles from "../styles/main.module.css";
import { IconName } from "react-icons/vsc";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_frame}>
            <div className={styles.header_font}>
              <h1>Kyle Bennett</h1>
              <h2>Fullstack developer located in Michigan</h2>
            </div>
          </div>
          <div className={styles.profile}>
            <img src="https://via.placeholder.com/250x250" alt="" />
          </div>
        </div>
        <div className={styles.links}>
          <a href="https://twitter.com/_imposed" target="_blank">
            Twitter
          </a>
          <a href="https://github.com/scrap" target="_blank">
            Github
          </a>
          <a
            href="https://discord.com/users/583925649807245322"
            target="_blank"
          >
            Discord
          </a>
          <a>Email</a>
        </div>
      </div>
    </>
  );
}
