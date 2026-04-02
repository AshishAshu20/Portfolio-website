'use client';

import Image from 'next/image';
import Whatsapp from '@/public/WhatsAppW.svg';

export default function WhatsAppButton() {
  const phoneNumber = '918580666891';
  const message = encodeURIComponent(
    'Hi Ashish, I saw your portfolio and want to connect!'
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 group"
    >
      <div className="flex items-center justify-center bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        
        <Image
          src={Whatsapp}
          alt="WhatsApp"
          width={30}
          height={24}
          className="object-contain"
        />
      </div>

      <span className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-30 group-hover:opacity-50 transition"></span>
    </a>
  );
}