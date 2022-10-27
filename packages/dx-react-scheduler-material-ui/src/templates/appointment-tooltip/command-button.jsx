import * as React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { OPEN_COMMAND_BUTTON, CLOSE_COMMAND_BUTTON, DELETE_COMMAND_BUTTON } from '@devexpress/dx-scheduler-core';

const getIcon = (id) => {
  if (id === OPEN_COMMAND_BUTTON) {
    return <EditIcon />;
  } if (id === CLOSE_COMMAND_BUTTON) {
    return <CloseIcon />;
  } if (id === DELETE_COMMAND_BUTTON) {
    return <DeleteIcon />;
  } return null;
};

export const CommandButton = ({
  id, onExecute, ...restProps
}) => (
  <IconButton onClick={onExecute} {...restProps} size="large">
    {getIcon(id)}
  </IconButton>
);

CommandButton.propTypes = {
  id: PropTypes.string,
  onExecute: PropTypes.func,
};

CommandButton.defaultProps = {
  onExecute: () => undefined,
  id: '',
};
