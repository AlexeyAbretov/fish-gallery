import React, { useState } from 'react';

import { FishCard } from '..';

export default {
    title: "Example/FishCard",
    component: FishCard,
    argTypes: { onDelete: { action: 'clicked' }, onLike: { action: 'clicked' } },
}

const Template = args => <FishCard {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    title: 'Crimson Jobfish',
    imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Pink_snapper_NB_W_0.png",
    imgAlt: "Pink snapper",
    imgTitle: "Pink snapper",
    isLiked: false
}

const DynamicTemplate = args => {
    const [isLiked, setLiked] = useState(false);

    return <FishCard {...args} onLike={() => setLiked(!isLiked)} isLiked={isLiked} />
};

export const PlayWithLike = DynamicTemplate.bind({});

PlayWithLike.args = {
    title: 'Crimson Jobfish',
    imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Pink_snapper_NB_W_0.png",
    imgAlt: "Pink snapper",
    imgTitle: "Pink snapper",
    isLiked: false
}
