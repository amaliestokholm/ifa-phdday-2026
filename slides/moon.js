// https://globe.gl/example/moon-landing-sites/index.html
import { scaleOrdinal } from 'https://esm.sh/d3-scale';

const colorScale = scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);

const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

window.addEventListener("load", () => {
	const element = document.getElementById('globeViz');
	if (element != null) {
		const moon = new Globe(element)
			.globeImageUrl('./slides/moon/lunar_surface.jpg')
			.bumpImageUrl('./slides/moon/lunar_bumpmap.jpg')
			.backgroundImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
			.showGraticules(true)
			.showAtmosphere(false) // moon has no atmosphere
			.labelText('label')
			.labelSize(1.7)
			.labelDotRadius(0.4)
			.labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
			.labelColor(d => colorScale(d.agency))
			.labelLabel(d => `
	<div><b>${d.label}</b></div>
	<div>${d.agency} - ${d.program} Program</div>
	<div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
	`)
			.onLabelClick(d => window.open(d.url, '_blank'));

		fetch('./slides/moon/moon_landings.json').then(r => r.json()).then(landingSites => {
			moon.labelsData(landingSites);
		});
	}
});
