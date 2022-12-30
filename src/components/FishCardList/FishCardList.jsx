import React from 'react';

import { FishCard } from '../FishCard';

import styles from './FishCardList.css';

export const FishCardList = ({ items = [], onDelete, onLike }) => {
    return <div className={styles.FishCardList}>
        {items?.map(({ id, ...x }) => <FishCard
            key={x.id}
            {...x}
            onDelete={onDelete ? () => onDelete?.(id) : undefined}
            onLike={onLike ? () => onLike?.(id) : undefined}
        />)}
    </div>
}