'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '+919876543210';
  const url = `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20PP%20bags%20and%20packaging%20solutions.`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
