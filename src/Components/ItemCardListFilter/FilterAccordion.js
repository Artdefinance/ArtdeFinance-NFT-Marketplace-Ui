import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import clsx from 'clsx';
import Icons from '../Icons/Icons';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0',
    borderBottom: '1px solid #eee',
    '&:last-child': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: '0',
    },
  },
  summary: {
    minHeight: 36,
    padding: 0,
    '&.Mui-expanded': {
      minHeight: 36,
    },
    '& .MuiAccordionSummary-content': {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '20px',
      color: '#000',
      margin: '22px 0 20px',
    },
    '& .MuiAccordionSummary-expandIcon': {
      padding: 0,
      transition: 'none',
    },
    '& .MuiIconButton-edgeEnd': {
      marginRight: -1,
    },
    '& .MuiIconButton-label svg path': {
      fill: '#555',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  },
  details: {
    padding: '10px 0 23px',
    flexDirection: 'column',
  },
}));

function FilterAccordion({ className, title, children, defaultExpanded }) {
  const controlsId = useId();
  const summaryId = useId();
  const [expanded, setExpanded] = useState(defaultExpanded);
  const classes = useStyles();

  return (
    <Accordion
      className={clsx(classes.root, 'itemcard-list-filter-accordion', className)}
      expanded={expanded}
      elevation={0}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        className={classes.summary}
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

FilterAccordion.defaultProps = {
  className: '',
  defaultExpanded: true,
};

FilterAccordion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
};

export default FilterAccordion;
