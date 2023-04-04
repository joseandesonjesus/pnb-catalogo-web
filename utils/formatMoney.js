export default function formatMoney(value) {
	 try { return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }catch{ return 0 }
}
