import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiCircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  top: {
    color: '#000',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    // strokeLinecap: 'round',
  },
}));

function CircularProgress({ className }) {
  // return <MuiCircularProgress size={30} />;
  const classes = useStyles();

  return (
    <div className={className}>
      <div className={classes.root}>
        <MuiCircularProgress
          variant="determinate"
          className={classes.bottom}
          size={30}
          thickness={2}
          value={100}
        />
        <MuiCircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={30}
          thickness={2}
        />
      </div>
    </div>
  );
}

CircularProgress.defaultProps = {
  className: '',
};

CircularProgress.propTypes = {
  className: PropTypes.string,
};

export default CircularProgress;
