import React, { useContext } from "react";

import { FishCardList } from "../../components";
import { FishCardContext } from "../../contexts";

export const FishCardListContainer = () => {
    const {
        items,
        onDelete,
        onLike
    } = useContext(FishCardContext);

    return <FishCardList items={items} onDelete={onDelete} onLike={onLike} />
}