import { Asset } from "expo-asset";

export const RECEIVER_EMAIL = "info@doinglight.es";
export const WEBSITE_URL = "https://doinglight.es";
export const CATALOG_REQUEST_SUBJECT = "Solicitud de catalogo Doinglight";
export const ROOF_TYPES = ["Tejado plano", "Tejado inclinado", "Tejado abuhardillado"];
export const BRAND_COLOR = "#9cc31a";
export const INTRO_DURATION_MS = 1800;
export const DRAWER_WIDTH = 280;

export const HOME_BANNER = require("../assets/home-asistente.jpg");
export const HOME_BANNER_LUXOMETRO = require("../assets/home-luxometro.jpg");
export const HOME_BANNER_CATALOGOS = require("../assets/home-catalogos.jpg");
export const HOME_BANNER_CONTACTO = require("../assets/home-contacto.jpg");
export const LUXOMETRO_BG = require("../assets/luxometro-bg.jpg");
export const DOWNLOAD_GENERAL_ES = require("../assets/downloads/ES_Catalogo_Doinglight.pdf");
export const DOWNLOAD_INDUSTRIAL_ES = require("../assets/downloads/Doinglight_Industrial.pdf");

export const DOWNLOAD_ITEMS = [
  {
    id: "catalogo-general-es",
    title: "Catalogo General",
    description: "Soluciones para viviendas, reformas y espacios interiores.",
    tag: "Residencial",
    language: "ES",
    file: DOWNLOAD_GENERAL_ES
  },
  {
    id: "catalogo-industrial-es",
    title: "Catalogo industrial",
    description: "Informacion tecnica para naves, industria y sector ganadero.",
    tag: "Industrial",
    language: "ES",
    file: DOWNLOAD_INDUSTRIAL_ES
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
export const HOME_BANNER_CONTACTO_RATIO = getAssetRatio(HOME_BANNER_CONTACTO);
