import { Asset } from "expo-asset";

export const RECEIVER_EMAIL = "info@doinglight.es";
export const WEBSITE_URL = "https://doinglight.es";
export const APP_BACKEND_URL = "https://doinglight-app-backend-production.up.railway.app";
export const CATALOG_REQUEST_SUBJECT = "Solicitud de catalogo Doinglight";
export const PROFESSIONALS_VIDEO_URL = "https://www.youtube.com/watch?v=zY8L7Vj7EDY&pp=ygUKZG9pbmdsaWdodA%3D%3D";
export const PROFESSIONALS_VIDEO_EMBED_URL = "https://www.youtube.com/embed/zY8L7Vj7EDY";
export const ROOF_TYPES = ["Tejado plano", "Tejado inclinado", "Tejado abuhardillado"];
export const BRAND_COLOR = "#9cc31a";
export const INTRO_DURATION_MS = 1800;
export const DRAWER_WIDTH = 280;
export const PROFESSIONAL_TOOLS = [
  { id: "luxometro", title: "Luxómetro", icon: "wb-sunny" },
  { id: "brujula", title: "Brújula", icon: "explore" },
  { id: "nivel", title: "Nivel", icon: "straighten" },
  { id: "metro", title: "Metro", icon: "square-foot" }
];

export const HOME_BANNER = require("../assets/home-asistente.jpg");
export const HOME_BANNER_LUXOMETRO = require("../assets/home-luxometro.jpg");
export const HOME_BANNER_CATALOGOS = require("../assets/home-catalogos.jpg");
export const HOME_BANNER_PROFESIONALES = require("../assets/home/zona-profesionales.jpg");
export const HOME_BANNER_CONTACTO = require("../assets/home-contacto.jpg");
export const LUXOMETRO_BG = require("../assets/luxometro-bg.jpg");
export const DOWNLOAD_GENERAL_ES = require("../assets/downloads/ES_Catalogo_Doinglight.pdf");
export const DOWNLOAD_INDUSTRIAL_ES = require("../assets/downloads/Doinglight_Industrial.pdf");
export const CATALOG_COVER_GENERAL = require("../assets/catalogos/catalogo-general.png");
export const CATALOG_COVER_INDUSTRIAL = require("../assets/catalogos/sector-industrial.png");
export const CATALOG_COVER_GANADERO = require("../assets/catalogos/sector-ganadero.png");
export const CATALOG_COVER_MANUAL = require("../assets/catalogos/manual-instalacion.png");
export const TECH_SHEET_TEJADO_PLANO = require("../assets/fichas-tecnicas/tejado-plano.jpg");
export const TECH_SHEET_TEJADO_INCLINADO = require("../assets/fichas-tecnicas/tejado-inclinado.jpg");
export const TECH_SHEET_TEJADO_ABUHARDILLADO = require("../assets/fichas-tecnicas/tejado-abuhardillado.jpg");
export const TECH_SHEET_TEJADO_PLANO_VENT = require("../assets/fichas-tecnicas/tejado-plano-con-ventilacion.png");
export const TECH_SHEET_TEJADO_INCLINADO_VENT = require("../assets/fichas-tecnicas/tejado-inclinado-con-ventilacion.jpg");
export const TECH_SHEET_TEJADO_ABUHARDILLADO_VENT = require("../assets/fichas-tecnicas/tejado-abuhardillado-con-ventilacion.jpg");
export const TECH_SHEET_FACHADA = require("../assets/fichas-tecnicas/fachada.jpg");
export const TECH_SHEET_TUBO_CUADRADO = require("../assets/fichas-tecnicas/tubo-solar-cuadrado.jpg");
export const TECH_SHEET_KIT_INDUSTRIAL = require("../assets/fichas-tecnicas/kit-industrial.jpg");
export const TECH_PDF_TEJADO_PLANO = require("../assets/fichas-tecnicas-pdf/tejado-plano.pdf");
export const TECH_PDF_TEJADO_INCLINADO = require("../assets/fichas-tecnicas-pdf/tejado-inclinado.pdf");
export const TECH_PDF_TEJADO_ABUHARDILLADO = require("../assets/fichas-tecnicas-pdf/tejado-abuhardillado.pdf");
export const TECH_PDF_FACHADA = require("../assets/fichas-tecnicas-pdf/fachada.pdf");
export const TECH_PDF_TEJADO_PLANO_VENT = require("../assets/fichas-tecnicas-pdf/tejado-plano-con-ventilacion.pdf");
export const TECH_PDF_TEJADO_INCLINADO_VENT = require("../assets/fichas-tecnicas-pdf/tejado-inclinado-con-ventilacion.pdf");
export const TECH_PDF_TEJADO_ABUHARDILLADO_VENT = require("../assets/fichas-tecnicas-pdf/tejado-abuhardillado-con-ventilacion.pdf");
export const TECH_PDF_TUBO_CUADRADO = require("../assets/fichas-tecnicas-pdf/tubo-solar-cuadrado.pdf");
export const TECH_PDF_KIT_INDUSTRIAL = require("../assets/fichas-tecnicas-pdf/kit-industrial.pdf");

export const TECHNICAL_SHEET_ITEMS = [
  {
    id: "tejado-plano",
    title: "Tejado Plano",
    icon: "crop-3-2",
    image: TECH_SHEET_TEJADO_PLANO,
    pdf: TECH_PDF_TEJADO_PLANO
  },
  {
    id: "tejado-inclinado",
    title: "Tejado Inclinado",
    icon: "roofing",
    image: TECH_SHEET_TEJADO_INCLINADO,
    pdf: TECH_PDF_TEJADO_INCLINADO
  },
  {
    id: "tejado-abuhardillado",
    title: "Tejado Abuhardillado",
    icon: "home-work",
    image: TECH_SHEET_TEJADO_ABUHARDILLADO,
    pdf: TECH_PDF_TEJADO_ABUHARDILLADO
  },
  {
    id: "fachada",
    title: "Fachada",
    icon: "apartment",
    image: TECH_SHEET_FACHADA,
    pdf: TECH_PDF_FACHADA
  },
  {
    id: "tejado-plano-con-ventilacion",
    title: "Tejado Plano Con Ventilación",
    icon: "air",
    image: TECH_SHEET_TEJADO_PLANO_VENT,
    pdf: TECH_PDF_TEJADO_PLANO_VENT
  },
  {
    id: "tejado-inclinado-con-ventilacion",
    title: "Tejado Inclinado Con Ventilación",
    icon: "air",
    image: TECH_SHEET_TEJADO_INCLINADO_VENT,
    pdf: TECH_PDF_TEJADO_INCLINADO_VENT
  },
  {
    id: "tejado-abuhardillado-con-ventilacion",
    title: "Tejado Abuhardillado Con Ventilación",
    icon: "air",
    image: TECH_SHEET_TEJADO_ABUHARDILLADO_VENT,
    pdf: TECH_PDF_TEJADO_ABUHARDILLADO_VENT
  },
  {
    id: "tubo-solar-cuadrado",
    title: "Tubo Solar Cuadrado",
    icon: "crop-square",
    image: TECH_SHEET_TUBO_CUADRADO,
    pdf: TECH_PDF_TUBO_CUADRADO
  },
  {
    id: "kit-industrial",
    title: "Kit Industrial",
    icon: "factory",
    image: TECH_SHEET_KIT_INDUSTRIAL,
    pdf: TECH_PDF_KIT_INDUSTRIAL
  }
];

export const CATALOG_ITEMS = [
  {
    id: "catalogo-tarifa-general",
    title: "Catálogo Tarifa General",
    description: "Tarifa general de productos y soluciones Doinglight para uso residencial y profesional.",
    tag: "General",
    language: "ES",
    cover: CATALOG_COVER_GENERAL,
    coverRatio: getAssetRatio(CATALOG_COVER_GENERAL, 0.7),
    file: DOWNLOAD_GENERAL_ES,
    pdfUrl: `${APP_BACKEND_URL}/catalogos/catalogo-tarifa-general.pdf`
  },
  {
    id: "catalogo-sector-industrial",
    title: "Catálogo Sector Industrial",
    description: "Documentación comercial para naves, industria y grandes espacios de trabajo.",
    tag: "Industrial",
    language: "ES",
    cover: CATALOG_COVER_INDUSTRIAL,
    coverRatio: getAssetRatio(CATALOG_COVER_INDUSTRIAL, 0.7),
    file: DOWNLOAD_INDUSTRIAL_ES,
    pdfUrl: `${APP_BACKEND_URL}/catalogos/catalogo-sector-industrial.pdf`
  },
  {
    id: "catalogo-sector-ganadero",
    title: "Sector Ganadero",
    description: "Catálogo específico para aplicaciones ganaderas y explotaciones técnicas.",
    tag: "Ganadero",
    language: "ES",
    cover: CATALOG_COVER_GANADERO,
    coverRatio: getAssetRatio(CATALOG_COVER_GANADERO, 0.7),
    file: null,
    pdfUrl: `${APP_BACKEND_URL}/catalogos/sector-ganadero.pdf`
  },
  {
    id: "manual-instalacion",
    title: "Manual de Instalación",
    description: "Documento de apoyo para instalación, montaje y puesta en servicio.",
    tag: "Manual",
    language: "ES",
    cover: CATALOG_COVER_MANUAL,
    coverRatio: getAssetRatio(CATALOG_COVER_MANUAL, 0.7),
    file: null,
    pdfUrl: `${APP_BACKEND_URL}/catalogos/manual-instalacion.pdf`
  }
];

function getAssetRatio(moduleRef, fallback = 16 / 7) {
  const asset = Asset.fromModule(moduleRef);
  if (asset?.width && asset?.height) {
    return asset.width / asset.height;
  }
  return fallback;
}

export const HOME_BANNER_RATIO = getAssetRatio(HOME_BANNER);
export const HOME_BANNER_LUX_RATIO = getAssetRatio(HOME_BANNER_LUXOMETRO);
export const HOME_BANNER_CATALOGOS_RATIO = getAssetRatio(HOME_BANNER_CATALOGOS);
export const HOME_BANNER_PROFESIONALES_RATIO = getAssetRatio(HOME_BANNER_PROFESIONALES);
export const HOME_BANNER_CONTACTO_RATIO = getAssetRatio(HOME_BANNER_CONTACTO);
