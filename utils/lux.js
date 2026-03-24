export function classifyLux(lux) {
  if (lux < 100) return { label: "Baja", message: "Iluminacion natural baja en esta zona." };
  if (lux < 300) return { label: "Media", message: "Iluminacion natural media, mejorable." };
  return { label: "Alta", message: "Buena iluminacion natural en esta zona." };
}

export function estimateLuxFromLuma(luma) {
  const normalized = Math.max(0, Math.min(1, luma / 255));
  return Math.round(10 + Math.pow(normalized, 2.2) * 1900);
}

export function estimateLuxFromExif(exif = {}) {
  const iso = Number(exif.ISOSpeedRatings || exif.iso || 100);
  const exposure = Number(exif.ExposureTime || exif.exposureTime || 0);
  const fNumber = Number(exif.FNumber || exif.fNumber || 2.0);
  const brightnessValue = Number(exif.BrightnessValue || exif.brightnessValue || NaN);

  if (exposure > 0 && iso > 0 && fNumber > 0) {
    const ev100 = Math.log2((fNumber * fNumber) / exposure) - Math.log2(iso / 100);
    return Math.round(2.5 * Math.pow(2, ev100));
  }

  if (Number.isFinite(brightnessValue)) {
    return Math.round(Math.max(1, 10 * Math.pow(2, brightnessValue)));
  }

  return null;
}
