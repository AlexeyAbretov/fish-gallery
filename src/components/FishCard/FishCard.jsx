import React from 'react';

import styles from './FishCard.css';

import { DeleteIcon, LikeIcon } from './images';

export const FishCard = ({ title, imgUrl, imgAlt, imgTitle, onDelete, onLike, isLiked }) => {
    return <div className={styles.FishCard}>
        <div className={styles.FishCard__header}>
            {onDelete && <img className={styles.FishCard__delete} src={DeleteIcon} alr="delete" title="Удалить" onClick={onDelete} />}
            {onLike && <LikeIcon className={`${styles.FishCard__like} ${isLiked ? styles.FishCard__like_liked : ''}`} onClick={onLike} />}
        </div>
        <div className={styles.FishCard__content}>
            <img className={styles.FishCard__image} src={imgUrl} alt={imgAlt} title={imgTitle} />
        </div>
        <div className={styles.FishCard__footer}>{title}</div>
    </div>
}
