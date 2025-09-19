// Mock for next/navigation (App Router)

export const useRouter = () => ({
  push: async () => {},
  replace: async () => {},
  refresh: () => {},
  back: () => {},
  forward: () => {},
  prefetch: async () => {},
});

export const usePathname = () => '/';

export const useSearchParams = () => {
  const params = new URLSearchParams();
  return {
    get: (key: string) => params.get(key),
    getAll: (key: string) => params.getAll(key),
    has: (key: string) => params.has(key),
    entries: () => params.entries(),
    keys: () => params.keys(),
    values: () => params.values(),
    toString: () => params.toString(),
  } as unknown as URLSearchParams;
};

export const useSelectedLayoutSegments = () => [];

// If you use redirect/notFound in components
export const redirect = (url: string) => {
  console.warn(`Mock redirect to: ${url}`);
};
export const notFound = () => {
  console.warn(`Mock notFound called`);
};
