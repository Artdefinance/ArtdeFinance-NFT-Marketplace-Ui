import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import clsx from 'clsx';
import Icons from '../../Icons/Icons';
import './InfoAccordion.scss';

const useStyles = makeStyles(() => ({
  root: {
    padding: '21px 0 19px',
    '&:first-child': {
      paddingTop: 8,
    },
    '&:last-child': {
      paddingBottom: 5,
    },
    '&:before': {
      backgroundColor: '#eee',
    },
    '&.Mui-expanded': {
      margin: 0,
      '& + .MuiAccordion-root:before': {
        display: 'block',
      },
    },
    '&.Mui-expanded:before': {
      opacity: 1,
    },
  },
  summary: {
    padding: 0,
    minHeight: 40,
    '&.Mui-expanded': {
      minHeight: 40,
    },
    '& .MuiAccordionSummary-content': {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1,
      color: '#000',
      margin: 0,
    },
    '& .MuiAccordionSummary-expandIcon': {
      padding: 8,
    },
  },
  details: {
    padding: '12px 0 14px',
    flexDirection: 'column',
  },
}));

function InfoAccordion({ className, title, children, defaultExpanded }) {
  const controlsId = useId();
  const summaryId = useId();
  const [expanded, setExpanded] = useState(defaultExpanded);
  const classes = useStyles();

  return (
    <Accordion
      className={clsx(classes.root, 'infocard-accordion', className)}
      expanded={expanded}
      elevation={0}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        className={`${classes.summary} infocard-accordion__summary`}
        expandIcon={<Icons shape="arrow-down" />}
        aria-controls={controlsId}
        id={summaryId}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

InfoAccordion.defaultProps = {
  className: '',
  defaultExpanded: true,
};

InfoAccordion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
};

export default InfoAccordion;
