export function inputClass(hasError: boolean, extra = ''): string {
  return `block w-full rounded-[14px] border bg-white px-4 text-[15px] text-charcoal placeholder:text-charcoal/40 transition-[border-color,box-shadow] duration-200 ease-silk focus:outline-none focus:ring-4 ${
  hasError ?
  'border-[#B4483C] focus:border-[#B4483C] focus:ring-[#B4483C]/15' :
  'border-charcoal/15 hover:border-charcoal/30 focus:border-forest focus:ring-forest/10'} ${
  extra}`;
}