import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {genStopLabel} from '../../utils/global';
import * as styles from './StopsFilter.scss';

import Store from '../../models/index'

interface Props {
    stops?: any;
    existStops?: any;
    changeStops?: any;
}

@inject((store: typeof Store) => ({
    existStops: store.tickets.existStops,
    stops: store.app.stops,
    changeStops: store.app.changeStops
}))
@observer
class StopsFilter extends React.Component<Props> {
    setStop = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        this.props.changeStops(stop, true); 
    }
    render() {
        const {
            stops,
            existStops,
            changeStops,
        } = this.props;
        return (
            <>
                {existStops.map((stop: string) =>
                    <label className={styles.checkbox} htmlFor={`checkboxStop${stop}`} key={stop}>
                        <input 
                            type="checkbox" 
                            id={`checkboxStop${stop}`}
                            value={stop}
                            checked={stops.includes(stop)}
                            onChange={(e) => changeStops(e.target.value)}
                        />
                        <span className={styles.checkbox_face}></span>
                        {genStopLabel(stop)}
                        {stop !== 'all' &&
                            <div className={styles.only} onClick={this.setStop}>Только</div>
                        }
                    </label>
                )}
            </>
        )
    }
}

export default StopsFilter;