import styles from './page.module.css'
import AppLayout from "@/app/AppLayout";
import {App} from "antd"

export default function Home() {
    return (
        <main className={styles.main}>
            <App>
                <AppLayout/>
            </App>
        </main>
    )
}