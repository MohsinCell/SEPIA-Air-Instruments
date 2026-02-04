# Sepia | Air Instruments

<div align="center">

![Sepia Air Instruments](https://img.shields.io/badge/Sepia-Air%20Instruments-FF6B6B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik05IDE4VjVsOC04djE4bC04LTUiLz48cGF0aCBkPSJNOSA5YTMgMyAwIDAgMC0zIDN2MGEzIDMgMCAwIDAgMyAzIi8+PC9zdmc+)

**A touchless music performance system powered by hand tracking**

Play 120 General MIDI instruments using intuitive hand gestures - no hardware required.

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

- **120 General MIDI Instruments** - Complete GM sound set including pianos, guitars, strings, brass, synths, ethnic instruments, and percussion
- **Unique Note Mappings** - Each instrument has musically accurate chord voicings and note ranges tailored to its character
- **Gesture-Based Music Creation** - Each finger triggers a unique note or chord (10 total with both hands)
- **Real-Time Hand Tracking** - Powered by Google's MediaPipe for accurate, low-latency detection
- **Hand Accuracy Indicator** - Live feedback showing detection quality for each hand
- **Visual Feedback** - Beautiful particle effects and real-time hand skeleton visualization
- **Audio Recording** - Record your performances and download as audio files
- **Fully Responsive** - Optimized for desktop, tablet, and phone (portrait & landscape)
- **No Installation Required** - Runs entirely in the browser
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
- **Debouncing**: Fingers must be raised for 3 consecutive frames to prevent flickering

### Hand Accuracy

The accuracy indicator measures:
- **Palm stability** - How steady your hand position is
- **Hand orientation** - Whether your palm is facing the camera
- **Presence** - Continuous detection without dropouts

### Sound Generation

Audio is generated using the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) with General MIDI instrument synthesis. Each instrument has unique note mappings designed for its musical character:

- **Pianos** - Full chord voicings (triads, 7ths, 9ths)
- **Guitars** - 6-string chord voicings with proper fingerings
- **Bass** - Low register single notes (E1-G4)
- **Brass** - Spread voicings with octave doublings
- **Reeds/Pipes** - Melodic single notes in appropriate ranges
- **Synth Pads** - Rich extended chords (maj7, m9, add9)
- **Ethnic** - Pentatonic scales and cultural modes
- **Percussion** - GM drum kit sounds

## Instruments

Sepia includes all **120 General MIDI instruments** across 15 categories:

| Category | GM # | Instruments |
|----------|------|-------------|
| **Piano** | 0-7 | Acoustic Grand, Bright Acoustic, Electric Grand, Honky-Tonk, Electric Piano 1 (Rhodes), Electric Piano 2 (DX7), Harpsichord, Clavinet |
| **Chromatic Percussion** | 8-15 | Celesta, Glockenspiel, Music Box, Vibraphone, Marimba, Xylophone, Tubular Bells, Dulcimer |
| **Organ** | 16-23 | Drawbar Organ, Percussive Organ, Rock Organ, Church Organ, Reed Organ, Accordion, Harmonica, Tango Accordion |
| **Guitar** | 24-31 | Nylon Acoustic, Steel Acoustic, Jazz Electric, Clean Electric, Muted Electric, Overdriven, Distortion, Harmonics |
| **Bass** | 32-39 | Acoustic Bass, Electric Finger, Electric Pick, Fretless, Slap Bass 1 & 2, Synth Bass 1 & 2 |
| **Strings** | 40-47 | Violin, Viola, Cello, Contrabass, Tremolo Strings, Pizzicato Strings, Orchestral Harp, Timpani |
| **Ensemble** | 48-55 | String Ensemble 1 & 2, Synth Strings 1 & 2, Choir Aahs, Voice Oohs, Synth Voice, Orchestra Hit |
| **Brass** | 56-63 | Trumpet, Trombone, Tuba, Muted Trumpet, French Horn, Brass Section, Synth Brass 1 & 2 |
| **Reed** | 64-71 | Soprano Sax, Alto Sax, Tenor Sax, Baritone Sax, Oboe, English Horn, Bassoon, Clarinet |
| **Pipe** | 72-79 | Piccolo, Flute, Recorder, Pan Flute, Blown Bottle, Shakuhachi, Whistle, Ocarina |
| **Synth Lead** | 80-87 | Square, Sawtooth, Calliope, Chiff, Charang, Voice, Fifths, Bass+Lead |
| **Synth Pad** | 88-95 | New Age, Warm, Polysynth, Choir, Bowed, Metallic, Halo, Sweep |
| **Synth FX** | 96-103 | Rain, Soundtrack, Crystal, Atmosphere, Brightness, Goblins, Echoes, Sci-Fi |
| **Ethnic** | 104-111 | Sitar, Banjo, Shamisen, Koto, Kalimba, Bagpipe, Fiddle, Shanai |
| **Percussive** | 112-119 | Tinkle Bell, Agogo, Steel Drums, Woodblock, Taiko Drum, Melodic Tom, Synth Drum, Reverse Cymbal |

## Controls

### Finger Mapping

Each instrument has unique note/chord mappings. Here's an example for **Acoustic Grand Piano**:

| Finger | Left Hand | Right Hand |
|--------|-----------|------------|
| Thumb | C Major | E minor |
| Index | G Major | C7 |
| Middle | A minor | G7 |
| Ring | F Major | Am7 |
| Pinky | D minor | Fmaj7 |

Different instrument types use appropriate mappings:
- **Lead instruments** (sax, flute, etc.) use single melodic notes
- **Chord instruments** (piano, guitar, etc.) use full chord voicings
- **Bass instruments** use low register single notes
- **Percussion** uses drum kit sounds (kick, snare, hi-hat, etc.)

### Settings

- **Volume** - Adjust master volume (0-100%)
- **Show Skeleton** - Toggle hand skeleton visualization
- **Show Particles** - Toggle particle effects on note trigger

### Status Bar

The bottom status bar shows:
- **Left hand accuracy** - Detection quality percentage
- **Hand status** - "Show hands to play" or "X hand(s) detected"
- **Right hand accuracy** - Detection quality percentage

## Project Structure

```
air-instruments/
├── src/
│   ├── components/          # React components
│   │   ├── landing/         # Landing page
│   │   ├── panels/          # Sidebar, RightPanel
│   │   ├── visualizer/      # Stage (camera view)
│   │   └── ui/              # Reusable UI components & icons
│   ├── constants/           # Configuration
│   │   ├── chords.ts        # Chord library (MIDI note definitions)
│   │   ├── instruments.ts   # 120 GM instrument definitions
│   │   ├── instrumentMappings.ts  # Unique mappings per instrument
│   │   └── config.ts        # App configuration
│   ├── hooks/               # Custom React hooks
│   │   ├── useAudioEngine   # Sound synthesis
│   │   ├── useAudioRecorder # Recording functionality
│   │   ├── useHandTracking  # MediaPipe integration
│   │   ├── useParticles     # Particle effects
│   │   └── useSettings      # User preferences
│   ├── styles/              # CSS stylesheets
│   │   ├── global.css       # Design system variables
│   │   ├── App.css          # Main app styles
│   │   └── Landing.css      # Landing page styles
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   │   ├── AudioEngine.ts   # Web Audio API wrapper
│   │   ├── handDetection.ts # Finger detection algorithms
│   │   ├── canvas.ts        # Canvas rendering utilities
│   │   └── particles.ts     # Particle system
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
- **Audio Synthesis**: [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) with General MIDI
- **Styling**: CSS with CSS Variables (custom design system)
- **Deployment**: [Docker](https://www.docker.com/) + [Nginx](https://nginx.org/)

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Full support |
| Firefox | Full support |
| Edge | Full support |
| Safari | Full support |
| Mobile Chrome | Full support |
| Mobile Safari | Full support |

> **Note**: Camera access requires HTTPS in production environments.

## Responsive Design

Sepia is fully responsive across all device sizes:

- **Desktop** (1024px+) - Full 3-column layout with sidebar, camera, and finger mapping panel
- **Tablet** (768px-1024px) - 2-column layout with horizontal instrument bar
- **Phone Portrait** (480px) - Fullscreen camera with compact instrument bar
- **Phone Landscape** - Slim sidebar with maximized camera view

## Performance Tips

- Use good lighting for better hand detection
- Position your hands 1-3 feet from the camera
- Keep your palm facing the camera for best accuracy
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
- [General MIDI](https://www.midi.org/specifications/item/gm-level-1-sound-set) for the standardized instrument specification
- [Google Fonts](https://fonts.google.com/) for the Inter typeface

---

<div align="center">

**Made with love for musicians everywhere**

[Back to top](#sepia--air-instruments)

</div>
