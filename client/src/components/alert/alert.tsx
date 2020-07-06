import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import {
    removeNotify
} from '../../actions'
import './alert.css'

const Alert: React.FC  = ({ notifier, removeNotify }: any) => {
    const handleClick = ( event: any , id: any ) => {
        event.preventDefault();
        removeNotify(id);
    }

    if(notifier.length)
    return(
        <div className="alert-block">
            {notifier.map((notify: any) => {
                const cs = `alert alert-${notify.type}`;
                return(
                    <div className={cs}>
                        {notify.text}
                        <span onClick={(event: MouseEvent) => handleClick(event, notify.id)} className="alert-block-close">
                            x
                        </span>
                    </div>
                )
            })}
        </div>
    )

    return <></>
}

const mapStateToProps = (state: any) => ({
    notifier: state.notifier
})

const mapDispatchToProps = {
    removeNotify
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);