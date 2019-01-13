import * as React from 'react';
import * as styles from './ButtonGroup.scss';

class ButtonGroup extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

export default ButtonGroup;
