// Minimal mock of next/router
export const useRouter = () => ({
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push: async () => {},
  replace: async () => {},
  reload: () => {},
  back: () => {},
  prefetch: async () => {},
  isFallback: false,
  basePath: '',
  isLocaleDomain: false,
  isReady: true,
});

export default {
  useRouter,
};
