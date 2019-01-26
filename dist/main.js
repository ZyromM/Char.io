/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, DataTexture3D, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, AnimationLoader, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, MeshMatcapMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, ACESFilmicToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RedFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, JSONLoader, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/js/Camera.js":
/*!**************************!*\
  !*** ./src/js/Camera.js ***!
  \**************************/
/*! exports provided: CameraManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CameraManager\", function() { return CameraManager; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ \"./src/js/const.js\");\n\n\nvar CameraManager = {\n  fov: 85,\n  aspect: _const_js__WEBPACK_IMPORTED_MODULE_1__[\"WINDOW_WIDTH\"] / _const_js__WEBPACK_IMPORTED_MODULE_1__[\"WINDOW_HEIGHT\"],\n  near: 0.1,\n  far: 1000,\n  camera: null,\n  createNewCamera: function createNewCamera(fov, aspect, near, far) {\n    if (fov) this.fov = fov;\n    if (aspect) this.aspect = aspect;\n    if (near) this.near = near;\n    if (far) this.far = far;\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](this.fov, this.aspect, this.near, this.far); //DEBUG\n\n    this.camera.position.x = 4;\n    this.camera.position.y = 4;\n    this.camera.rotation.x = 100; //\n\n    console.log(\"camera: \", this.camera);\n  },\n  setPosition: function setPosition(x, y, z) {\n    this.camera.position.set(x, y, z);\n  },\n  setRotation: function setRotation(x, y, z) {\n    this.camera.rotation.set(x, y, z);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/Camera.js?");

/***/ }),

/***/ "./src/js/Cube.js":
/*!************************!*\
  !*** ./src/js/Cube.js ***!
  \************************/
/*! exports provided: Cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cube\", function() { return Cube; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar Cube = {\n  width: 1,\n  height: 1,\n  depth: 1,\n  geometry: new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxBufferGeometry\"](1, 1, 1),\n  material: new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"](),\n  mesh: null,\n  create: function create(x, y, z) {\n    for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {\n      params[_key - 3] = arguments[_key];\n    }\n\n    if (params.width) this.width = params.width;\n    if (params.height) this.height = params.height;\n    if (params.depth) this.depth = params.depth;\n    if (params.color) this.material.color.set(params.color);\n    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](this.geometry, this.material); //console.log(\"x: \", x, \"y: \", y, \"z: \", z);\n\n    this.mesh.position.set(x, y, z);\n    return this.mesh;\n  }\n};\n\n//# sourceURL=webpack:///./src/js/Cube.js?");

/***/ }),

/***/ "./src/js/Map.js":
/*!***********************!*\
  !*** ./src/js/Map.js ***!
  \***********************/
/*! exports provided: MapBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapBuffer\", function() { return MapBuffer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Cube_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cube.js */ \"./src/js/Cube.js\");\n\n\nvar MapBuffer = {\n  map: new three__WEBPACK_IMPORTED_MODULE_0__[\"Group\"](),\n  create: function create(pos, color) {\n    this.map.name = \"map\";\n\n    for (var z = 0; pos[z]; ++z) {\n      for (var x = 0; pos[z][x]; ++x) {\n        for (var y = 0; y <= pos[z][x]; ++y) {\n          this.map.add(_Cube_js__WEBPACK_IMPORTED_MODULE_1__[\"Cube\"].create(x, y, -z, {\n            color: color\n          }));\n        }\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/js/Map.js?");

/***/ }),

/***/ "./src/js/Scene.js":
/*!*************************!*\
  !*** ./src/js/Scene.js ***!
  \*************************/
/*! exports provided: SceneManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SceneManager\", function() { return SceneManager; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar SceneManager = {\n  scene: null,\n  createNewScene: function createNewScene() {\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n  },\n  addToScene: function addToScene() {\n    if (!this.scene) {\n      console.log(\"err: scene not created!\");\n      return;\n    }\n\n    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n      params[_key] = arguments[_key];\n    }\n\n    for (var i in params) {\n      if (Array.isArray(params[i])) {\n        console.log(\"true array\");\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = params[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var k = _step.value;\n            this.scene.add(k);\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n      } else {\n        this.scene.add(params[i]);\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/js/Scene.js?");

/***/ }),

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/*! exports provided: exampleMap, Y_AXIS, X_AXIS, WINDOW_WIDTH, WINDOW_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exampleMap\", function() { return exampleMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Y_AXIS\", function() { return Y_AXIS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"X_AXIS\", function() { return X_AXIS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WINDOW_WIDTH\", function() { return WINDOW_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WINDOW_HEIGHT\", function() { return WINDOW_HEIGHT; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar exampleMap = {\n  map: [\"1111111111111\", \"1000100010001\", \"1010100100111\", \"1000110000001\", \"1110000101101\", \"1000100101111\", \"1111111111110\"]\n};\nvar Y_AXIS = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 1, 0);\nvar X_AXIS = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](1, 0, 0);\nvar WINDOW_WIDTH = window.innerWidth;\nvar WINDOW_HEIGHT = window.innerHeight;\n\n//# sourceURL=webpack:///./src/js/const.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/js/render.js\");\n/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scene.js */ \"./src/js/Scene.js\");\n/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map.js */ \"./src/js/Map.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const.js */ \"./src/js/const.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Camera */ \"./src/js/Camera.js\");\n\n\n\n\n\n\n\n\n\n\nif (WEBGL.isWebGLAvailable() === false) {\n  document.body.appendChild(WEBGL.getWebGLErrorMessage());\n} //RenderManager.setup();\n\n\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n  alpha: true\n});\nrenderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);\nrenderer.setPixelRatio(window.devicePixelRatio);\n_Scene_js__WEBPACK_IMPORTED_MODULE_2__[\"SceneManager\"].createNewScene();\n_Camera__WEBPACK_IMPORTED_MODULE_5__[\"CameraManager\"].createNewCamera();\n_Camera__WEBPACK_IMPORTED_MODULE_5__[\"CameraManager\"].camera.position.z = 10;\n_Map_js__WEBPACK_IMPORTED_MODULE_3__[\"MapBuffer\"].create(_const_js__WEBPACK_IMPORTED_MODULE_4__[\"exampleMap\"].map, '#101f69');\nvar light = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0x404040, 1);\nlight.position.set(0, 10, 0);\n_Scene_js__WEBPACK_IMPORTED_MODULE_2__[\"SceneManager\"].addToScene(_Map_js__WEBPACK_IMPORTED_MODULE_3__[\"MapBuffer\"].map, light);\ndocument.body.appendChild(renderer.domElement);\nconsole.log(\"scene: \", _Scene_js__WEBPACK_IMPORTED_MODULE_2__[\"SceneManager\"].scene); //DEBUG\n\nvar texture = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load('../res/Textures/floor.jpg');\nconsole.log(\"texture :\", texture);\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxBufferGeometry\"](1, 1, 1);\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\n  map: texture\n}); //material.color.set('#101f69')\n\nvar cube = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\ncube.position.set(0, 3, 0);\n_Scene_js__WEBPACK_IMPORTED_MODULE_2__[\"SceneManager\"].addToScene(cube);\nconsole.log(\"loader\", loader); // END DEBUG\n\nvar gridHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"GridHelper\"](1000, 20);\nconsole.log(gridHelper);\n_Scene_js__WEBPACK_IMPORTED_MODULE_2__[\"SceneManager\"].addToScene(gridHelper); //let cameraHelper = new THREE.CameraHelper(CameraManager.camera);\n//SceneManager.addToScene(cameraHelper);\n\nrenderer.render(_Scene_js__WEBPACK_IMPORTED_MODULE_2__[\"SceneManager\"].scene, _Camera__WEBPACK_IMPORTED_MODULE_5__[\"CameraManager\"].camera);\n\nvar animate = function animate() {\n  requestAnimationFrame(animate); //CameraManager.camera.matrixAutoUpdate = true;\n  //CameraManager.camera.rotation.y += 1\n  //console.log(\"y: \", CameraManager.camera.rotation.y)\n\n  renderer.render(_Scene_js__WEBPACK_IMPORTED_MODULE_2__[\"SceneManager\"].scene, _Camera__WEBPACK_IMPORTED_MODULE_5__[\"CameraManager\"].camera);\n};\n\nanimate();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/*! exports provided: RenderManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderManager\", function() { return RenderManager; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar RenderManager = {\n  renderer: null,\n  setup: function setup() {\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9); //attach render to DOM\n    //document.body.appendChild(this.renderer.domElement);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/render.js?");

/***/ })

/******/ });