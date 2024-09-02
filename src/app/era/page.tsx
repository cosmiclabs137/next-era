"use client";

import React from "react";

import DealTab from "@/components/Tabs/DealTab";

import styles from "@/app/page.module.css";

const page = () => {
    return (
        <div className={styles.center}>
            <DealTab />
        </div>
    );
};

export default page;
