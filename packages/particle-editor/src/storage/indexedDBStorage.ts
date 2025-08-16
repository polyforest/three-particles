import { ParticleEffectModelJson } from 'three-particles';

export interface SavedEffect {
  id: string;
  name: string;
  effect: ParticleEffectModelJson;
  lastModified: number;
}

const DB_NAME = 'ParticleEditorDB';
const DB_VERSION = 1;
const STORE_NAME = 'particleEffects';

export const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(new Error('Failed to open database'));
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
};

export const saveEffect = async (name: string, effect: ParticleEffectModelJson): Promise<string> => {
  const db = await openDatabase();
  const id = crypto.randomUUID();

  const savedEffect: SavedEffect = {
    id,
    name,
    effect,
    lastModified: Date.now()
  };

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(savedEffect);

    request.onsuccess = () => {
      resolve(id);
    };

    request.onerror = () => {
      reject(new Error('Failed to save effect'));
    };
  });
};

export const updateEffect = async (id: string, name: string, effect: ParticleEffectModelJson): Promise<void> => {
  const db = await openDatabase();

  const savedEffect: SavedEffect = {
    id,
    name,
    effect,
    lastModified: Date.now()
  };

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(savedEffect);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(new Error('Failed to update effect'));
    };
  });
};

export const getAllEffects = async (): Promise<SavedEffect[]> => {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(new Error('Failed to get effects'));
    };
  });
};

export const getEffectById = async (id: string): Promise<SavedEffect | null> => {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => {
      resolve(request.result || null);
    };

    request.onerror = () => {
      reject(new Error('Failed to get effect'));
    };
  });
};

export const deleteEffect = async (id: string): Promise<void> => {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(new Error('Failed to delete effect'));
    };
  });
};
