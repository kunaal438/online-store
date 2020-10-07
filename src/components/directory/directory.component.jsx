import React from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            section: [
                {
                    title: "hats",
                    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats',
                },
                {
                    title: "jackets",
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: '',
                },
                {
                    title: "sneakers",
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: '',
                },
                {
                    title: "womens",
                    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    linkUrl: '',
                    size: 'large',
                },
                {
                    title: "mens",
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    linkUrl: '',
                    size: 'large',
                },
            ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({ id, ...allsectionsInput }) => {
                        return <MenuItem key={id} {...allsectionsInput} />
                    })
                }
            </div>
        );
    }
}

export default Directory;
