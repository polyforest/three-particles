import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ParticleEffectModelJson } from 'three-particles';
import { SavedEffect, getAllEffects, deleteEffect, getEffectById } from '../storage/indexedDBStorage';

interface RecentEffectsDialogProps {
  open: boolean;
  onClose: () => void;
  onSelectEffect: (effect: ParticleEffectModelJson) => void;
}

export const RecentEffectsDialog: React.FC<RecentEffectsDialogProps> = ({
  open,
  onClose,
  onSelectEffect
}) => {
  const [effects, setEffects] = useState<SavedEffect[]>([]);
  const [loading, setLoading] = useState(true);

  const loadEffects = async () => {
    try {
      setLoading(true);
      const savedEffects = await getAllEffects();
      // Sort by last modified date, newest first
      savedEffects.sort((a, b) => b.lastModified - a.lastModified);
      setEffects(savedEffects);
    } catch (error) {
      console.error('Failed to load effects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      loadEffects();
    }
  }, [open]);

  const handleSelectEffect = async (id: string) => {
    try {
      const savedEffect = await getEffectById(id);
      if (savedEffect) {
        onSelectEffect(savedEffect.effect);
        onClose();
      }
    } catch (error) {
      console.error('Failed to load effect:', error);
    }
  };

  const handleDeleteEffect = async (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    try {
      await deleteEffect(id);
      await loadEffects();
    } catch (error) {
      console.error('Failed to delete effect:', error);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Recent Effects</DialogTitle>
      <DialogContent>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : effects.length === 0 ? (
          <Typography>No saved effects found.</Typography>
        ) : (
          <List>
            {effects.map((effect, index) => (
              <React.Fragment key={effect.id}>
                <ListItem button onClick={() => handleSelectEffect(effect.id)}>
                  <ListItemText
                    primary={effect.name}
                    secondary={formatDate(effect.lastModified)}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={(e) => handleDeleteEffect(e, effect.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                {index < effects.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </DialogContent>
    </Dialog>
  );
};
