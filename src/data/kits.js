import kit2Image from '../assets/kit2.jpeg';
import kit3Image from '../assets/kit3.jpeg';
import kit4Image from '../assets/kit4.jpeg';
import kit5Image from '../assets/kit5.jpeg';
import kit6Image from '../assets/kit6.jpeg';

/**
 * Kits & Packs — combinaciones seleccionadas para regalar o abastecerte,
 * con precio de paquete inferior a la suma de barras individuales.
 *
 * `jabones`: slugs de `products` incluidos (para el detalle "incluye").
 * `precioOriginal`: suma de las barras por separado (S/10.00 c/u).
 * `precioKit`: precio del paquete. `ahorro`: diferencia, se muestra con count-up.
 * `tipo`: 'destacado' (card grande), 'estandar', 'interactivo' (Arma tu Kit).
 */
export const kits = [
	{
		slug: 'kit-precious',
		name: 'Kit Precious',
		tagline: 'Café & Avena + Aloé Vera — tu piel renovada a diario',
		image: kit2Image,
		tone: '#ece0c8',
		soap: '#9c8a6e',
		tag: 'Duo Nutritivo',
		format: '2 barras de 80 g + empaque de regalo',
		jabones: ['cafe-avena', 'aloe-vera'],
		benefits: ['Exfolia', 'Hidrata', 'Regenera'],
		precioOriginal: 20,
		precioKit: 17,
		ahorro: 3,
		tipo: 'estandar',
	},
	{
		slug: 'kit-ritual',
		name: 'Kit Ritual AM/PM',
		tagline: 'Café & Cacao por la mañana · Lavanda & Avena por la noche',
		image: kit3Image,
		tone: '#e9dac0',
		soap: '#8a6641',
		tag: 'Ritual Completo',
		format: '2 barras de 100 g',
		jabones: ['cafe-cacao', 'lavanda-avena'],
		benefits: ['Energiza', 'Relaja', 'Exfolia'],
		precioOriginal: 20,
		precioKit: 18,
		ahorro: 2,
		tipo: 'estandar',
	},
	{
		slug: 'kit-sensible',
		name: 'Kit Piel Sensible',
		tagline: 'Manzanilla & Miel + Lavanda & Avena + Aloé Vera opcional',
		image: kit4Image,
		tone: '#efe4d2',
		soap: '#d3b98c',
		tag: 'Cuidado Delicado',
		format: '2 a 3 barras de 80 g',
		jabones: ['manzanilla-miel', 'lavanda-avena', 'aloe-vera'],
		benefits: ['Calma', 'Suaviza', 'Hidrata'],
		precioOriginal: 30,
		precioKit: 26,
		ahorro: 4,
		tipo: 'estandar',
	},
	{
		slug: 'caja-premium',
		name: 'Caja Premium Regalo',
		tagline: '4 a 6 jabones surtidos en caja de madera con empaque especial',
		image: kit6Image,
		tone: '#e3d4bc',
		soap: '#b98a54',
		tag: 'Edición Regalo',
		format: '4–6 barras de 80 g + caja artesanal',
		jabones: ['cafe-avena', 'aloe-vera', 'arroz-maicena', 'lavanda-avena', 'manzanilla-miel'],
		benefits: ['Surtido', 'Premium', 'Regalo'],
		precioOriginal: 50,
		precioKit: 42,
		ahorro: 8,
		tipo: 'destacado',
	},
	{
		slug: 'caja-x12',
		name: 'Caja x12 Familiar/Mayorista',
		tagline: '12 jabones surtidos a elección para toda la familia',
		image: kit5Image,
		tone: '#e2eadf',
		soap: '#7fa88c',
		tag: 'Mayorista',
		format: '12 barras de 80 g',
		jabones: ['cafe-avena', 'cafe-cacao', 'lavanda-avena', 'menta-hierbaluisa', 'manzanilla-miel', 'aloe-vera'],
		benefits: ['Surtido', 'Ahorro', 'Familia'],
		precioOriginal: 120,
		precioKit: 88,
		ahorro: 32,
		tipo: 'estandar',
	},
];

/** Jabones elegibles para "Arma tu Kit" (3 a elección) — referencia a products. */
export const buildKitSoaps = [
	{ slug: 'cafe-avena', name: 'Café & Avena', tone: '#ece0c8', soap: '#9c8a6e' },
	{ slug: 'aloe-vera', name: 'Aloé Vera', tone: '#e8f0e2', soap: '#8fae8a' },
	{ slug: 'arroz-maicena', name: 'Arroz & Maicena', tone: '#e8e0d1', soap: '#c9b08a' },
	{ slug: 'cafe-cacao', name: 'Café & Cacao', tone: '#e9dac0', soap: '#8a6641' },
	{ slug: 'lavanda-avena', name: 'Lavanda & Avena', tone: '#eadfde', soap: '#a89aa2' },
	{ slug: 'manzanilla-miel', name: 'Manzanilla & Miel', tone: '#f4ecd8', soap: '#c9a75e' },
	{ slug: 'menta-hierbaluisa', name: 'Menta & Hierba Luisa', tone: '#e8f0e6', soap: '#7fa88c' },
];

/** Precio unitario de una barra individual (coincide con products). */
export const unitPrice = 10;

/** Precio del pack "Arma tu Kit" según cuántas barras se eligen (máx 3). */
export const buildKitPrice = (count) => {
	if (count >= 3) return 26;
	if (count === 2) return 18;
	return count * unitPrice;
};
