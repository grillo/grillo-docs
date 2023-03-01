import React from 'react';
import styles from './styles.module.css';

const useCases = [
    {
        headerTitle: "Structural Health Monitoring",
        contentTitle: "How Haiti created an Early-Warning System",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elmit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Svg: require('@site/static/img/whatisgrillo1.svg').default,
        benefits: [
            "Benefit of Feature",
            "Benefit of Feature",
            "Benefit of Feature"
        ]
    },
    {
        headerTitle: "Earthquake Early-Warning",
        contentTitle: "How Haiti created an Early-Warning System",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elmit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Svg: require('@site/static/img/whatisgrillo2.svg').default,
        benefits: [
            "Benefit of Feature",
            "Benefit of Feature",
            "Benefit of Feature"
        ]
    },
    {
        headerTitle: "Asset Protection",
        contentTitle: "How Haiti created an Early-Warning System",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elmit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Svg: require('@site/static/img/whatisgrillo3.svg').default,
        benefits: [
            "Benefit of Feature",
            "Benefit of Feature",
            "Benefit of Feature"
        ]
    }
];

export function UseCase({ useCase: { headerTitle, contentTitle, description, Svg, benefits } }) {
    return (<div className={"container " + styles.usageCase}>
        <h3 className={styles.headerTitle}>
            {headerTitle}
        </h3>
        <div className={styles.contentContainer}>
            <Svg className={styles.imageSvg} role="img" />
            <div className={styles.content}>
                <h4 className={styles.contentTitle}>{contentTitle}</h4>
                <p className={styles.description}>{description}</p>
                <ul className={styles.benefits}>
                    {benefits.map(benefit => (<li>{benefit}</li>))}
                </ul>
            </div>
        </div>
    </div>);
}

export default function UseCases() {
    return <section className={styles.useCasesContainer}>
        {useCases.map(useCase => (<div><UseCase useCase={useCase} /></div>))}
    </section>;
}