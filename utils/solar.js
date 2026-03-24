export function toCardinal(deg) {
  if (deg == null) return "No disponible";
  const directions = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

export function computeSolarEstimate(latitude) {
  if (latitude == null) {
    return {
      hemisphere: "No disponible",
      recomendacion: "Sin ubicacion no se puede estimar la orientacion solar."
    };
  }

  const hemisphere = latitude >= 0 ? "Norte" : "Sur";
  const recomendacion =
    latitude >= 0
      ? "Generalmente conviene priorizar captacion hacia el sur para mayor exposicion anual."
      : "Generalmente conviene priorizar captacion hacia el norte para mayor exposicion anual.";

  return { hemisphere, recomendacion };
}
