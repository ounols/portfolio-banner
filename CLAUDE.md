# Claude Code Configuration

## Project Structure

This project uses a hybrid architecture with:
- **CSEngine**: Core engine as a git submodule (read-only)
- **src/**: Project-specific modifications and extensions to the core engine
- **platforms/**: Platform-specific build configurations

## Build Commands

```bash
# Build the project (Windows)
cd platforms/Windows
cmake -B build
cmake --build build --config Debug
```

## Development Workflow

### Core Engine vs Project Code
- **CSEngine/**: Core engine code (submodule) - do not modify directly
- **src/**: Project-specific code that extends or overrides core functionality
- CMakeLists.txt excludes core files when project-specific versions exist in src/

### File Override Pattern
When creating project-specific versions of core files:
1. Copy the file structure to `src/` directory
2. Update includes to use relative paths (e.g., `#include "Util/Settings.h"`)
3. Add exclusion to CMakeLists.txt to prevent conflicts

### Example Override Files
- `src/Manager/LightMgr.cpp` - overrides `CSEngine/src/Manager/LightMgr.cpp`
- `src/Manager/EngineCoreInstance.cpp` - overrides core instance
- `src/Util/Settings.cpp` - overrides core settings

## Directory Structure

```
portfolio-banner/
├── CSEngine/                 # Core engine submodule
│   ├── src/                 # Core engine source
│   ├── External/            # Third-party dependencies
│   └── ...
├── src/                     # Project-specific code
│   ├── Manager/             # Engine managers (overrides)
│   ├── Util/                # Utility classes (overrides)
│   └── Scene/               # Scene management
├── platforms/               # Platform-specific builds
│   └── Windows/             # Windows build configuration
└── Assets/                  # Project assets
```

## Key Components

### Core Systems
- **EngineCoreInstance**: Main engine instance management
- **LightMgr**: Lighting system manager (PBR support)
- **Settings**: Engine configuration and constants

### Rendering
- **PBR Pipeline**: Physically Based Rendering
- **Deferred/Forward Rendering**: Dual rendering paths
- **Shader Management**: Dynamic shader loading

## Target Platforms

**PRIMARY TARGET: Web (WebGL 2.0)**
- This project is ultimately designed for web deployment
- All code changes must be WebGL 2.0-compatible
- Test locally on Windows/macOS but verify web compatibility

### Platform Support
- **Web (WebGL 2.0)**: Primary deployment target - **ALWAYS TEST**
- **Windows**: Development and testing platform
- **macOS**: Development and testing platform

## Build Requirements

### Prerequisites
- Visual Studio 2019/2022 (Windows development)
- CMake 3.15+
- Git with submodule support
- Emscripten SDK (for WebGL builds)

### Dependencies (Auto-managed)
- GLEW: OpenGL extension loading (Windows/macOS)
- WebGL: Browser-native (Web)
- Squirrel: Scripting language support

## Build Configurations

### Windows/macOS Development
```bash
# Debug build
cmake --build build --config Debug

# Release build  
cmake --build build --config Release

# Clean build
cmake --build build --target clean
```

### WebGL/Emscripten Build
```bash
# Set up Emscripten environment
source /path/to/emsdk/emsdk_env.sh

# Configure for Emscripten
emcmake cmake -B build-web

# Build for web
emmake cmake --build build-web

# Generate web files (HTML/JS/WASM)
```

## Common Development Tasks

### Adding New Manager Class
1. Create in `src/Manager/YourManager.h|cpp`
2. Follow existing manager patterns
3. Register in EngineCoreInstance if needed

### Modifying Rendering Pipeline
1. Check `src/Manager/LightMgr.cpp` for examples
2. Shader files in `Assets/Shader/`
3. Material files in `Assets/Materials/`

### Engine Settings
- Modify `src/Util/Settings.cpp` for project-specific values
- Use constants for shader/material paths
- **Platform-specific conditionals**: Check `__EMSCRIPTEN__` for WebGL
- **WebGL Compatibility**: Use GLSL ES 3.00 (WebGL 2.0)

### WebGL 2.0-Specific Considerations
1. **Shader Compatibility**: Use GLSL ES 3.00 for WebGL 2.0
2. **Texture Formats**: WebGL 2.0 supports more formats (3D textures, etc.)
3. **Uniform Buffer Objects**: Available in WebGL 2.0
4. **Memory Limits**: Consider browser memory constraints
5. **File Loading**: Use async loading for web assets

## Debugging Tips

### Visual Studio
- Set startup project to CSEngine
- Use Debug configuration for development
- Enable native code debugging

### Common Issues
- **Missing Assets**: Check file paths in Settings.cpp
- **Shader Compilation**: Verify shader syntax and paths
- **Lighting Issues**: Check max lights limit in Settings
- **WebGL 2.0 Compatibility**: 
  - Shader precision issues (mediump/highp in GLSL ES 3.00)
  - Browser WebGL 2.0 support check
  - Browser security restrictions
  - CORS issues with asset loading

## Git Submodule Commands

```bash
# Initialize submodules
git submodule update --init --recursive

# Update submodules to latest
git submodule update --remote

# Check submodule status
git submodule status

# Pull latest changes with submodules
git pull --recurse-submodules
```

## Performance Considerations

### General
- Max lights limit: 5 (configurable in Settings)
- Max joints for animation: 60
- Asset packing: Disabled by default
- Deferred rendering preferred for complex scenes

### WebGL-Specific
- **Draw calls**: Minimize for mobile browsers
- **Texture memory**: Optimize for mobile GPU limits
- **Shader complexity**: Avoid complex fragment shaders on mobile
- **Geometry**: Use LOD for mobile devices
- **Frame budget**: Target 60fps on desktop, 30fps on mobile

## Troubleshooting

### Build Errors
- Ensure submodules are initialized
- Check Visual Studio platform (x86/x64) matches
- Verify all dependencies are present

### Runtime Errors
- Check working directory includes Assets/
- Verify shader and material file paths
- Enable debug output for detailed logs

### WebGL Testing
```bash
# Local web server for testing (avoid CORS issues)
python -m http.server 8000
# or
npx serve build-web

# Browser developer tools
# - Check WebGL context creation
# - Monitor shader compilation errors
# - Watch network requests for assets
# - Profile GPU performance
```

## WebGL Development Checklist

### Before Code Changes
- [ ] Check existing WebGL conditionals (`#ifdef __EMSCRIPTEN__`)
- [ ] Verify shader GLSL ES 3.00 compatibility (WebGL 2.0)
- [ ] Consider mobile GPU limitations

### After Code Changes
- [ ] Build and test on Windows/macOS first
- [ ] Build with Emscripten for WebGL
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify asset loading and rendering
- [ ] Check browser console for WebGL errors

### WebGL 2.0 Browser Support
- **Desktop**: Chrome 56+, Firefox 51+, Safari 15+, Edge 79+
- **Mobile**: iOS Safari 15+, Android Chrome 56+
- **Requirement**: WebGL 2.0 context creation mandatory
- **Fallback**: No WebGL 1.0 fallback needed