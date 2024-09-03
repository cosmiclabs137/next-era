"use client";

import React from "react";

import DealTabsContainer from "@/components/Containers/DealTabsContainer";

import styles from "@/app/page.module.css";

const page = () => {
    return (
        <div className={styles.center}>
            <DealTabsContainer />
        </div>
    );
};

export default page;
