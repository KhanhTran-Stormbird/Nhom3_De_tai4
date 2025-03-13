import React, { ReactElement } from "react";
import styles from "./MainLayout.module.scss"
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

type Props = {
    children: ReactElement; // Chỉ chấp nhận một React component
};

const MainLayout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <div className={styles.container}>

                <div className={styles.content_wrapper}>
                    <Header />
                </div>
                <div className={styles.sidebar_wrapper}>
                    <div className={styles.sidebar}>
                        <Sidebar />
                    </div>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainLayout