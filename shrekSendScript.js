async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Botafogo, Botafogo
Campeão desde 1910
Foste herói em cada jogo
Botafogo, por isso é que tu és
E hás de ser nosso imenso prazer
Tradições aos milhões tens também
Tu és o glorioso, não podes perder
Perder pra ninguém

Em outros esportes, tua fibra está presente
Honrando as cores do Brasil de nossa gente
Na estrada dos louros, um facho de luz
Tua estrela solitária te conduz

Botafogo, Botafogo
Campeão desde 1910
Foste herói em cada jogo
Botafogo, por isso é que tu és
E hás de ser nosso imenso prazer
Tradições aos milhões tens também
Tu és o glorioso, não podes perder
Perder pra ninguém

Em outros esportes, tua fibra está presente
Honrando as cores do Brasil de nossa gente
Na estrada dos louros, um facho de luz
Tua estrela solitária te conduz

Existe um grande clube na cidade
Que mora dentro do meu coração
Eu vivo cheio de vaidade
Pois na realidade é um grande campeão

Nos gramados de Minas Gerais
Temos páginas heroicas e imortais
Cruzeiro, Cruzeiro querido
Tão combatido, jamais vencido!

Existe um grande clube na cidade
Que mora dentro do meu coração
Eu vivo cheio de vaidade
Pois na realidade é um grande campeão

Nos gramados de Minas Gerais
Temos páginas heroicas e imortais
Cruzeiro, Cruzeiro querido
Tão combatido, jamais vencido!

Existe um grande clube na cidade
Que mora dentro do meu coração
Eu vivo cheio de vaidade
Pois na realidade é um grande campeão

Nos gramados de Minas Gerais
Temos páginas heroicas e imortais
Cruzeiro, Cruzeiro querido
Tão combatido, jamais vencido!
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
