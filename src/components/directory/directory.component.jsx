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
                    img_url: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                },
                {
                    title: "jackets",
                    img_url: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                },
                {
                    title: "sneakers",
                    img_url: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                },
                {
                    title: "womens",
                    img_url: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large'
                },
                {
                    title: "mens",
                    img_url: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large'
                },
            ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({ title, id, img_url, size }) => {
                        return <MenuItem key={id} imgUrl={img_url} title={title} size={size}/>
                    })
                }
            </div>
        );
    }
}

export default Directory;
