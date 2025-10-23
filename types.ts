
import React from 'react';

export interface ModelCapability {
  provider: string;
  modelName: string;
  multimodality: React.ReactNode;
  thinking: React.ReactNode;
  apiFeatures: React.ReactNode;
  cost: string;
  excelsAt: string;
}
