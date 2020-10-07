import React from 'react';
import SHOP_DATA from './shop.data.js';
import './shopPage.styles.scss';

import PreviewItem from '../../components/preview-item/preview-item.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map(item => {
                        return <PreviewItem key={item.id} data={item} />
                    })
                }
            </div>
        )
    }
}

export default ShopPage;