import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Sparkles, ChevronRight, X, Heart, Share2, Download, PenTool, Volume2, Loader, AlertCircle, CheckCircle2, AlertTriangle, User } from 'lucide-react';

// --- Assets & Data ---
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Coastal Vows",
    category: "Wedding",
    url: "https://img.freepik.com/free-photo/beautiful-couple-having-their-wedding-beach_23-2149043947.jpg?semt=ais_hybrid&w=740&q=80",
    description: `Technical Metadata
Simulated Optic: 85mm Prime Lens (Portrait Telephoto). The compression of the background elements (ocean horizon relative to subjects) indicates a medium telephoto focal length, minimizing facial distortion while isolating the subjects.
Aperture & Depth of Field: f/1.8 to f/2.2. The depth of field is critically shallow. The focus fall-off is rapid; the couple's eyes and eyelashes are sharp, but the earlobes and shoulders begin to blur into soft bokeh. The background (sea and sky) is rendered as a creamy, non-distracting wash of color.
ISO & Grain: ISO 100. The image is devoid of luminance noise, suggesting a high-light environment captured at base native ISO. The "grain" visible is likely a post-production overlay—a subtle uniform monochromatic noise added to prevent color banding in the smooth gradients of the sky.
Color Science:
Palette: High-key commercial grading. Dominant Hex Codes: #F2EBD9 (Sand/Warm Highlights), #A8D0E6 (Desaturated Cyan Sky), and #C48F76 (Warm Skin Tones).
Tonal Curve: An "S-Curve" application. Shadows are lifted (blacks are dark grey, not pure black) to preserve detail in the groom's attire. Highlights are rolled off softly to prevent clipping on the bride's white dress and the sun's reflection on the water.
Saturation: Selective desaturation in the blues (ocean) to emphasize the orange/yellow luminance of the skin tones (Teal & Orange separation).
Lighting Architecture
Primary Key Light: Natural Solar Source (Sun). The sun is positioned low on the horizon (approx. 35-45 degrees elevation), suggesting Golden Hour timing. It acts as a strong back-light.
Fill Light: Large White Reflector (or softbox). There is a distinct lack of harsh contrast on the subjects' faces despite the strong back-lighting. A broad, diffused light source is returning light into the shadows from the camera-left or camera-right, creating a "catchlight" in the iris at the 2 o'clock or 10 o'clock position.
Rim Lighting: The solar back-light creates a "halo" effect (rim light) along the edges of the subjects—specifically illuminating the stray hairs on the bride's head and the shoulder line of the groom's suit, separating them from the background.
Micro-Shadows: Soft, graduated shadows appear under the nose and chin, indicating the fill light is large and close. Skin texture micro-shadows are minimal, suggesting "beauty dish" style diffusion or frequency separation retouching.
Subject & Anatomy
Geometry: The subjects are positioned in an intimate "closed loop" pose—likely facing each other or with heads touching. The facial planes are aligned to catch the fill light.
Skin & Sub-Surface Scattering: The back-lighting hits the ears and thinner skin areas (like the nose bridge), causing a reddish/orange glow (sub-surface scattering), confirming the strong light source behind them. The skin texture shows pores that have been retained but softened; high-frequency texture is present but low-frequency blemishes are removed.
Hair Styling: 'Memoria Production' style—carefully "messy." The bride's hair is likely loose or in a relaxed updo, designed to catch the wind. Individual strands are backlit, creating high-contrast golden filaments against the darker water background.
Muscle Tension: Relaxed. The masseter muscles (jaw) are unclenched, and the orbicularis oculi (eyes) are softened, suggesting a "Duchenne" smile or a look of genuine affection rather than a rigid pose.
Materiality & Texture
Clothing Weave:
Bride: Likely a synthetic-blend lace or chiffon. The fabric exhibits high translucency where the sun hits it. The weave is fine, creating a soft, misty fall-off in the out-of-focus areas.
Groom: Linen or light cotton blend (approx. 180-200gsm). The fabric shows characteristic "slubs" (thick and thin yarns) typical of linen, which scatters light rather than reflecting it (matte finish).
Reflective Index: The water in the background has a high specular reflectivity, creating bokeh balls that are circular (indicating an aperture with 9+ rounded blades) and shimmering. The skin has a "dewy" specularity, likely enhanced by makeup or sweat sheen consistent with a beach environment.
Atmospherics: Saline haze. There is a slight reduction in contrast in the deep background, simulating atmospheric perspective caused by sea spray/salt in the air.
Compositional Logic
Lead-in Lines: The horizon line (where ocean meets sky) is placed on the upper or lower third line, strictly adhering to the Rule of Thirds. The curvature of the shoreline or the angle of the couple's arms often leads the eye toward the faces.
Negative Space: Significant negative space is likely preserved on one side (camera-left or right) or above the heads. This is intentional "copy space" for commercial usage (e.g., placing text for a wedding invitation or travel ad).
Theme: 'Ethereal Destination Romance'. The image rejects the 'Noir' (too bright) and 'Corporate' (too intimate) aesthetics. It is purely aspirational, characterized by warmth, openness, and soft focus, designed to evoke feelings of freedom and eternal optimism.`
  },
  {
    id: 2,
    title: "Forest Embrace",
    category: "Romance",
    url: "https://img.freepik.com/free-photo/happy-married-couple-embracing-forest_1153-2913.jpg?semt=ais_hybrid&w=740&q=80",
    description: `1. Technical Metadata & Color Science
The image simulates the characteristics of a full-frame sensor paired with an 85mm or 105mm prime lens.
Simulated Aperture: Roughly $f/1.8$ to $f/2.2$. This is evidenced by the "cat-eye" bokeh in the peripheral background and the rapid fall-off from the subjects' focal plane to the foreground foliage.
ISO & Grain: Low noise floor (simulated ISO 100). The grain structure is negligible, suggesting a high-fidelity digital capture with high dynamic range.
Color Palette:
Highlights: #FDF5E6 (Old Lace/Warm White) in the bride's dress and sun-drenched leaves.
Midtones: #8B9467 (Sage/Olive) and #A0785A (Muted Earth).
Shadows: #2F3528 (Deep Forest Green).
Tonal Curve: A "lifted" black point creates a slight matte effect in the deepest shadows, while the highlight curve is rolled off gently to preserve detail in the white lace of the dress.
2. Lighting Architecture
The scene utilizes Natural Backlit Diffusion with a high-angle "God-ray" effect.
Primary Key Light: Sun positioned at approximately 135° (Camera Left/Rear). This acts as a powerful rim light, creating a "halo" effect on the groom’s hair and the bride’s veil.
Fill Light: Large-scale natural bounce. Light hitting the forest floor and the bride's white dress reflects upward, filling the micro-shadows in the skin pores and softening the nasolabial folds.
Incidence Angle: The light strikes the subjects from the upper-left rear, creating a high-contrast edge while leaving the facial features in a soft, low-contrast "open shade" environment.
3. Subject & Anatomy
The subjects are rendered with high Sub-surface Scattering (SSS), giving the skin a translucent, lifelike quality where light appears to penetrate the epidermis.
The Bride:
Anatomy: Tension is visible in the orbicularis oculi (muscles around the eyes), indicating a genuine Duchenne smile.
Hair: 'Memoria Production' style—loose, bohemian braids with deliberate "flyaways" to catch the backlight.
The Groom:
Anatomy: Noticeable tension in the brachioradialis (forearm) as he supports the bride, suggesting a firm but gentle grip.
Skin: Micro-textures show slight follicular detail on the jawline, indicative of a clean-shave-to-stubble transition.
4. Materiality & Texture
The Dress: A composite of heavy-weight floral lace over a matte silk lining. The weave shows distinct "crepe" textures in the non-patterned areas. The reflective index is low ($~0.03$), absorbing most light rather than bouncing it harshly.
The Suit: A mid-weight wool-polyester blend with a visible twill weave. The lapels show a slight sheen, suggesting a higher synthetic count or a silk-thread edge.
Atmospheric Particulate: High levels of volumetric haze (likely humidity or a light smoke machine) are present, which catch the sun’s rays to create "light shafts."
5. Compositional Logic
Thematic Style: "Ethereal Woodland Editorial." It blends the intimacy of portraiture with the scale of landscape photography.
Lead-in Lines: The verticality of the pine trees creates a "natural cathedral" effect, drawing the eye downward toward the subjects.
Rule of Thirds: The couple’s heads are positioned near the upper-right intersection, while their joined hands sit near the lower-center power point.
Negative Space: The upper third of the image is dominated by out-of-focus "bokeh" foliage, providing a "breathing room" that emphasizes the intimacy of the embrace.`
  },
  {
    id: 3,
    title: "Park Serenity",
    category: "Portrait",
    url: "https://img.freepik.com/free-photo/close-up-portrait-newlyweds-charming-bride-laid-her-head-her-handsome-groom-park_613910-18326.jpg?semt=ais_hybrid&w=740&q=80",
    description: `1. Technical Metadata & Color Science
Simulated Focal Length & Optics: The image exhibits the characteristics of a 85mm f/1.4 or f/1.2 lens. The compression is high, and the depth of field is razor-thin, focusing exclusively on the bride’s eyelashes and the texture of the groom’s lapel.
ISO & Noise Floor: The image is exceptionally clean, simulating ISO 100. There is no visible luminance noise, even in the deep shadows of the groom's suit, indicating a high signal-to-noise ratio capture.
Color Science: * Tonal Curve: An "S-curve" is applied with a soft roll-off in the highlights (to preserve detail in the bride's skin and dress) and a slight lift in the blacks to create a "film-matte" finish.
Hex-Code Palette:
Highlights: #FFF9F0 (Warm Alabaster) in the skin highlights.
Midtones: #D2B48C (Tan/Peach) in the flesh tones.
Shadows: #2B2D42 (Deep Charcoal/Navy) in the groom’s suit.
2. Lighting Architecture
The image utilizes a "Golden Hour" Backlit Profile supplemented by soft frontal fill.

Primary Key (Backlight): Positioned at 10 o'clock (Rear). This creates a high-intensity rim light that delineates the groom’s shoulder and the bride’s hair, separating them from the background.
Fill Light: Large-source ambient light (likely a large 5-in-1 reflector or natural sky bounce) coming from 4 o'clock (Front Right). This provides the soft, directional light that reveals the skin's texture without creating harsh shadows.
Catchlights: Subtle, circular catchlights are visible in the subjects' eyes, suggesting a large, distant circular light source or a clear patch of sky.
3. Subject & Anatomy
Sub-surface Scattering (SSS): The bride’s skin shows high SSS values, particularly on the bridge of the nose and cheekbones, where the light turns slightly warmer/redder as it penetrates the skin layers.
Facial Tension: The levator palpebrae superioris (eyelid muscles) are relaxed, indicating a state of repose and intimacy. The groom’s jawline shows slight masseter muscle engagement, providing structural definition.
Hair Styling: The bride’s hair is styled in a textured chignon with micro-flyaways that are individually illuminated by the rim light, creating a "halo" effect.
4. Materiality & Texture
Textiles: * Groom's Suit: A heavy-weight wool-mohair blend with a visible "sharkskin" or "birdseye" weave. The reflective index is low, but the individual fibers catch the directional light.
Bride's Attire: Intricate corded lace with raised embroidery. The threading shows a high "specular" component where individual silk threads catch the light.
Atmospherics: The background displays smooth, circular bokeh. The "cat-eye" distortion at the edges of the frame indicates a high-end lens wide-open, with very few particulates (dust/haze) interfering with the clarity of the subjects.
5. Compositional Logic
Theme: "Intimate Romantic Editorial."
Compositional Geometry: The image follows a diagonal bisection. A line drawn from the top left to the bottom right separates the groom’s dark suit from the bride’s light skin and hair, creating a high-contrast visual balance.
Negative Space: The left side of the frame is "dead space" occupied by the groom’s shoulder, which serves as a visual anchor, forcing the viewer's eye toward the point of contact between the two faces.
Lead-in Lines: The curve of the bride's arm and the angle of her head lead directly to the groom’s face, centering the emotional weight of the image on their proximity.`
  }
];

const BRAND = {
  name: "Memoria Production",
  tagline: "Capture Life’s Masterpieces",
  mantra: "Where your story becomes art.",
  logoUrl: "https://raw.githubusercontent.com/Emon-ProCoder7/Memoria-production/refs/heads/main/public/my-logo.png",
  website: "https://www.memoriaproduction.com",
  portfolioUrl: "https://memoriaproduction.com/portfolio",
  experienceUrl: "https://memoriaproduction.com"
};

// --- API Helpers ---
const apiKey = "AIzaSyCMC5CMhkBdimisxmyKM4FOarIUqHFQaM4"; // Set at runtime

const cleanBase64 = (dataUrl) => {
  if (!dataUrl) return null;
  return dataUrl.split(',')[1];
};

const urlToBase64 = async (url) => {
  try {
    const response = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + new Date().getTime());
    if (!response.ok) throw new Error('Network response was not ok');
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(cleanBase64(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn("CORS/Network error. High-fidelity reference pixels unavailable.", error);
    return null;
  }
};

const generateFaceSwap = async (brideImageBase64, groomImageBase64, referenceUrl, referenceDesc) => {
  const referenceBase64 = await urlToBase64(referenceUrl);

  const parts = [];
  let promptText = "";
  let fidelityStatus = "high";

  if (referenceBase64) {
    promptText = `Forensic-Level Identity Swap & Re-Posing Task.
        
        Inputs:
        1. Reference Image (Scene Context).
        2. Bride Identity (Target Face for female).
        3. Groom Identity (Target Face for male).

        MANDATE:
        The specific facial features of the uploaded 'Bride Identity' and 'Groom Identity' MUST be preserved with 100% BIOMETRIC ACCURACY. Do not generate generic faces. Do not "beautify" or alter facial structures.

        INSTRUCTIONS:
        1. CLONE THE BRIDE: The female subject in the output MUST look exactly like the 'Bride Identity' photo. Replicate eye shape, nose width, lip shape, and unique markers exactly.
        2. CLONE THE GROOM: The male subject in the output MUST look exactly like the 'Groom Identity' photo. Replicate jawline, facial hair, and brow structure exactly.
        3. FRONT-FACING POSE: Rotate the heads of both subjects to be facing the camera directly (Frontal View). This is CRITICAL. We need to see their full faces.
        4. SCENE INTEGRATION: Apply the lighting (Golden Hour/Backlight) and shadows of the Reference Image to these specific faces. Keep the bodies, clothes, and background of the Reference Image unchanged.

        The final result should look like the uploaded people stepped into the reference photo and looked at the camera.`;

    parts.push({ text: promptText });
    parts.push({ inlineData: { mimeType: "image/jpeg", data: referenceBase64 } });
    parts.push({ inlineData: { mimeType: "image/jpeg", data: brideImageBase64 } });
    parts.push({ inlineData: { mimeType: "image/jpeg", data: groomImageBase64 } });
  } else {
    fidelityStatus = "reconstruct";
    promptText = `Generate a photorealistic masterpiece based on the description, with STRICT IDENTITY CLONING.
        
        Reference Description: ${referenceDesc}
        
        IDENTITY MANDATE:
        - The Bride subject MUST be a perfect facial replica of 'Bride Identity' (Image 1). Copy features exactly.
        - The Groom subject MUST be a perfect facial replica of 'Groom Identity' (Image 2). Copy features exactly.
        - DO NOT create generic people. Use the provided faces.
        
        POSING:
        - Both subjects must be posed FRONT-FACING (looking directly at the camera).
        
        Style:
        - Maintain the exact cinematic lighting and composition described.`;

    parts.push({ text: promptText });
    parts.push({ inlineData: { mimeType: "image/jpeg", data: brideImageBase64 } });
    parts.push({ inlineData: { mimeType: "image/jpeg", data: groomImageBase64 } });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: parts }],
        generationConfig: {
          responseModalities: ["IMAGE"]
        }
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("Gemini API Error:", data.error);
      throw new Error(data.error.message);
    }

    const imageBase64 = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;

    if (imageBase64) {
      return {
        image: `data:image/jpeg;base64,${imageBase64}`,
        status: fidelityStatus
      };
    }
    return null;
  } catch (error) {
    console.error("Face swap failed:", error);
    return null;
  }
};

const generateCinematicCaption = async (mood, description) => {
  const prompt = `You are the lead curator for a luxury photography brand called "Memoria". 
  Write a short, sophisticated, and evocative caption (1-2 sentences) for a photo with this description: "${description}".
  The mood is: ${mood}.
  Brand Voice: Timeless, elegant, poetic. No emojis. focus on "capturing the soul" or "eternal moments".`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "A moment frozen in time.";
  } catch (error) {
    console.error("Caption generation failed:", error);
    return "Where time stands still and beauty speaks.";
  }
};

const generateAudioDedication = async (text) => {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Say in a soothing, deep narrative voice: ${text}` }] }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Fenrir"
              }
            }
          }
        }
      })
    });

    const data = await response.json();
    const audioContent = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (audioContent) {
      const binaryString = window.atob(audioContent);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const sampleRate = 24000;
      const numChannels = 1;
      const bitsPerSample = 16;
      const blockAlign = numChannels * bitsPerSample / 8;
      const byteRate = sampleRate * blockAlign;
      const dataSize = bytes.length;
      const chunkSize = 36 + dataSize;

      const buffer = new ArrayBuffer(44 + dataSize);
      const view = new DataView(buffer);

      writeString(view, 0, 'RIFF');
      view.setUint32(4, chunkSize, true);
      writeString(view, 8, 'WAVE');
      writeString(view, 12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, numChannels, true);
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, byteRate, true);
      view.setUint16(32, blockAlign, true);
      view.setUint16(34, bitsPerSample, true);
      writeString(view, 36, 'data');
      view.setUint32(40, dataSize, true);

      const payload = new Uint8Array(buffer, 44);
      payload.set(bytes);

      const blob = new Blob([buffer], { type: 'audio/wav' });
      return URL.createObjectURL(blob);
    }
    return null;
  } catch (error) {
    console.error("Audio generation failed:", error);
    return null;
  }
};

const writeString = (view, offset, string) => {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
};

// --- Components ---

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, icon: Icon }) => {
  const baseStyle = "px-8 py-3 rounded-sm tracking-widest uppercase text-xs font-bold transition-all duration-500 flex items-center justify-center gap-3";
  const variants = {
    primary: "bg-white text-black hover:bg-amber-100 disabled:bg-neutral-800 disabled:text-neutral-500",
    outline: "border border-neutral-700 text-neutral-300 hover:border-amber-400 hover:text-amber-400 bg-transparent",
    gold: "bg-amber-600/20 border border-amber-600/50 text-amber-500 hover:bg-amber-600 hover:text-white backdrop-blur-sm",
    ghost: "bg-transparent text-amber-500 hover:bg-amber-900/10 border-none"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={14} className={variant === 'ghost' ? 'text-amber-500' : ''} />}
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12 animate-fade-in-up">
    <h2 className="font-serif text-3xl md:text-4xl text-white mb-3 tracking-tight">{title}</h2>
    <div className="h-0.5 w-12 bg-amber-500 mx-auto mb-4"></div>
    <p className="font-sans text-neutral-400 text-sm tracking-widest uppercase">{subtitle}</p>
  </div>
);

// --- Main Application ---

export default function App() {
  const [selectedRef, setSelectedRef] = useState(null);
  const [brideImage, setBrideImage] = useState(null);
  const [groomImage, setGroomImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [resultReady, setResultReady] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [swappedImage, setSwappedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [fidelityMode, setFidelityMode] = useState('high');

  const [generatedCaption, setGeneratedCaption] = useState('');
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const audioRef = useRef(null);

  const brideInputRef = useRef(null);
  const groomInputRef = useRef(null);
  const resultRef = useRef(null);

  const scrollToSelection = () => document.getElementById('selection').scrollIntoView({ behavior: 'smooth' });
  const scrollToUpload = () => document.getElementById('upload').scrollIntoView({ behavior: 'smooth' });

  const handleBrideFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setBrideImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGroomFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setGroomImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!selectedRef || !brideImage || !groomImage) return;

    setIsProcessing(true);
    setResultReady(false);
    setErrorMessage('');
    setFidelityMode('high');

    setProcessingStep("Analyzing reference integrity...");
    await new Promise(r => setTimeout(r, 800));

    setProcessingStep("Mapping dual facial topography...");
    await new Promise(r => setTimeout(r, 800));

    setProcessingStep("Applying High-Fidelity Multi-Swap...");

    const result = await generateFaceSwap(
      cleanBase64(brideImage),
      cleanBase64(groomImage),
      selectedRef.url,
      selectedRef.description
    );

    if (result && result.image) {
      setSwappedImage(result.image);
      setFidelityMode(result.status);

      setProcessingStep("Rendering final masterpiece...");
      await new Promise(r => setTimeout(r, 500));

      setIsProcessing(false);
      setResultReady(true);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setIsProcessing(false);
      setErrorMessage("The masterpiece could not be generated. Please try a different photo or check your connection.");
    }
  };

  const handleGenerateCaption = async () => {
    setIsGeneratingCaption(true);
    const caption = await generateCinematicCaption(selectedRef.category, selectedRef.description);
    setGeneratedCaption(caption);
    setIsGeneratingCaption(false);
  };

  const handleGenerateAudio = async () => {
    const textToRead = generatedCaption || selectedRef.description;
    setIsGeneratingAudio(true);
    const url = await generateAudioDedication(textToRead);
    setAudioUrl(url);
    setIsGeneratingAudio(false);

    if (url && audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-amber-900 selection:text-white">

      <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href={BRAND.website} target="_blank" rel="noopener noreferrer" className="block">
            <img src={BRAND.logoUrl} alt={BRAND.name} className="h-12 w-auto object-contain" />
          </a>
          <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium text-neutral-400">
            <a href={BRAND.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Portfolio</a>
            <a href={BRAND.experienceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Experience</a>
            <a href="#" className="text-white">The Lab</a>
          </div>
        </div>
      </nav>

      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950 z-10"></div>
          <img
            src={PORTFOLIO_ITEMS[0].url}
            className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
            alt="Background"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="text-amber-500 tracking-[0.3em] uppercase text-xs mb-6 animate-fade-in">On-Demand Excellence</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight animate-fade-in-up delay-100">
            {BRAND.tagline}
          </h1>
          <p className="font-light text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            Transform fleeting moments into timeless art.
            Experience our cinematic face-swap technology that blends your identity with our curated masterpieces.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Button onClick={scrollToSelection}>Start Creation</Button>
            <Button variant="outline">View Gallery</Button>
          </div>
        </div>
      </header>

      <section id="selection" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Select Your Reference"
            subtitle="Choose a masterpiece from our curated collection"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedRef(item);
                  setTimeout(scrollToUpload, 300);
                }}
                className={`group cursor-pointer relative overflow-hidden transition-all duration-700 ${selectedRef?.id === item.id ? 'ring-2 ring-amber-500 scale-[1.02]' : 'hover:-translate-y-2'}`}
              >
                <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                  <img
                    src={item.url}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-1000 ${selectedRef?.id === item.id ? 'grayscale-0' : 'grayscale md:grayscale group-hover:grayscale-0 group-hover:scale-110'}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-amber-500 text-xs tracking-widest uppercase mb-2">{item.category}</span>
                  <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3">{item.description}</p>
                </div>
                {selectedRef?.id === item.id && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="upload" className={`py-24 px-6 bg-neutral-900/30 transition-opacity duration-1000 ${selectedRef ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Provide Identities"
            subtitle="Upload photos for high-fidelity synthesis"
          />

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            <div className="w-full lg:w-1/4 opacity-70">
              <p className="text-center text-xs uppercase tracking-widest mb-4 text-neutral-500">Target Masterpiece</p>
              <div className="aspect-[3/4] bg-neutral-800 relative rounded-sm overflow-hidden border border-neutral-800">
                {selectedRef ? (
                  <img src={selectedRef.url} alt="Selected" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-neutral-700">No Selection</div>
                )}
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-center text-neutral-600">
              <ChevronRight size={32} />
            </div>

            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <p className="text-center text-xs uppercase tracking-widest mb-4 text-amber-500/80">Bride Identity</p>
                <div
                  onClick={() => brideInputRef.current?.click()}
                  className={`aspect-[3/4] border-2 border-dashed transition-all duration-300 rounded-sm flex flex-col items-center justify-center cursor-pointer relative overflow-hidden
                    ${brideImage ? 'border-amber-500/50 bg-neutral-900' : 'border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/50'}`}
                >
                  {brideImage ? (
                    <img src={brideImage} alt="Bride Upload" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-6">
                      <User className="mx-auto text-neutral-500 mb-4" />
                      <span className="block text-sm font-medium text-neutral-300 mb-2">Upload Bride</span>
                      <span className="block text-xs text-neutral-500">Clear frontal face</span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={brideInputRef}
                    className="hidden"
                    onChange={handleBrideFileChange}
                    accept="image/*"
                  />
                  {brideImage && (
                    <div className="absolute top-2 right-2 bg-neutral-950/80 p-1 rounded-full hover:bg-red-900/80 transition-colors" onClick={(e) => { e.stopPropagation(); setBrideImage(null); }}>
                      <X size={14} className="text-white" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <p className="text-center text-xs uppercase tracking-widest mb-4 text-amber-500/80">Groom Identity</p>
                <div
                  onClick={() => groomInputRef.current?.click()}
                  className={`aspect-[3/4] border-2 border-dashed transition-all duration-300 rounded-sm flex flex-col items-center justify-center cursor-pointer relative overflow-hidden
                    ${groomImage ? 'border-amber-500/50 bg-neutral-900' : 'border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/50'}`}
                >
                  {groomImage ? (
                    <img src={groomImage} alt="Groom Upload" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-6">
                      <User className="mx-auto text-neutral-500 mb-4" />
                      <span className="block text-sm font-medium text-neutral-300 mb-2">Upload Groom</span>
                      <span className="block text-xs text-neutral-500">Clear frontal face</span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={groomInputRef}
                    className="hidden"
                    onChange={handleGroomFileChange}
                    accept="image/*"
                  />
                  {groomImage && (
                    <div className="absolute top-2 right-2 bg-neutral-950/80 p-1 rounded-full hover:bg-red-900/80 transition-colors" onClick={(e) => { e.stopPropagation(); setGroomImage(null); }}>
                      <X size={14} className="text-white" />
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          <div className="mt-16 text-center space-y-4">
            <Button
              onClick={handleProcess}
              disabled={!selectedRef || !brideImage || !groomImage || isProcessing}
              variant={(!selectedRef || !brideImage || !groomImage) ? 'outline' : 'gold'}
              className="mx-auto w-full md:w-auto min-w-[200px]"
              icon={Sparkles}
            >
              {isProcessing ? 'Synthesizing...' : 'Create Masterpiece'}
            </Button>
            {isProcessing && (
              <div className="mt-6 text-amber-500/80 text-sm font-mono tracking-wider animate-pulse">
                {processingStep}
              </div>
            )}
            {errorMessage && (
              <div className="flex items-center justify-center gap-2 text-red-400 text-sm mt-4">
                <AlertCircle size={16} />
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      {resultReady && swappedImage && (
        <section ref={resultRef} className="py-24 px-6 min-h-screen flex items-center bg-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-amber-100 mb-2">Your Masterpiece</h2>
              <p className="text-neutral-500 text-sm uppercase tracking-widest">Ready for collection</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
              <div className="relative max-w-md w-full group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-200 rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-[3/4] bg-neutral-900 rounded-sm overflow-hidden shadow-2xl">
                  <img src={swappedImage} alt="Result" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="max-w-md w-full space-y-8">
                {showPrompt && (
                  <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-sm backdrop-blur-sm animate-fade-in">
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Backend System Prompt</h4>
                    <p className="font-mono text-xs text-amber-500/90 leading-relaxed border-l-2 border-amber-500 pl-4">
                      {fidelityMode === 'high'
                        ? "Strict Instructions: PRESERVE THE BACKGROUND, CLOTHING, HAIR, AND POSE EXACTLY AS THEY ARE. Do not regenerate or change the scene. Only modify the facial pixels..."
                        : "Reference Description: ... Generate a photorealistic image matching the description exactly... This is a reconstruction..."
                      }
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 p-4 border border-amber-900/30 rounded-sm bg-amber-900/5">
                  <h4 className="text-xs font-bold text-amber-600/70 uppercase tracking-widest text-center">AI Enhancements</h4>

                  {generatedCaption ? (
                    <div className="animate-fade-in text-center p-4 bg-black/40 border border-amber-500/20 rounded-sm">
                      <p className="font-serif italic text-amber-100 text-lg mb-2">"{generatedCaption}"</p>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest">Generated Caption</p>
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={handleGenerateCaption}
                      disabled={isGeneratingCaption}
                      icon={isGeneratingCaption ? Loader : PenTool}
                      className={isGeneratingCaption ? "animate-pulse" : ""}
                    >
                      {isGeneratingCaption ? "Crafting Words..." : "Generate Cinematic Caption ✨"}
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    onClick={handleGenerateAudio}
                    disabled={isGeneratingAudio}
                    icon={isGeneratingAudio ? Loader : Volume2}
                    className={isGeneratingAudio ? "animate-pulse" : ""}
                  >
                    {isGeneratingAudio ? "Composing Audio..." : "Listen to Dedication ✨"}
                  </Button>
                  <audio ref={audioRef} className="hidden" />
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button className="flex-1" icon={Download}>Download High-Res</Button>
                    <button className="px-4 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors rounded-sm">
                      <Share2 size={18} />
                    </button>
                    <button className="px-4 border border-neutral-800 text-neutral-400 hover:text-red-400 hover:border-red-900/50 transition-colors rounded-sm">
                      <Heart size={18} />
                    </button>
                  </div>
                  <p className="text-center text-xs text-neutral-600 italic">
                    "Elegance is the only beauty that never fades."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-neutral-950 py-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <a href={BRAND.website} target="_blank" rel="noopener noreferrer" className="mb-6 block">
            <img src={BRAND.logoUrl} alt={BRAND.name} className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <p className="text-neutral-500 text-sm mb-8 tracking-widest uppercase">{BRAND.mantra}</p>
          <div className="text-neutral-700 text-xs">
            © {new Date().getFullYear()} Memoria Production. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
