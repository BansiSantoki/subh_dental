export function inputClass(hasError: boolean, extra = ''): string {
  return `block w-full rounded-[14px] border bg-white px-4 text-[15px] text-[#34465A] placeholder:text-[#34465A]/40 transition-[border-color,box-shadow] duration-200 ease-silk focus:outline-none focus:ring-4 ${
    hasError
      ? 'border-[#B4483C] focus:border-[#B4483C] focus:ring-[#B4483C]/15'
      : 'border-[#E2EAF0] hover:border-[#087FAE]/40 focus:border-[#087FAE] focus:ring-[#087FAE]/15'
  } ${extra}`;
}
