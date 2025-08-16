import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { ParticleEffectModelJson } from 'three-particles';

interface ParticleEffectCreationDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string, effect: ParticleEffectModelJson) => void;
}

export const ParticleEffectCreationDialog: React.FC<ParticleEffectCreationDialogProps> = ({
  open,
  onClose,
  onCreate
}) => {
  const [name, setName] = useState('New Particle Effect');

  const handleCreate = () => {
    // Create a basic particle effect template
    const newEffect: ParticleEffectModelJson = {
      version: '1.0',
      emitters: []
    };

    onCreate(name, newEffect);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Particle Effect</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Effect Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleCreate} variant="contained" color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
