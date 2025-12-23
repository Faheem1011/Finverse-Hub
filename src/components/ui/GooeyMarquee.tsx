import styles from './gooey-marquee.module.css';

interface GooeyMarqueeProps {
    text: string;
}

export function GooeyMarquee({ text }: GooeyMarqueeProps) {
    return (
        <div className={styles.marquee}>
            <div className={styles.marquee_blur} aria-hidden="true">
                <p className={styles.marquee_text}>{text}</p>
            </div>
            <div className={styles.marquee_clear}>
                <p className={styles.marquee_text}>{text}</p>
            </div>
        </div>
    );
}
