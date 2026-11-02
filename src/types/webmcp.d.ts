import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolparamdescription?: string;
  }
}

export interface WebMCPTool {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, unknown>;
    required?: string[];
  };
  execute: (args: Record<string, unknown>) => Promise<unknown> | unknown;
}

export interface RegisterToolOptions {
  signal?: AbortSignal;
}

export interface ModelContext {
  registerTool: (tool: WebMCPTool, options?: RegisterToolOptions) => Promise<void>;
  unregisterTool?: (name: string) => Promise<void> | void;
  getTools?: () => WebMCPTool[] | Map<string, WebMCPTool>;
}

declare global {
  interface Document {
    modelContext?: ModelContext;
  }
  interface Window {
    modelContext?: ModelContext;
  }
}
