import React from 'react';
import { connect } from 'react-redux';
import {
    getTotalBasketCount,
    getTotalBasketPrice
} from '../../selectors'

const BasketIcon = ({totalBusketCount, totalBusketPrice}: any) => {
    const { totalPriceInDollar, totalPriceInEuro } = totalBusketPrice;
    return(
        <div className="basket-icon">
            <i className="fa fa-shopping-basket" aria-hidden="true"><span>{totalBusketCount}</span></i> ${totalPriceInDollar} / €{totalPriceInEuro}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    totalBusketCount: getTotalBasketCount(state),
    totalBusketPrice: getTotalBasketPrice(state),
})

export default connect(mapStateToProps)(BasketIcon);