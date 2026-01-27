export const get_CTL_role = ({ layoutStyle }: { layoutStyle?: string }) =>
  layoutStyle === 'banner' ? 'banner' : 'article';
