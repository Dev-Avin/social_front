const XSvg = (props) => (
	<svg
	  width="200"
	  height="200"
	  viewBox="0 0 200 200"
	  xmlns="http://www.w3.org/2000/svg"
	  {...props}
	>
	  <defs>
		<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
		  <stop offset="0%" style={{ stopColor: "#FF7E79", stopOpacity: 1 }} />
		  <stop offset="100%" style={{ stopColor: "#FF0000", stopOpacity: 1 }} />
		</linearGradient>
	  </defs>
	  <circle
		cx="100"
		cy="100"
		r="90"
		fill="url(#gradient)"
		stroke="#000"
		strokeWidth="5"
	  />
	  <polygon
		points="100,10 120,190 80,190"
		fill="none"
		stroke="#000"
		strokeWidth="5"
	  />
	  <line
		x1="50"
		y1="50"
		x2="150"
		y2="150"
		stroke="#000"
		strokeWidth="5"
	  />
	  <line
		x1="150"
		y1="50"
		x2="50"
		y2="150"
		stroke="#000"
		strokeWidth="5"
	  />
	</svg>
  );
  
  export default XSvg;
  