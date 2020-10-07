import React from 'react';

import './preview-item.styles.scss';
import ItemCard from '../items-card/item-card.component'

const PreviewItem = ({ data }) => (
    <div className="preview-container" key={data.id}>
        <h2>{data.title}</h2>
        <div className="previews">
            {                
                data.items.map((obj, index) => {
                    if(index < 4){
                        return <ItemCard key={obj.id} data={obj} />
                    }
                })
            }
        </div>
    </div>
)

export default PreviewItem;