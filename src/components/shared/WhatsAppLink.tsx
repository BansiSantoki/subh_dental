import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { whatsappUrl } from '../../utils/whatsapp';
import { buttonClass, type ButtonSize, type ButtonVariant } from '../../utils/buttonStyles';

interface WhatsAppLinkProps {
  message?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Extra context for screen readers, e.g. the treatment name. */
  srContext?: string;
}

export function WhatsAppLink({
  message,
  children,
  variant = 'whatsapp',
  size = 'md',
  className = '',
  srContext
}: WhatsAppLinkProps) {
  const iconColor = variant === 'whatsappOutline' || variant === 'secondary' ? 'text-[#1FA855]' : '';
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass(variant, size, className)}>
      
      <WhatsAppIcon className={`h-[18px] w-[18px] shrink-0 ${iconColor}`} />
      <span>{children}</span>
      <span className="sr-only">
        {srContext ? ` about ${srContext}` : ''} (opens WhatsApp in a new tab)
      </span>
    </a>);

}