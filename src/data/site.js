export const whatsappNumber = '51999999999';

export function whatsappUrl(message = 'Hola, quiero hacer un pedido de jabones artesanales JW') {
	return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}