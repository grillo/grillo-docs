import React, { useState } from 'react';
import styles from './styles.module.css';

const testimonials = [
    {
        quote: "Grillo sensors will provide entirely new opportunities to study seismic behavior of the ancient lake basin, and a denser network for earthquake early warning in Mexico City.",
        picture: "",
        author: "Marine Denolle, Professor of Seismology at Washington State"
    }
]

export default function Testimonial() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <section className={styles.testimonial}>
            <div className={styles.quote}>"{testimonials[activeTestimonial].quote}"</div>
            <div
                className={styles.picture}
                style={{
                    backgroundImage: `url(${testimonials[activeTestimonial].picture})`
                }}
            />
            <div className={styles.author}>{testimonials[activeTestimonial].author}</div>
        </section>
    );
}