import React, { useState } from 'react';

import { FishCardList } from '..';

export default {
    title: "Example/FishCardList",
    component: FishCardList,
    argTypes: { onDelete: { action: 'clicked' }, onLike: { action: 'clicked' } },
}

const Template = args => <FishCardList {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    items: [
        {
            id: 1,
            title: 'Crimson Jobfish',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Pink_snapper_NB_W_0.png",
            imgAlt: "Pink snapper",
            imgTitle: "Pink snapper",
            isLiked: false,
        },
        {
            id: 2,
            title: 'White Hake',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Hake_White_NB_W_0.png",
            imgAlt: "White Hake",
            imgTitle: "Illustration of white hake",
            isLiked: true
        },
    ],
}


const DynamicTemplate = ({ items, ...args }) => {
    const [liked, setLiked] = useState([2]);
    const [deleted, setDeleted] = useState([]);

    return <FishCardList 
        items={items.filter(x => !deleted.includes(x.id)).map(x => ({
            ...x,
            isLiked: !!liked.find(w => w === x.id)
        }))}
        {...args}
        onLike={(id) => !!liked.find(x => x === id) ? setLiked(liked.filter(x => x !== id)) : setLiked([...liked, id])}
        onDelete={(id) => setDeleted([...deleted, id])}
    />
};

export const PlayWithLike = DynamicTemplate.bind({});

PlayWithLike.args = {
    items: [
        {
            id: 1,
            title: 'Crimson Jobfish',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Pink_snapper_NB_W_0.png",
            imgAlt: "Pink snapper",
            imgTitle: "Pink snapper",
            isLiked: false,
        },
        {
            id: 2,
            title: 'White Hake',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Hake_White_NB_W_0.png",
            imgAlt: "White Hake",
            imgTitle: "Illustration of white hake",
            isLiked: true
        },
    ],
}