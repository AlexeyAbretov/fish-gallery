import React, { useContext } from "react";

import { FishCardList } from "@components";
import { FishCardContext } from "@contexts";

export const FishCardFavoritesContainer = () => {
    const {
        state
    } = useContext(FishCardContext);

    const items = state.cards
        .filter(card => !state.deleted.includes(card.id) && state.liked.includes(card.id));

    return <FishCardList items={items} />
}