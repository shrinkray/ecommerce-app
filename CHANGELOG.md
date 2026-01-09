# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed - Node 20 Upgrade (2026-01-09)

#### Dependencies
- **Next.js**: Upgraded from 11.1.2 → 14.2.35
- **React**: Upgraded from 17.0.2 → 18.3.1
- **React DOM**: Upgraded from 17.0.2 → 18.3.1
- **Apollo Client**: Upgraded from 3.4.13 → 3.11.0
- **GraphQL**: Upgraded from 15.6.0 → 16.9.0
- **ESLint**: Upgraded from 7.32.0 → 8.57.1
- **eslint-config-next**: Upgraded from 11.1.2 → 14.2.0

#### Configuration
- **Node version**: Set to 20.11.0 in `.nvmrc`
- **Package manager**: Switched from Yarn to npm (removed `yarn.lock`)
- **Next.js config**: 
  - Removed deprecated `target: 'serverless'` option
  - Added `output: 'export'` for static site generation
  - Set `images.unoptimized: true` for static export compatibility
- **Netlify config**: Created `netlify.toml` with Node 20 and npm settings
- **Build script**: Added `build:static` script to `package.json`

#### Code Changes
- **Apollo Client**: Updated initialization to use `HttpLink` instead of deprecated `uri` option
- **Storybook**: Fixed React unescaped entities error in `Page.jsx`
- **CSS**: Fixed overlapping product rows in `Home.module.scss`
  - Changed `img` height from `100%` to `auto`
  - Added flex layout to list items for proper structure

#### Removed
- **API route**: Deleted `src/pages/api/hello.js` (incompatible with static export)
- **Deprecated config**: Removed `target: 'serverless'` from Next.js config
- **Yarn lock file**: Removed to avoid package manager conflicts

#### Deployment
- Configured Netlify for Node 20.11.0 with npm 10.2.4
- Disabled incompatible Next.js Runtime plugin (v3.9.2)
- Set publish directory to `out` for static export
- Site now deploys as fully static HTML

#### Breaking Changes
- API routes are no longer supported (moved to static export)
- Images are unoptimized (required for static export)
- Site is now fully static with no server-side rendering

### Fixed
- Build errors related to deprecated Apollo Client API
- ESLint errors from unescaped quotes in Storybook files
- Product grid layout issues with overlapping rows
- Netlify deployment errors from incompatible plugin versions
- Node version compatibility issues
