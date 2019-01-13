import * as React from 'react';
import {inject, observer} from 'mobx-react';
import * as styles from './CurrencySwitcher.scss';

import Button from '../../components/Button/Button';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import * as ButtonGroupStyles from '../../components/ButtonGroup/ButtonGroup.scss';

import AppStore from '../../models/index';
import {currencyArr} from '../../utils/global';

interface Props {
    changeCurrency?: any;
}

@inject((store: typeof AppStore) => ({
    existStops: store.tickets.existStops,
    changeCurrency: store.app.changeCurrency
}))
@observer
class CurrencySwitcher extends React.Component<Props> {
    render() {
        const {
            changeCurrency,
        } = this.props;
        return (
            <div className={styles.container}>
                <ButtonGroup>
                    {currencyArr.map((currency: string, i: number) =>
                        <Button 
                            key={currency}
                            classNames={currencyArr[i+1] === AppStore.app.currency && ButtonGroupStyles.noRigthBorder}
                            blue
                            active={AppStore.app.currency === currency}
                            onClick={() => {changeCurrency(currency)}}
                        >
                            {currency}
                        </Button>
                    )}
                </ButtonGroup>
            </div>
        )
    }
}

export default CurrencySwitcher;