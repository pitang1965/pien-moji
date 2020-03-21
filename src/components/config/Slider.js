import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ConfigContext from '../../context/config/configContext';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const ValueLabelComponent = props => {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );
};

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

const CustomizedSlider = props => {
  const configContext = useContext(ConfigContext);
  const classes = useStyles();

  const onChangeHandler = (event, value) => {
    const parameterTitle = props.parameterTitle;
    const actionType = props.actionType;

    if (parameterTitle === undefined || actionType === undefined) {
      console.log('Error: undefined!');
    } else {
      configContext.setParameter(parameterTitle, actionType, value);
    }
  }

  return (
    <div className={classes.root} style={userStyle}>
      <div className={classes.margin} />
      <Typography gutterBottom style={labelStyle}>
        {props.parameterTitle}:
      </Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.defaultValue}
        // onChangeCommitted={onChangeHandler}
        onChange={onChangeHandler}
      />
    </div>
  );
};

const userStyle = {
  display: 'flex',
  width: 'auto'
};

const labelStyle = {
  width: '12rem'
};

CustomizedSlider.propTypes = {
  parameterTitle: PropTypes.string.isRequired,
  actionType: PropTypes.string.isRequired
};

export default CustomizedSlider;
