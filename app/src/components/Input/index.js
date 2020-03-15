import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

const Input = ({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
        { icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)"></Icon> }
        <TInput {...rest} ref={ref}></TInput>
    </Container>
  );
}

Input.PropTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

Input.defaulProps = {
    icon: null,
    style: {}
}

export default forwardRef(Input);
