import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';

export default function CallToAction() {

    return (
        <section style={{backgroundColor: "#303846"}}>
            <div className={"container " + styles.callToAction}>
                <div className={styles.text}>
                    <h3>Ready to get started?</h3>
                    <h4>If you need a custom solution...</h4>
                </div>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="#">
                        Start free trial
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="#">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}