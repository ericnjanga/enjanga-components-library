export type VT_assetType = {
  url?: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  contentType?: string;
};

export type VT_propsType = {
  title: string;
  hasPosterImage: boolean;
  hasVideo: boolean;
  posterAsset: VT_assetType;
  videoAsset: VT_assetType;
  businessDomains: string[];
  stackValues: string[];
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  caseStudyHref?: string;
  ariaLabel?: string;
};
