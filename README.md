# 🏠 3D Room Explorer

> An immersive 3D room visualization built with modern web technologies

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Experience a fully interactive 3D room environment with realistic furniture, lighting, and physics. Built with **Vite**, **Three.js**, **TypeScript**, **JavaScript**, and **Tailwind CSS** for optimal performance and developer experience.

## ✨ Features

- 🏡 **Realistic 3D Room** - Detailed interior with furniture and decorations
- 🎮 **Interactive Objects** - Click and interact with room elements
- 💡 **Dynamic Lighting** - Realistic shadows and ambient lighting
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🎨 **Customizable Materials** - Change textures, colors, and finishes
- 🖱️ **Smooth Controls** - Intuitive camera movement and navigation
- ⚡ **High Performance** - Optimized rendering with 60fps
- 🔧 **Hot Reload** - Instant development feedback with Vite

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Vite](https://vitejs.dev/) | Build tool & dev server | ^5.0.0 |
| [Three.js](https://threejs.org/) | 3D rendering engine | ^0.160.0 |
| [TypeScript](https://www.typescriptlang.org/) | Static type checking | ^5.0.0 |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Core scripting | ES2022 |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS | ^3.4.0 |

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm package manager
- Modern browser with WebGL 2.0 support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/euii-ii/3D-Room-Explorer.git
   cd 3d-room
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check without building
npm run type-check

# Lint code
npm run lint
```

## 📁 Project Structure

```
3d-room/
├── 📁 public/                    # Static assets
│   ├── models/                  # 3D models (.gltf, .glb, .obj)
│   │   ├── furniture/           # Room furniture models
│   │   └── decorations/         # Decorative objects
│   ├── textures/                # Material textures
│   │   ├── walls/               # Wall textures
│   │   ├── floors/              # Floor materials
│   │   └── fabrics/             # Furniture textures
│   └── sounds/                  # Audio files (optional)
├── 📁 src/
│   ├── 📁 components/           # Reusable components
│   │   ├── UI/                  # User interface elements
│   │   │   ├── Controls.ts      # Camera and interaction controls
│   │   │   ├── LoadingScreen.ts # Loading indicator
│   │   │   └── SettingsPanel.ts # Room customization panel
│   │   └── Room/                # Room-specific components
│   │       ├── Furniture.ts     # Furniture objects
│   │       ├── Lighting.ts      # Light setup
│   │       └── Environment.ts   # Room environment
│   ├── 📁 scenes/               # Three.js scene management
│   │   ├── RoomScene.ts         # Main room scene
│   │   └── SceneManager.ts      # Scene lifecycle management
│   ├── 📁 utils/                # Helper utilities
│   │   ├── loaders.js           # Asset loading (JavaScript)
│   │   ├── materials.ts         # Material definitions
│   │   ├── physics.ts           # Physics calculations
│   │   └── interactions.js      # User interactions (JavaScript)
│   ├── 📁 types/                # TypeScript definitions
│   │   ├── room.d.ts            # Room-related types
│   │   └── three.d.ts           # Three.js extensions
│   ├── 📁 styles/               # Styling
│   │   ├── globals.css          # Global styles
│   │   └── components.css       # Component-specific styles
│   ├── main.ts                  # Application entry point (TypeScript)
│   └── app.js                   # Core app logic (JavaScript)
├── 📄 index.html                # Main HTML template
├── ⚙️ vite.config.ts            # Vite configuration
├── ⚙️ tsconfig.json             # TypeScript configuration
├── ⚙️ tailwind.config.js        # Tailwind CSS configuration
├── ⚙️ .eslintrc.js              # ESLint configuration
└── 📄 package.json              # Project dependencies
```

## 🎮 Controls & Interaction

### Camera Controls
- **Left Mouse + Drag** - Rotate camera around room
- **Right Mouse + Drag** - Pan camera view
- **Mouse Wheel** - Zoom in/out
- **Middle Mouse + Drag** - Pan (alternative)

### Keyboard Shortcuts
- **W, A, S, D** - Move camera (FPS mode)
- **Space** - Reset camera position
- **F** - Toggle fullscreen
- **L** - Toggle lighting modes
- **H** - Show/hide help panel

### Object Interaction
- **Click** - Select and interact with objects
- **Double Click** - Focus camera on object
- **Drag** - Move selected objects (if enabled)

## 🎨 Room Features

### Furniture & Objects
- **Living Room Set** - Sofa, coffee table, TV stand
- **Bedroom Items** - Bed, nightstands, wardrobe
- **Kitchen Elements** - Cabinets, appliances, dining table
- **Decorative Items** - Paintings, plants, books, lamps

### Lighting System
- **Ambient Lighting** - General room illumination
- **Point Lights** - Lamps and fixtures
- **Directional Light** - Window sunlight simulation
- **Shadow Mapping** - Realistic shadow casting

### Material System
- **PBR Materials** - Physically based rendering
- **Texture Mapping** - High-quality surface textures
- **Normal Maps** - Surface detail enhancement
- **Environment Mapping** - Realistic reflections

## 🔧 Customization

### Adding New Furniture

1. **Add 3D Model**
   ```bash
   # Place model in public/models/furniture/
   public/models/furniture/new-chair.glb
   ```

2. **Create Furniture Component**
   ```typescript
   // src/components/Room/NewChair.ts
   import { FurnitureBase } from './FurnitureBase';
   
   export class NewChair extends FurnitureBase {
     constructor() {
       super('new-chair.glb');
     }
   }
   ```

3. **Register in Scene**
   ```typescript
   // src/scenes/RoomScene.ts
   import { NewChair } from '../components/Room/NewChair';
   
   const chair = new NewChair();
   this.scene.add(chair.mesh);
   ```

### Modifying Materials
```javascript
// src/utils/materials.js
export const createWoodMaterial = () => {
  return new THREE.MeshStandardMaterial({
    map: textureLoader.load('/textures/wood/diffuse.jpg'),
    normalMap: textureLoader.load('/textures/wood/normal.jpg'),
    roughnessMap: textureLoader.load('/textures/wood/roughness.jpg')
  });
};
```

### Customizing Lighting
```typescript
// src/components/Room/Lighting.ts
export class RoomLighting {
  setupAmbientLight(): void {
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    this.scene.add(ambientLight);
  }
  
  setupWindowLight(): void {
    const sunlight = new THREE.DirectionalLight(0xffffff, 1);
    sunlight.position.set(10, 10, 5);
    sunlight.castShadow = true;
    this.scene.add(sunlight);
  }
}
```

## 📱 Responsive Design

The 3D room automatically adapts to different screen sizes:

- **Desktop** - Full feature set with mouse controls
- **Tablet** - Touch-optimized interface
- **Mobile** - Simplified UI with touch controls
- **VR Ready** - WebXR support for VR headsets

## 🔧 Development Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally
npm run type-check   # Run TypeScript type checking
npm run lint         # Run ESLint code linting
npm run lint:fix     # Auto-fix linting issues
npm run clean        # Clean build artifacts and cache
npm run analyze      # Analyze bundle size
```

## 🌐 Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 90+ | Full feature support |
| Firefox | 88+ | Full feature support |
| Safari | 14+ | Limited WebGL extensions |
| Edge | 90+ | Full feature support |
| Mobile Safari | 14+ | Touch controls optimized |
| Chrome Mobile | 90+ | Touch controls optimized |

**Requirements:**
- WebGL 2.0 support
- ES2020+ JavaScript support
- Hardware acceleration recommended

## ⚡ Performance Optimization

### Rendering Optimizations
- **Level of Detail (LOD)** - Automatic quality scaling
- **Frustum Culling** - Only render visible objects
- **Occlusion Culling** - Skip hidden objects
- **Texture Compression** - Optimized texture formats

### Loading Optimizations
- **Progressive Loading** - Load room in stages
- **Asset Preloading** - Preload critical resources
- **Lazy Loading** - Load decorative items on demand
- **Compression** - Gzipped assets and models

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-furniture
   ```
3. **Make your changes**
   - Follow TypeScript/JavaScript coding standards
   - Add appropriate type definitions
   - Test across different browsers
4. **Commit changes**
   ```bash
   git commit -m 'feat: add amazing new furniture piece'
   ```
5. **Push to branch**
   ```bash
   git push origin feature/amazing-furniture
   ```
6. **Open Pull Request**

### Development Guidelines
- Use TypeScript for core logic and type safety
- Use JavaScript for utility functions and loaders
- Follow Tailwind CSS utility patterns
- Maintain 60fps performance target
- Test on mobile devices

## 📝 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Three.js Community** - Excellent 3D library and documentation
- **Poly Haven** - High-quality HDR environments and textures
- **Sketchfab** - 3D model references and inspiration
- **Tailwind CSS** - Utility-first CSS framework
- **Vite Team** - Lightning-fast build tool

## 🔗 Resources & Links

- [📋 Live Demo](https://your-3d-room-demo.com) - Experience the room online
- [📚 Documentation](https://github.com/your-username/3d-room/wiki) - Detailed guides
- [🐛 Bug Reports](https://github.com/your-username/3d-room/issues) - Report issues
- [💬 Discussions](https://github.com/your-username/3d-room/discussions) - Community chat
- [🎨 Asset Credits](CREDITS.md) - Attribution for 3D models and textures

## 📊 Project Stats

- **Bundle Size** - ~2.5MB gzipped
- **Load Time** - <3s on fast 3G
- **Performance** - 60fps on mid-range devices
- **Accessibility** - WCAG 2.1 AA compliant UI

---

<div align="center">
  <p>Built with 🏠 by <a href="https://github.com/your-username">Your Name</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
  <p><em>Transform any space into an interactive 3D experience</em></p>
</div>
