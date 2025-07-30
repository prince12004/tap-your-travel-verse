export const sendToWhatsApp = (searchData: any) => {
  const message = `Hi! I'm looking for travel options with the following details:

📍 Destination: ${searchData.destination || 'Not specified'}
✈️ Departure: ${searchData.departure || 'Flexible'}
🏨 Check-in: ${searchData.checkin || 'Flexible'}
🏨 Check-out: ${searchData.checkout || 'Flexible'}
👥 Guests: ${searchData.guests || '1'}

Please help me find the best options for my trip!`;

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const sendDestinationToWhatsApp = (destination: any) => {
  const message = `Hi! I'm interested in visiting ${destination.name}, ${destination.country}.

Details:
💰 Starting price: ${destination.price}
⭐ Rating: ${destination.rating}/5
🌟 Highlights: ${destination.highlights.join(', ')}

${destination.description}

Please provide more information and help me plan this trip!`;

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};