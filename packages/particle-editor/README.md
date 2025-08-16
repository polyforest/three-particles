# Three Particles Editor

# Particle Editor

A React-based editor for creating and managing particle effects using the three-particles library.

## Features

- Create, edit, and manage particle effects
- Save effects to browser storage (IndexedDB)
- Import and export effects as JSON files
- Real-time preview of particle effects

## Storage

The particle editor uses two main storage mechanisms:

1. **IndexedDB** - For persisting particle effects in the browser between sessions
2. **File System** - For exporting and importing particle effects as JSON files

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

- `/src/components` - React components for the editor UI
- `/src/storage` - Utilities for storing and retrieving particle effects
- `/src/types` - TypeScript type definitions

## File Format

Particle effects are stored as JSON objects conforming to the `ParticleEffectModelJson` type from the three-particles library.
A React-based editor for three-particles.

## Development

```bash
# Install dependencies
npm install

# Start development server with hot-reloading
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Fast development with Vite and hot module replacement
- TypeScript support
- React 19 with the latest features
- Modern build tooling
