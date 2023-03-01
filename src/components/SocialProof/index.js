import React from 'react';
import styles from './styles.module.css';

const companies = [
    {
        name: "AWS",
        logo: "https://d2h4nhmkds8zc0.cloudfront.net/wp-content/uploads/2022/07/image-6.png.webp",
        url: "https://aws.amazon.com/"
    },
    {
        name: "Company 2",
        logo: "https://d2h4nhmkds8zc0.cloudfront.net/wp-content/uploads/2022/07/Logo-06.png.webp",
        url: ""
    },
    {
        name: "Company 3",
        logo: "https://d2h4nhmkds8zc0.cloudfront.net/wp-content/uploads/2022/07/Harvard-Logo-Meaning-history-1.png.webp",
        url: ""
    },
    {
        name: "Company 4",
        logo: "https://d2h4nhmkds8zc0.cloudfront.net/wp-content/uploads/2022/07/AXA-1.png.webp",
        url: ""
    },
]

export default function SocialProof() {
    return (
        <section className="container">
            <div className={styles.socialProof}>
                <div>Trusted by the World's Best Companies</div>
                <div className={styles.companiesContainer}>
                    {companies.map(company => (
                        <a
                            className={styles.company}
                            url={company.url}
                            title={company.name}
                            style={{
                                backgroundImage: `url(${company.logo})`
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}