import React, { useContext } from "react";

import { FishCardList } from "@components";
import { FishCardContext } from "@contexts";

export const FishCardFavoritesContainer = () => {
    const {
        cards,
        deleted,
        liked,
    } = useContext(FishCardContext);

    const items = cards
        .filter(card => !deleted.includes(card.id) && liked.includes(card.id));

    return <FishCardList items={items} />
}