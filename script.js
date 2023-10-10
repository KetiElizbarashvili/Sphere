// shekmna
var scene = new THREE.Scene();

// view
var fov = 75;
// aspect ratio -mtliani width height is gamokeneba
var aspect = window.innerWidth / window.innerHeight;
// setup plain
var near = 0.1; // cina clipping plane
var far  = 1000; // ukana clipping plane
// axlis shekmna
var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

//axali WebGLRenderer obiektis
var renderer = new THREE.WebGLRenderer();
// zomis dakeneba
// dabal rezoluciaze zoma (ie window.innerWidth / 2 
// panjara / 2 would result in HALF the resolution)
renderer.setSize( window.innerWidth, window.innerHeight );
// darendereba
document.body.appendChild( renderer.domElement );

// dimensionebis dakeneba
var radius = 2;
var widthSegments = 100;
var heightSegments = 100;

var geometry = new THREE.SphereGeometry( radius, widthSegments, heightSegments );
var material = new THREE.MeshBasicMaterial( { color: 0x2980b9, wireframe: true } );
var sphere     = new THREE.Mesh( geometry, material );

scene.add( sphere );
camera.position.z = 5;

// ak ukve renderis punkciis shekmna
function render(){
	requestAnimationFrame( render );
	// rotaciis logika
	sphere.rotation.y += 0.05;
	sphere.rotation.x += 0.05;
	renderer.render( scene, camera );
}
// gamodzaxeba 
render(); 