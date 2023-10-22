import React from "react";
import styles from "./style.module.scss";

type DescriptionProps = {
    data: {
        title: string;
        description: string;
        speed: number;
    }[],
    selectedProject: number | null;
}
export const Description: React.FC<DescriptionProps> = ({data, selectedProject}) => {
    const crop = (string: string, maxLength: number) => {
        return string.substring(0, maxLength);
    }

    return (
        <div className={styles.descriptions}>
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                        <div
                            key={i}
                            className={styles.description}
                            style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                        >
                            <p>{crop(title, 9)}</p>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
