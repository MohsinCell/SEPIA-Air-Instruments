# Sepia Air Instruments

<div align="center">

![Sepia Air Instruments](https://img.shields.io/badge/Sepia-Air%20Instruments-FF6B6B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik05IDE4VjVsOC04djE4bC04LTUiLz48cGF0aCBkPSJNOSA5YTMgMyAwIDAgMC0zIDN2MGEzIDMgMCAwIDAgMyAzIi8+PC9zdmc+)

**A touchless music performance system powered by hand tracking**

Create notes, build chords, and play 60+ instruments using intuitive hand gestures.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-00A6D6?style=flat-square&logo=google&logoColor=white)](https://mediapipe.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)

[Live Demo](https://sepia.website) · [Features](#features) · [Getting Started](#getting-started) · [How It Works](#how-it-works) · [Instruments](#instruments)

</div>

---

## Overview

Sepia Air Instruments transforms your webcam into a musical instrument. Using advanced AI-powered hand tracking, you can play music simply by raising your fingers in front of the camera. No hardware required, no software to install. Just open the app and start creating music.

**Try it now at [https://sepia.website](https://sepia.website)**

## Features

- **Gesture-Based Music Creation** - Each finger triggers a unique note or chord
- **60+ Virtual Instruments** - Piano, guitar, synthesizers, brass, woodwinds, ethnic instruments, and more
- **Real-Time Hand Tracking** - Powered by Google's MediaPipe for accurate, low-latency detection
- **Two-Hand Support** - Use both hands simultaneously for 10 different notes/chords
- **Visual Feedback** - Beautiful particle effects and real-time hand skeleton visualization
- **Audio Recording** - Record your performances and download as audio files
- **No Installation Required** - Runs entirely in the browser
- **Mobile Friendly** - Works on tablets and phones in landscape mode
- **Privacy First** - All processing happens locally; no data leaves your device

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Webcam
- Node.js 18+ (for development)

### Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/MohsinCell/SEPIA-Air-Instruments.git
cd SEPIA-Air-Instruments

# Build and run with Docker Compose
docker-compose up -d --build

# Open in browser
open http://localhost:3000
```

### Development Setup

```bash
# Clone the repository
git clone https://github.com/MohsinCell/SEPIA-Air-Instruments.git
cd SEPIA-Air-Instruments

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:5173
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## How It Works

### Hand Tracking

Sepia uses [MediaPipe Hands](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker) to detect and track hand landmarks in real-time. The system identifies 21 key points on each hand and determines which fingers are raised based on their relative positions.

```
        Middle
          |
Index     |     Ring
  \       |       /
   \      |      /
    \     |     /    Pinky
     \    |    /       |
      \   |   /        |
       \  |  /         |
        \ | /          |
         \|/           |
    Thumb [Palm] ------+
```

### Finger Detection

The app uses a sophisticated algorithm to determine if a finger is raised:

- **Thumb**: Uses a voting system with 4 checks (extension, pointing direction, straightness, distance from index)
- **Other Fingers**: Compares fingertip position to the middle knuckle (PIP joint)

### Sound Generation

Audio is generated using the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) with [Tone.js](https://tonejs.github.io/) for instrument synthesis. Each finger maps to a specific note or chord based on the selected instrument preset.

## Instruments

Sepia includes **68 instruments** across 9 categories:

| Category | Instruments |
|----------|-------------|
| **Keys** | Grand Piano, Bright Piano, Electric Piano, Honky Tonk, Jazz Piano, Harpsichord, Clavinet, Celesta, Church Organ, Rock Organ, Accordion, Harmonica |
| **Strings** | Electric Guitar, Acoustic Guitar, Nylon Guitar, Overdriven Guitar, Distortion Guitar, Orchestra Strings, Solo Violin, Solo Cello, Pizzicato, Electric Bass, Slap Bass, Synth Bass, Harp |
| **Brass** | Brass Ensemble, Trumpet, Muted Trumpet, Trombone, French Horn, Tuba |
| **Woodwinds** | Alto Saxophone, Tenor Saxophone, Flute, Pan Flute, Clarinet, Oboe, Bassoon, Recorder |
| **Synth** | Lead Synth, Square Lead, Synth Pad, Warm Pad, Retrowave, Fantasy Synth |
| **Electronic** | Dubstep Bass, Chiptune, Sci-Fi FX |
| **Ethnic/World** | Sitar, Banjo, Shamisen, Koto, Kalimba, Bagpipe, Steel Drums |
| **Percussion** | Drum Kit, Electronic Kit, Glockenspiel, Music Box, Vibraphone, Marimba, Xylophone, Tubular Bells, Timpani |
| **Ambient** | Ambient Pad, Space Ambient, Celestial Bells, Choir Aahs, Voice Oohs |

## Controls

### Finger Mapping

Each hand has 5 fingers mapped to different notes/chords:

| Finger | Left Hand | Right Hand |
|--------|-----------|------------|
| Thumb | Note/Chord 1 | Note/Chord 6 |
| Index | Note/Chord 2 | Note/Chord 7 |
| Middle | Note/Chord 3 | Note/Chord 8 |
| Ring | Note/Chord 4 | Note/Chord 9 |
| Pinky | Note/Chord 5 | Note/Chord 10 |

### Settings

- **Volume** - Adjust master volume
- **Show Skeleton** - Toggle hand skeleton visualization
- **Show Particles** - Toggle particle effects on note trigger
- **Recording** - Record and download your performance

## Project Structure

```
sepia-air-instruments/
├── src/
│   ├── components/          # React components
│   │   ├── landing/         # Landing page
│   │   ├── panels/          # Sidebar, RightPanel, Stage
│   │   └── ui/              # Reusable UI components & icons
│   ├── constants/           # Instrument presets, chords, config
│   ├── hooks/               # Custom React hooks
│   │   ├── useAudioEngine   # Sound synthesis
│   │   ├── useAudioRecorder # Recording functionality
│   │   ├── useHandTracking  # MediaPipe integration
│   │   └── ...
│   ├── styles/              # CSS stylesheets
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   │   ├── AudioEngine      # Web Audio API wrapper
│   │   ├── handDetection    # Finger detection algorithms
│   │   └── drawing          # Canvas rendering utilities
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── Dockerfile               # Docker build configuration
├── docker-compose.yml       # Docker Compose configuration
├── nginx.conf               # Nginx configuration for production
└── package.json
```

## Tech Stack

- **Frontend Framework**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Hand Tracking**: [MediaPipe Hands](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
- **Audio Synthesis**: [Tone.js](https://tonejs.github.io/) + [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- **Styling**: CSS with CSS Variables (custom design system)
- **Deployment**: [Docker](https://www.docker.com/) + [Nginx](https://nginx.org/)

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Edge | ✅ Full support |
| Safari | ✅ Full support |
| Mobile Chrome | ✅ Landscape mode |
| Mobile Safari | ✅ Landscape mode |

> **Note**: Camera access requires HTTPS in production environments.

## Performance Tips

- Use good lighting for better hand detection
- Position your hands 1-3 feet from the camera
- Use landscape orientation on mobile devices
- Close other camera-using applications
- Chrome typically offers the best performance

## Privacy

Sepia Air Instruments is designed with privacy in mind:

- **No data collection** - All processing happens locally in your browser
- **No server uploads** - Video feed never leaves your device
- **No cookies** - No tracking or analytics
- **No account required** - Just open and play

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MediaPipe](https://mediapipe.dev/) for the incredible hand tracking solution
- [Tone.js](https://tonejs.github.io/) for the powerful audio synthesis library
- [Google Fonts](https://fonts.google.com/) for the Inter typeface

---

<div align="center">

**Made with ❤️ for musicians everywhere**

[⬆ Back to top](#sepia-air-instruments)

</div>
