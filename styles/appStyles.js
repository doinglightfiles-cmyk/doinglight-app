import { StyleSheet } from "react-native";
import { BRAND_COLOR, DRAWER_WIDTH } from "../constants/appConstants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  containerHome: {
    backgroundColor: BRAND_COLOR
  },
  introContainer: {
    flex: 1,
    backgroundColor: BRAND_COLOR,
    alignItems: "center",
    justifyContent: "center"
  },
  introLogoWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    padding: 16,
    paddingTop: 18,
    paddingBottom: 44
  },
  contentWeb: {
    width: "100%",
    maxWidth: 1180,
    alignSelf: "center",
    paddingHorizontal: 24
  },
  homeContent: {
    paddingBottom: 0,
    backgroundColor: BRAND_COLOR,
    flexGrow: 1
  },
  homeContentWeb: {
    width: "100%",
    maxWidth: 1180,
    alignSelf: "center",
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#ffffff"
  },
  homeWrap: {
    width: "100%",
    backgroundColor: BRAND_COLOR
  },
  homeBannerWrapWeb: {
    backgroundColor: "#ffffff"
  },
  homeBannerPressable: {
    width: "100%",
    overflow: "hidden"
  },
  homeBannerPressableWeb: {
    borderRadius: 0
  },
  homeBanner: {
    width: "100%",
    height: undefined
  },
  homeBannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%"
  },
  homeBannerSpacer: {
    marginTop: 0
  },
  placeholderWrap: {
    paddingHorizontal: 16,
    paddingTop: 28
  },
  placeholderText: {
    color: "#6f7f5d",
    fontSize: 15
  },
  luxScreen: {
    width: "100%"
  },
  luxBackground: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#f7f5ef"
  },
  luxBackgroundWeb: {
    maxWidth: 2050,
    alignSelf: "center"
  },
  luxBgImageCover: {
    ...StyleSheet.absoluteFillObject,
    objectFit: "cover",
    objectPosition: "center center"
  },
  luxBgImageWebStage: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center"
  },
  luxBgImagePortraitWeb: {
    height: "100%",
    width: undefined
  },
  hiddenNativeCamera: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0
  },
  luxOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.03)",
    zIndex: 2
  },
  luxOverlayAbsolute: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.03)",
    zIndex: 2
  },
  luxActionLayer: {
    marginTop: -48,
    alignItems: "center"
  },
  luxButton: {
    width: 136,
    height: 136,
    borderRadius: 68,
    backgroundColor: BRAND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderTopColor: "#c8df7f",
    borderBottomColor: "#7ea118",
    borderLeftColor: "#9fc726",
    borderRightColor: "#8fb61f",
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4
  },
  luxButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.6
  },
  luxNote: {
    marginTop: 14,
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2
  },
  luxResultFloat: {
    marginTop: -96,
    paddingHorizontal: 16,
    marginBottom: 18
  },
  luxResultBox: {
    width: "100%",
    maxWidth: 540,
    alignSelf: "center",
    backgroundColor: "rgba(245,247,240,0.96)",
    borderWidth: 1,
    borderColor: "#cfd7bf",
    paddingVertical: 14,
    paddingHorizontal: 16
  },
  luxResultValue: {
    fontSize: 22,
    color: "#2f4421",
    fontWeight: "700",
    textAlign: "center"
  },
  luxResultLabel: {
    marginTop: 6,
    fontSize: 15,
    color: "#5e6c4b",
    textAlign: "center",
    fontWeight: "600"
  },
  luxResultMessage: {
    marginTop: 6,
    fontSize: 14,
    color: "#6f7f5d",
    textAlign: "center"
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 74,
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: "#f4f4f4"
  },
  headerLogo: {
    marginTop: 0
  },
  topSafeArea: {
    backgroundColor: "#f4f4f4"
  },
  menuButton: {
    position: "absolute",
    left: 16,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  leadText: {
    fontSize: 13,
    lineHeight: 18,
    color: "#6f7f5d",
    marginBottom: 18,
    textAlign: "center"
  },
  card: {
    backgroundColor: "transparent",
    borderRadius: 0,
    padding: 0,
    marginBottom: 4,
    borderWidth: 0
  },
  actionTrigger: {
    marginTop: 10,
    marginBottom: 6,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minWidth: 290
  },
  actionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7a7a7a"
  },
  sectionDivider: {
    height: 1,
    backgroundColor: "#eef1e8",
    marginVertical: 14
  },
  section: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#243515"
  },
  label: {
    marginBottom: 6,
    color: "#2f4421",
    fontWeight: "600"
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 0,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#d2dfb3",
    color: "#8f9885",
    outlineStyle: "solid",
    outlineWidth: 1,
    outlineColor: "#c9c9c9"
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  roomInput: {
    flex: 1,
    marginBottom: 0
  },
  addButton: {
    minWidth: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonText: {
    color: BRAND_COLOR,
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 28
  },
  chipsWrap: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  chip: {
    backgroundColor: "#ecf5d4",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  chipText: {
    color: "#2f461a",
    fontWeight: "600"
  },
  chipRemove: {
    color: "#5a1e1e",
    fontWeight: "800"
  },
  groupField: {
    marginBottom: 4
  },
  optionsWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8
  },
  optionButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    paddingVertical: 6,
    paddingHorizontal: 4,
    flex: 1,
    alignItems: "center"
  },
  optionSelected: {
    borderBottomWidth: 2,
    borderBottomColor: BRAND_COLOR
  },
  optionText: {
    color: "#5f6b54",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 12,
    marginTop: 4
  },
  optionTextSelected: {
    color: "#3f5518"
  },
  infoText: {
    marginTop: 8,
    color: "#2d3f20",
    textAlign: "center"
  },
  locationAddressText: {
    marginTop: 6,
    color: "#617252",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19
  },
  mapPreviewCard: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#dbe4c8",
    backgroundColor: "#f7f9f2",
    overflow: "hidden"
  },
  mapPreviewImage: {
    width: "100%",
    aspectRatio: 2.5
  },
  mapPreviewFrame: {
    width: "100%",
    height: 250,
    borderWidth: 0
  },
  mapPreviewFooter: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12
  },
  mapPreviewLabelWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1
  },
  mapPreviewLabel: {
    color: "#31451f",
    fontSize: 14,
    fontWeight: "600"
  },
  orientationHint: {
    marginTop: 4,
    color: "#7d8970",
    textAlign: "center",
    fontSize: 12,
    lineHeight: 17
  },
  headingCard: {
    marginTop: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#dbe4c8",
    backgroundColor: "#f7f9f2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 18
  },
  headingInfo: {
    minWidth: 180,
    maxWidth: 280,
    flex: 1
  },
  headingTitle: {
    color: "#617252",
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.6
  },
  headingValue: {
    marginTop: 6,
    color: "#243515",
    fontSize: 24,
    fontWeight: "700"
  },
  headingHelp: {
    marginTop: 8,
    color: "#617252",
    fontSize: 13,
    lineHeight: 19
  },
  helper: {
    marginTop: 6,
    marginBottom: 4,
    color: "#5b7246",
    fontSize: 13,
    lineHeight: 18
  },
  infoSectionWrap: {
    padding: 16,
    paddingTop: 24,
    paddingBottom: 36
  },
  sectionHeroTitle: {
    fontSize: 28,
    lineHeight: 32,
    color: "#243515",
    fontWeight: "700"
  },
  sectionHeroText: {
    marginTop: 12,
    color: "#5f6b54",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 760
  },
  infoCard: {
    marginTop: 18,
    padding: 18,
    backgroundColor: "#f4f7ee",
    borderWidth: 1,
    borderColor: "#dbe4c8"
  },
  infoCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  infoCardTitle: {
    color: "#2f4421",
    fontSize: 17,
    fontWeight: "700"
  },
  infoCardText: {
    marginTop: 10,
    color: "#5f6b54",
    fontSize: 14,
    lineHeight: 21
  },
  downloadList: {
    marginTop: 8,
    gap: 16
  },
  downloadCard: {
    marginTop: 10,
    padding: 18,
    backgroundColor: "#f4f7ee",
    borderWidth: 1,
    borderColor: "#dbe4c8"
  },
  catalogCoverFrame: {
    width: "100%",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#dbe4c8",
    backgroundColor: "#ffffff",
    marginBottom: 16
  },
  catalogCoverImage: {
    width: "100%",
    height: "100%"
  },
  downloadMetaRow: {
    marginTop: 14,
    marginBottom: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  downloadTag: {
    backgroundColor: "#e3edd0",
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  downloadTagText: {
    color: "#31451f",
    fontSize: 12,
    fontWeight: "700"
  },
  techSheetsGrid: {
    marginTop: 22,
    gap: 14
  },
  techSheetsRow: {
    flexDirection: "row",
    gap: 14
  },
  techSheetCard: {
    flex: 1,
    backgroundColor: "#f4f7ee",
    borderWidth: 1,
    borderColor: "#dbe4c8",
    padding: 10,
    gap: 10
  },
  techSheetCardSpacer: {
    flex: 1
  },
  techSheetThumb: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#e8efd9",
    borderWidth: 1,
    borderColor: "#d3dec0",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  techSheetThumbImage: {
    width: "100%",
    height: "100%"
  },
  techSheetThumbPlaceholder: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  techSheetTitle: {
    color: "#243515",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700"
  },
  pdfViewerScreen: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  pdfViewerHeader: {
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#dbe4c8",
    backgroundColor: "#f7f9f2",
    gap: 10
  },
  pdfViewerBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start"
  },
  pdfViewerBackText: {
    color: "#243515",
    fontSize: 15,
    fontWeight: "700"
  },
  pdfViewerTitle: {
    color: "#243515",
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700"
  },
  pdfViewerBody: {
    flex: 1,
    backgroundColor: "#edf1e3"
  },
  pdfViewer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#edf1e3"
  },
  pdfViewerLoading: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "rgba(255,255,255,0.85)",
    zIndex: 2
  },
  pdfViewerLoadingText: {
    color: "#5f6b54",
    fontSize: 14,
    fontWeight: "600"
  },
  pdfViewerFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24
  },
  pdfViewerFallbackText: {
    color: "#5f6b54",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center"
  },
  downloadLang: {
    borderWidth: 1,
    borderColor: "#cfd7bf",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  downloadLangText: {
    color: "#617252",
    fontSize: 12,
    fontWeight: "700"
  },
  ctaRow: {
    marginTop: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  ctaColumn: {
    marginTop: 22,
    gap: 12,
    maxWidth: 360
  },
  primaryCta: {
    minHeight: 48,
    paddingHorizontal: 18,
    backgroundColor: BRAND_COLOR,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  primaryCtaText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700"
  },
  secondaryCta: {
    minHeight: 48,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#cfd7bf",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  secondaryCtaText: {
    color: "#2f4421",
    fontSize: 14,
    fontWeight: "700"
  },
  submitButton: {
    marginTop: 14,
    backgroundColor: BRAND_COLOR,
    borderRadius: 0,
    paddingVertical: 13,
    paddingHorizontal: 18,
    alignItems: "center",
    alignSelf: "flex-start"
  },
  submitButtonDisabled: {
    opacity: 0.7
  },
  submitText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14
  },
  submitStatus: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 18,
    maxWidth: 520
  },
  submitStatusSuccess: {
    color: "#34511c"
  },
  submitStatusError: {
    color: "#a33b2c"
  },
  legalWrap: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    maxWidth: 480
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#b7b7b7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2
  },
  checkboxChecked: {
    backgroundColor: BRAND_COLOR,
    borderColor: BRAND_COLOR
  },
  checkboxMark: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14
  },
  legalText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: "#6b6b6b"
  },
  drawerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000000"
  },
  drawerOverlayTouch: {
    flex: 1
  },
  drawer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    bottom: 0,
    backgroundColor: "rgba(156,195,26,0.9)",
    paddingTop: 52,
    paddingHorizontal: 18
  },
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24
  },
  drawerItem: {
    paddingVertical: 12
  },
  drawerItemText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textTransform: "capitalize",
    fontFamily: "Arial-BoldMT"
  },
});

export default styles;
