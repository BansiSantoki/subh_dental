export type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outlineLight' | 'whatsapp' | 'whatsappOutline';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.01em] whitespace-nowrap select-none transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-silk active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60 cursor-pointer';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[#087FAE] text-white shadow-[0_12px_24px_-10px_rgba(8,127,174,0.5)] hover:bg-[#076D96] hover:shadow-[0_16px_30px_-10px_rgba(8,127,174,0.65)]',
  secondary:
    'border border-[#E2EAF0] bg-white text-[#123B59] hover:border-[#087FAE] hover:bg-[#F2F8FC] hover:text-[#087FAE] shadow-sm',
  light:
    'bg-[#F2F8FC] text-[#123B59] hover:bg-[#DCEFF8] hover:text-[#087FAE]',
  outlineLight:
    'border border-white/40 text-white hover:bg-white/10 hover:border-white focus-visible:ring-white focus-visible:ring-offset-[#123B59]',
  whatsapp:
    'bg-[#25D366] text-white shadow-sm hover:bg-[#20ba5a]',
  whatsappOutline:
    'border border-[#25D366]/40 bg-white text-[#123B59] hover:border-[#25D366] hover:text-[#128C7E] hover:bg-[#F2F8FC]'
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-[13px]',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-7 text-[15px]'
};

export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', extra = ''): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}
