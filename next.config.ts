import { execSync } from 'child_process';
import type { NextConfig } from 'next';

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

const nextConfig: NextConfig = {
  async redirects() {
    const workRedirects = ['/work', '/projects'].map(url => ({
      source: url,
      destination: '/showcase',
      permanent: true,
    }));
    return [...workRedirects];
  },
  env: {
    COMMIT_HASH: commitHash,
    BUILD_DATE: new Date().toISOString(),
  },
};

export default nextConfig;
