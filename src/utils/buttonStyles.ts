export type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outlineLight' | 'whatsapp' | 'whatsappOutline';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
'group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.01em] whitespace-nowrap select-none transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-silk active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  primary:
  'bg-forest text-ivory hover:bg-forest-deep shadow-[0_14px_30px_-14px_rgba(23,63,58,0.7)] hover:shadow-[0_18px_36px_-14px_rgba(23,63,58,0.8)]',
  secondary: 'border border-charcoal/20 bg-white/40 text-charcoal hover:border-forest hover:bg-white hover:text-forest',
  light: 'bg-ivory text-forest hover:bg-white',
  outlineLight: 'border border-ivory/35 text-ivory hover:bg-ivory/10 hover:border-ivory/60 focus-visible:ring-ivory focus-visible:ring-offset-forest',
  whatsapp: 'bg-whatsapp text-[#073B2A] hover:bg-[#1fc05c]',
  whatsappOutline: 'border border-charcoal/15 bg-white text-charcoal hover:border-[#1fa855] hover:text-[#0d6b37]'
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-[13px]',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-7 text-[15px]'
};

export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', extra = ''): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}