import {defineConfig, presetUno} from 'unocss'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
	shortcuts: [[/^wh-(.+)$/, ([, d]) => `w-${d} h-${d}`]],
	rules: [
		['pnb-bg-dark-blue', {'background-color': '#1d3c85'}],
		['pnb-dark-blue', {color: '#1d3c85'}],
		['pnb-bg-yellow', {'background-color': '#fddd04'}],
		['pnb-bg-yellow-2', {'background-color': '#ffc107', color: '#1d3c85'}],
		['pnb-bg-blue-1', {'background-color': '#2485ea', color: '#ffffff'}],
		[
			'pnb-bg-blue-1-hover',
			{'background-color': '#1d3c85', color: '#ffffff'},
		],
		['pnb-bg-blue-2', {'background-color': '#d3e7fb', color: '##2485ea'}],
		['pnb-bg-blue-3', {'background-color': 'rgb(38, 79, 176)'}],
		['pnb-bg-gray', {'background-color': '#d8d8d8'}],
		[
			'align-all-center',
			{
				display: 'flex',
				'align-items': 'center',
				'justify-content': 'center',
			},
		],
		['pnb-text-shadow', {'text-shadow': '2px 2px 5px black'}],
		['b-1-solid-black', {border: '1px solid black'}],
		['b-10-solid-blue', {'border-bottom': '20px solid rgb(38, 79, 176)'}],
		[
			'row-cart',
			{
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
			},
		],
		[
			'card-cart',
			{
				'border-radius': '5px',
				'background-color': 'white',
				'box-shadow': '0px 0px 1px 1px rgba(50, 50, 50, 0.08)',
				padding: '30px',
				margin: '20px',
				width: '100%',
				transition: 'all 0.3s ease-out',
			},
		],
		[
			'card-new-cart-title',
			{
				padding: '10px',
				transition: 'all 0.3s ease-out',
				color: '#1d3c85',
				'font-weight': '700',
			},
		],
		[
			'card-new-cart-product',
			{padding: '10px', width: '50%', transition: 'all 0.3s ease-out'},
		],
		[
			'card-new-cart-price',
			{
				padding: '10px',
				width: '15%',
				transition: 'all 0.3s ease-out',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
			},
		],
		[
			'card-new-cart-quantity',
			{
				padding: '10px',
				width: '15%',
				transition: 'all 0.3s ease-out',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
			},
		],
		[
			'card-new-cart-subtotal',
			{
				padding: '10px',
				width: '15%',
				transition: 'all 0.3s ease-out',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
			},
		],
		[
			'card-new-cart-action',
			{
				padding: '10px',
				width: '10%',
				transition: 'all 0.3s ease-out',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
			},
		],
		[
			'card-new-cart-action-delete',
			{color: 'gray', cursor: 'pointer', 'font-weight': '700'},
		],
		[
			'card-new-cart-action-delete-hover',
			{color: '#990000', cursor: 'pointer', 'font-weight': '700'},
		],
		['testeFocus', {border: '0px', 'border-bottom': '1px solid #2485ea'}],
		[
			'card-new-cart',
			{
				'border-radius': '8px',
				'background-color': 'white',
				'box-shadow': '0px 0px 1px 1px rgba(50, 50, 50, 0.08)',
				padding: '10px',
				transition: 'all 0.3s ease-out',
				// width: '70%', margin: '20px',
			},
		],
		// [
		// 	'card-new-cart-product',
		// 	{
		// 		'border-radius': '0px',
		// 		// 'background-color': 'white',
		// 		'box-shadow': '0px 0px 0px 0px rgba(50, 50, 50, 0.08)',
		// 		// padding: '10px',
		// 		// margin: '20px',
		// 		width: '40%',
		// 		transition: 'all 0.3s ease-out',
		// 	},
		// ],
		['card-cart:hover', {transform: 'translateY(-5px)', cursor: 'pointer'}],
		['card-cart p', {color: '#a3a5ae', 'font-size': '16px'}],
		['card-cart-blue', {'border-left': '3px solid #2485ea'}],
		['card-cart-yellow', {'border-left': '3px solid #ffc107'}],
		[
			'card-cart-image',
			{float: 'left', 'max-width': '64px', 'max-height': '64px'},
		],
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
	},
	presets: [
		presetAttributify({prefix: 'un-', prefixedOnly: true}),
		presetUno({}),
	],
	postprocess: util => {
		// When using border utilities, add border-width and border-style
		if (/^\.border-(.*)$/.test(util.selector)) {
			util.entries.push(
				['border-width', '1px'],
				['border-style', 'solid'],
			)
		}

		// Set default units to px instead rem
		util.entries.forEach(i => {
			const value = i[1]
			if (
				value &&
				typeof value === 'string' &&
				/^-?[.\d]+rem$/.test(value)
			) {
				i[1] = `${+value.slice(0, -3) * 4}px`
			}
		})
	},
})
