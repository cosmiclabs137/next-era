import Link from "next/link";
import { Button, Typography } from "@mui/material";

import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}></div>

            <div className={styles.center}>
                <Typography variant="h2">Effective Rent Analysis</Typography>
                <div>
                    &nbsp; &nbsp;
                    <Link href="/era">
                        <Button variant="contained">Get Started!</Button>
                    </Link>
                </div>
            </div>

            <div className={styles.grid}></div>
        </main>
    );
}
