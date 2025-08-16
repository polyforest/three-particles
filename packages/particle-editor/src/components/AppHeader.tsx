import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { ParticleEffectModelJson } from 'three-particles';
import { FileMenu } from './FileMenu';

interface AppHeaderProps {
  onNewEffect: () => void;
  onOpenEffect: (effect: ParticleEffectModelJson) => void;
  onSaveEffect: (name: string) => void;
  currentEffect: ParticleEffectModelJson | null;
  title: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  onNewEffect,
  onOpenEffect,
  onSaveEffect,
  currentEffect,
  title
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <FileMenu
          onNewEffect={onNewEffect}
          onOpenEffect={onOpenEffect}
          onSaveEffect={onSaveEffect}
          currentEffect={currentEffect}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
