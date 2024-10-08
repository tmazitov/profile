import mermaid from "mermaid";

class GraphProvider {
	static async draw() {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
		const graphThemeName = darkThemeMq.matches ? 'dark' : 'base'
		const cssVars = getComputedStyle(document.body)

		mermaid.initialize({ 
			startOnLoad: true,
			securityLevel: 'loose',
			theme: graphThemeName,
			themeVariables: {
				primaryColor: cssVars.getPropertyValue('--primary-color-opacity'),
				primaryBorderColor: cssVars.getPropertyValue('--primary-color-hover'),
				lineColor: cssVars.getPropertyValue('--primary-color'),
			},
		})
		await mermaid.run({
			querySelector: '.mermaid',
		})
	}

	static convertGraph(pre:HTMLElement){
		const code = pre.querySelector('code')
		if (!code || !code.classList.contains('language-mermaid'))
			return

		const chartValue = code.innerText
		pre.removeChild(code)
		pre.innerHTML = chartValue
		pre.classList.add('mermaid')
	}
}

export default GraphProvider;