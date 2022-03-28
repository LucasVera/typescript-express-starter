export const notImplementedFunction = (): any => {
  throw new Error("Not implemented");
};

export const getNow = (): string => new Date().toISOString();
