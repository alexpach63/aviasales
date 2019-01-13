import * as React from 'react';
import * as classnames from 'classnames';

import * as styles from './Button.scss';

interface Props {
	orange?: boolean;
	blue?: boolean;
	active?: boolean;
	classNames?: string;
	onClick: React.MouseEventHandler<HTMLElement>;
}

class Button extends React.Component<Props> {
    render() {
		const {
			orange,
			blue,
			active,

			classNames,

			onClick
		} = this.props;

        const className = classnames(
			styles.container,
			{
				[styles.blue]: blue,
				[styles.orange]: orange,
				[styles.blue_active]: active,
			},
			classNames
		);

        return (
            <button className={className} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;
