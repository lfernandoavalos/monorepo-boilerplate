import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import styles
  from './index.module.scss';

class Button extends PureComponent {
  static propTypes = {
    content: PropTypes.string,
    children: PropTypes.any,
  };

  static defaultProps = {
    content: undefined,
    children: undefined,
  }

  render() {
    const {
      content,
      children,
    } = this.props;
    return (
      <button className={styles.round}>
        {content || children}
      </button>
    );
  }
}

export default Button;
