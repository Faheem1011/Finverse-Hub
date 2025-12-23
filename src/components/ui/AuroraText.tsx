import styles from './aurora-text.module.css';

interface AuroraTextProps {
    className?: string;
    children: React.ReactNode;
}

export function AuroraText({ className, children }: AuroraTextProps) {
    return (
        <h1 className={`${styles.title} ${className || ''}`}>
            {children}
            <div className={styles.aurora}>
                <div className={styles.aurora__item}></div>
                <div className={styles.aurora__item}></div>
                <div className={styles.aurora__item}></div>
                <div className={styles.aurora__item}></div>
            </div>
        </h1>
    );
}
