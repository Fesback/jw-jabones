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
 *
 * Copy de contenido provisional (descripción, idealPara, comoUsar,
 * precauciones, detalles): pendiente de validación con el cliente.
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
		category: 'Kits & Packs',
		description:
			'El dueto esencial para una piel que se renueva sola. El Café & Avena abre la ducha exfoliando con suavidad y despertando la circulación, mientras que el Aloé Vera cierra el cuidado hidratando y calmando en profundidad. Juntos funcionan como un par: uno limpia y reactiva, el otro repara y sella. Pensado para quien quiere una sola decisión al día y dos jabones que nunca se cansan entre sí.',
		idealPara: [
			'Piel normal, mixta o seca que necesita exfoliación suave',
			'Rutina diaria de una sola pasada por la mañana',
			'Quien busca su primer kit sin gastar de más',
		],
		comoUsar: [
			'Usa el Café & Avena dos o tres veces por semana para renovar la piel.',
			'Alterna con el Aloé Vera los días de descanso o en época de calor.',
			'Deja siempre la barra sobre una jabonera con drenaje para conservarla.',
		],
		precauciones: [
			'Uso exclusivamente externo.',
			'Evita el contacto con los ojos; en caso de contacto, enjuaga con agua limpia.',
			'No uses el Café & Avena sobre piel irritada, recién depilada o con heridas abiertas.',
			'Suspende su uso si notas cualquier signo de irritación o alergias nuevas.',
		],
		detalles: [
			{ label: 'Contenido', value: '2 barras de 80 g' },
			{ label: 'Peso total', value: '160 g' },
			{ label: 'Ahorro', value: 'S/ 3.00 frente a compra individual' },
			{ label: 'Curado', value: '4 a 6 semanas antes del envío' },
			{ label: 'Empaque', value: 'Bolsa kraft + etiqueta ilustrada' },
			{ label: 'Entrega', value: 'Lima 24-48 h · Nacional 3-5 días' },
		],
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
		category: 'Kits & Packs',
		description:
			'Dos jabones, dos momentos del día. Por la mañana, el Café & Cacao despierta la piel y la mente con su aroma tostado y su exfoliación activante. Por la noche, la Lavanda & Avena baja las revoluciones: aroma floral, espuma cremosa y una sensación de calma que acompaña hasta el descanso. El ritual completo en una sola caja, con barras más grandes para que duren.',
		idealPara: [
			'Rutinas AM/PM: un jabón para empezar y otro para cerrar el día',
			'Piel que pide vitalidad por la mañana y descanso por la noche',
			'Buscas exfoliar de forma constante sin irritar la piel',
		],
		comoUsar: [
			'Por la mañana, frota el Café & Cacao sobre piel húmeda y massagea 30 segundos.',
			'Por la noche, usa la Lavanda & Avena y deja actuar unos minutos antes de enjuagar.',
			'Alterna según tu estado de ánimo; el orden importa menos que la constancia.',
		],
		precauciones: [
			'Uso exclusivamente externo.',
			'Evita el contacto con los ojos; en caso de contacto, enjuaga con agua limpia.',
			'El aroma a café es intenso: si prefieres un ritual sutil, empieza por la Lavanda & Avena.',
			'Guarda las barras en lugares secos y separadas para que no se toquen entre sí.',
		],
		detalles: [
			{ label: 'Contenido', value: '2 barras de 100 g' },
			{ label: 'Peso total', value: '200 g' },
			{ label: 'Ahorro', value: 'S/ 2.00 frente a compra individual' },
			{ label: 'Curado', value: '4 a 6 semanas antes del envío' },
			{ label: 'Empaque', value: 'Caja de cartón con separadores' },
			{ label: 'Entrega', value: 'Lima 24-48 h · Nacional 3-5 días' },
		],
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
		category: 'Kits & Packs',
		description:
			'Para quienes reaccionan con facilidad ante casi todo. La Manzanilla & Miel es el calmante por excelencia: suaviza, alivia el enrojecimiento y deja la piel cetiosa. La Lavanda & Avena aporta espuma protectora y un aroma que ayuda a bajar el estrés, y el Aloé Vera queda como reserva para los días en que la piel pide calma extra. Tres jabones de fórmula amable para construir una rutina sin sobresaltos.',
		idealPara: [
			'Piel sensible, reactiva o con tendencia a la rojez',
			'Piel seca o escamosa que se resiente con productos agresivos',
			'Primer contacto con jabón artesanal, o un periodo de prueba sin riesgos',
		],
		comoUsar: [
			'Empieza con la Manzanilla & Miel hasta que tu piel se acostumbre (una semana).',
			'Si la piel responde bien, incorpora la Lavanda & Avena en la rutina nocturna.',
			'Deja siempre la espuma actuar unos minutos antes de enjuagar con agua tibia.',
		],
		precauciones: [
			'Uso exclusivamente externo.',
			'Evita el contacto con los ojos; en caso de contacto, enjuaga con agua limpia.',
			'Prueba primero en una zona pequeña si tienes alergias conocidas o piel reactiva.',
			'Haz una prueba de patch antes del primer uso completo.',
		],
		detalles: [
			{ label: 'Contenido', value: '3 barras de 80 g' },
			{ label: 'Peso total', value: '240 g' },
			{ label: 'Ahorro', value: 'S/ 4.00 frente a compra individual' },
			{ label: 'Curado', value: '4 a 6 semanas antes del envío' },
			{ label: 'Empaque', value: 'Caja de cartón con separadores' },
			{ label: 'Entrega', value: 'Lima 24-48 h · Nacional 3-5 días' },
		],
		nota:
			'El Aloé Vera viene como tercera barra incluida. Si prefieres el kit de 2 barras, escríbenos por WhatsApp y ajustamos el pedido.',
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
		category: 'Kits & Packs',
		description:
			'La caja que se regala y no se devuelve. Cinco jabones surtidos de la línea completa, acomodados en caja artesanal con separadores, papel tissue y una tarjeta escrita a mano con tu dedicatoria. Es el formato pensado para cumpleaños, aniversarios, matrimonios y fechas corporativas: un regalo útil, bonito y con el descuento de paquete ya aplicado.',
		idealPara: [
			'Regalos de cumpleaños, aniversarios o fechas especiales',
			'Empresas que buscan un presente para su equipo o clientes',
			'Quien quiere descubrir toda la línea sin elegir un solo jabón',
		],
		comoUsar: [
			'Cada barra funciona de manera independiente: regálalas o quédatelas.',
			'Para la experiencia completa, empieza por la exfoliante y termina con la calmante.',
			'Indícanos por WhatsApp los jabones preferidos y armamos la caja a tu medida.',
		],
		precauciones: [
			'Uso exclusivamente externo.',
			'Evita el contacto con los ojos; en caso de contacto, enjuaga con agua limpia.',
			'Mantén la caja cerrada y en lugar seco para proteger las barras durante el traslado.',
			'Suspende su uso si notas cualquier signo de irritación.',
		],
		detalles: [
			{ label: 'Contenido', value: '5 barras de 80 g surtidas' },
			{ label: 'Peso total', value: '400 g' },
			{ label: 'Ahorro', value: 'S/ 8.00 frente a compra individual' },
			{ label: 'Curado', value: '4 a 6 semanas antes del envío' },
			{ label: 'Empaque', value: 'Caja artesanal + separadores + tarjeta escrita' },
			{ label: 'Entrega', value: 'Lima 24-48 h · Nacional 3-5 días' },
		],
		nota:
			'El surtido se arma según disponibilidad del lote. Podemos adaptarlo a tus preferencias si nos escribes antes de confirmar el pedido.',
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
		category: 'Kits & Packs',
		description:
			'Doce barras surtidas a elección, la mejor relación precio por jabón del catálogo. Cada persona de la casa puede tener el suyo: exfoliante para quien lo necesita, calmante para la piel sensible, refrescante para los días de calor. Pensado también para negocios: spas, peluquerías, hostales y clubes que necesitan reposición constante con el mejor precio por barra.',
		idealPara: [
			'Hogares de tres o más personas',
			'Spas, peluquerías, hostales y clubes que necesitan reposición continua',
			'Quien ya conoce la línea y quiere repetir sin decidir barra por barra',
		],
		comoUsar: [
			'Reparte las barras por miembro de la familia o por tipo de piel.',
			'Para uso profesional, puedes rotar el surtido según la demanda de tu negocio.',
			'Pedidos de más de 24 barras se atienden por WhatsApp con precio por volumen.',
		],
		precauciones: [
			'Uso exclusivamente externo.',
			'Evita el contacto con los ojos; en caso de contacto, enjuaga con agua limpia.',
			'Almacena las barras en un lugar seco y ventilado, separadas entre sí.',
			'Suspende su uso si notas cualquier signo de irritación.',
		],
		detalles: [
			{ label: 'Contenido', value: '12 barras de 80 g a elección' },
			{ label: 'Peso total', value: '960 g' },
			{ label: 'Ahorro', value: 'S/ 32.00 frente a compra individual' },
			{ label: 'Precio por barra', value: 'S/ 7.33' },
			{ label: 'Empaque', value: 'Caja de cartón con separadores' },
			{ label: 'Entrega', value: 'Lima 24-48 h · Nacional 3-5 días' },
		],
		nota:
			'El surtido base incluye seis referencias; los seis jabones restantes se eligen entre los disponibles del lote. Para pedidos mayoristas escribinos por WhatsApp.',
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
