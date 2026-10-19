// WebGL "light field": thousands of glowing fibers that sweep down the page with the scroll.
// Ported from the Relay reference (scene.js); geometry and shaders are unchanged.

export const STRIDE = 10;

type Vec3 = [number, number, number];

export type RibbonGeometry = {
  vertices: Float32Array;
  lineCount: number;
  pointCount: number;
  pointOffset: number;
  particles: Float32Array;
  width: number;
  height: number;
  documentHeight: number;
  pageLength: number;
  strands: number;
  samples: number;
};

export type LightFieldController = {
  setMotion(enabled: boolean): void;
  destroy(): void;
};

export function ribbonPoint(t: number, strand: number, strands: number, aspect: number, pageLength: number): Vec3 {
  const angle = (strand / strands) * Math.PI * 2;
  const page = (t * pageLength) / 10;
  const smooth = (value: number) => value * value * (3 - 2 * value);
  let x: number;
  if (page < 0.68) x = 1.02 - 0.58 * smooth(page / 0.68);
  else if (page < 1.45) x = 0.44 + 0.53 * smooth((page - 0.68) / 0.77);
  else x = 0.54 + 0.43 * Math.cos(((page - 1.45) / Math.max(pageLength / 10 - 1.45, 1)) * Math.PI * 5);
  if (aspect < 1) x = 0.72 + (x - 0.5) * 0.7;
  const twist = t * Math.PI * 3.2;
  const waist = 1 - 0.72 * Math.exp(-(((page - 0.68) / 0.18) ** 2));
  const radius = (0.7 + 0.95 * (0.5 + 0.5 * Math.sin(t * 19 + 0.7))) * waist * (aspect < 1 ? 0.55 : 1);
  return [
    (x - 0.5) * aspect * 10 + Math.cos(angle + twist) * radius,
    6.5 - t * pageLength + Math.sin(angle + twist) * radius * 0.45,
    Math.sin(angle + twist) * 0.8 + Math.cos(t * 17) * 0.35,
  ];
}

function writeVertex(
  target: Float32Array,
  offset: number,
  position: ArrayLike<number>,
  color: ArrayLike<number>,
  normal: ArrayLike<number>,
  side: number,
  phase: number,
) {
  target.set(position, offset);
  target.set(color, offset + 3);
  target.set(normal, offset + 6);
  target[offset + 8] = side;
  target[offset + 9] = phase;
}

function updateParticles(geometry: RibbonGeometry, elapsed: number) {
  const { width, height, pageLength, strands, pointCount, particles } = geometry;
  for (let index = 0; index < pointCount; index += 1) {
    const seed = (index * 0.61803398875) % 1;
    const speed = 1.3 + ((index * 0.37) % 1) * 0.7;
    const t = (seed + (elapsed * speed) / pageLength) % 1;
    const position = ribbonPoint(t, index % strands, strands, width / height, pageLength);
    position[0] += Math.sin(index * 7.13) * 0.42;
    position[2] += Math.cos(index * 3.1) * 0.35;
    const color = index % 9 === 0 ? [0.6, 0.65, 1] : [1, 0.65, 0.86];
    writeVertex(particles, index * STRIDE, position, color, [0, 0], 0, index * 1.41);
  }
}

export function createRibbonGeometry({
  width,
  height,
  documentHeight,
  strands = 34,
  samples = 300,
}: {
  width: number;
  height: number;
  documentHeight: number;
  strands?: number;
  samples?: number;
}): RibbonGeometry {
  if (
    ![width, height, documentHeight, strands, samples].every((value) => Number.isFinite(value) && value > 0) ||
    strands < 2 ||
    samples < 2 ||
    !Number.isInteger(strands) ||
    !Number.isInteger(samples)
  ) {
    throw new RangeError("The light field needs positive dimensions and at least two strands and samples.");
  }

  const aspect = width / height;
  const pageLength = Math.max(documentHeight / height, 1.5) * 10 + 8;
  const lineCount = strands * samples * 6;
  const pointCount = Math.max(strands * 4, Math.ceil(pageLength / 10) * 36);
  const vertices = new Float32Array((lineCount + pointCount) * STRIDE);
  let cursor = 0;

  const write = (position: ArrayLike<number>, color: ArrayLike<number>, normal: ArrayLike<number>, side: number, phase: number) => {
    writeVertex(vertices, cursor, position, color, normal, side, phase);
    cursor += STRIDE;
  };

  // Sample-major storage keeps the visible slice contiguous for a single draw call.
  for (let sample = 0; sample < samples; sample += 1) {
    for (let strand = 0; strand < strands; strand += 1) {
      const color = strand % 9 === 0 ? [0.53, 0.59, 1] : strand % 4 === 0 ? [1, 0.82, 0.95] : [1, 0.39, 0.73];
      const t = sample / samples;
      const nextT = (sample + 1) / samples;
      const start = ribbonPoint(t, strand, strands, aspect, pageLength);
      const end = ribbonPoint(nextT, strand, strands, aspect, pageLength);
      const dx = (end[0] - start[0]) / aspect;
      const dy = end[1] - start[1];
      const length = Math.hypot(dx, dy);
      const normal = [-dy / length, dx / length];
      const phase = strand * 0.73 + t * pageLength * 0.8;
      const endPhase = strand * 0.73 + nextT * pageLength * 0.8;
      write(start, color, normal, -1, phase);
      write(start, color, normal, 1, phase);
      write(end, color, normal, -1, endPhase);
      write(end, color, normal, -1, endPhase);
      write(start, color, normal, 1, phase);
      write(end, color, normal, 1, endPhase);
    }
  }

  const geometry: RibbonGeometry = {
    vertices,
    lineCount,
    pointCount,
    pointOffset: lineCount,
    particles: vertices.subarray(lineCount * STRIDE),
    width,
    height,
    documentHeight,
    pageLength,
    strands,
    samples,
  };
  updateParticles(geometry, 0);
  return geometry;
}

const VERTEX_SHADER = `
  attribute vec3 a_position;
  attribute vec3 a_color;
  attribute vec2 a_normal;
  attribute float a_side;
  attribute float a_phase;
  uniform float u_aspect;
  uniform float u_scroll;
  uniform float u_time;
  uniform float u_width;
  uniform float u_pixel_ratio;
  uniform vec2 u_resolution;
  uniform vec2 u_pointer;
  uniform bool u_points;
  varying vec3 v_color;
  varying float v_side;
  varying float v_glimmer;
  void main() {
    vec3 point = a_position;
    point.x += sin(point.y * .3 + u_time * .4 + a_phase * .12) * .085;
    point.z += sin(point.y * .2 + u_time * .35) * .12;
    point.x += u_pointer.x * .23 * (point.z + 1.5);
    point.y += u_pointer.y * .12 * point.z;
    float depth = 5.0 + point.z;
    vec2 offset = a_normal * a_side * u_width * u_pixel_ratio / u_resolution;
    gl_Position = vec4(point.x / u_aspect + offset.x * depth, point.y + u_scroll + offset.y * depth, depth - 1.0, depth);
    gl_PointSize = (2.0 + mod(a_phase, 4.0)) * u_pixel_ratio * 7.0 / depth;
    v_color = a_color;
    v_side = a_side;
    v_glimmer = u_points ? .9 : .42 + .58 * pow(.5 + .5 * sin(a_phase - u_time * 1.6), 3.0);
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  uniform float u_opacity;
  uniform bool u_points;
  varying vec3 v_color;
  varying float v_side;
  varying float v_glimmer;
  void main() {
    float strength;
    if (u_points) {
      float distance = length(gl_PointCoord - .5);
      if (distance > .5) discard;
      strength = exp(-distance * distance * 17.0);
    } else {
      strength = exp(-v_side * v_side * 3.0) * (1.0 - smoothstep(.65, 1.0, abs(v_side)));
    }
    gl_FragColor = vec4(v_color, strength * u_opacity * v_glimmer);
  }
`;

function makeProgram(gl: WebGLRenderingContext, reportError: (message: string) => void): WebGLProgram | null {
  const shaders: WebGLShader[] = [];
  const sources: [number, string][] = [
    [gl.VERTEX_SHADER, VERTEX_SHADER],
    [gl.FRAGMENT_SHADER, FRAGMENT_SHADER],
  ];
  for (const [type, source] of sources) {
    const shader = gl.createShader(type);
    if (!shader) {
      reportError("The graphics driver could not allocate a shader.");
      shaders.forEach((item) => gl.deleteShader(item));
      return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      reportError(`Light-field shader compilation failed: ${gl.getShaderInfoLog(shader)}`);
      gl.deleteShader(shader);
      shaders.forEach((item) => gl.deleteShader(item));
      return null;
    }
    shaders.push(shader);
  }

  const program = gl.createProgram();
  if (!program) {
    reportError("The graphics driver could not allocate a program.");
    shaders.forEach((shader) => gl.deleteShader(shader));
    return null;
  }
  shaders.forEach((shader) => gl.attachShader(program, shader));
  gl.linkProgram(program);
  shaders.forEach((shader) => gl.deleteShader(shader));
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    reportError(`Light-field shader linking failed: ${gl.getProgramInfoLog(program)}`);
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

export function initLightField(
  canvas: HTMLCanvasElement,
  {
    window: view,
    document: doc,
    onStatus,
  }: { window: Window & typeof globalThis; document: Document; onStatus: (message: string) => void },
): LightFieldController {
  const backdrop = canvas.parentElement as HTMLElement;
  const fallback = (message: string): LightFieldController => {
    backdrop.dataset.renderer = "fallback";
    onStatus(message);
    return { setMotion() {}, destroy() {} };
  };
  const reportError = (message: string) => {
    view.console.error(message);
    onStatus("The 3D renderer is unavailable. The static pink illustration is active.");
  };
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "low-power", depth: false });
  if (!gl) {
    view.console.warn("WebGL is unavailable. Showing the static light-field illustration.");
    return fallback("WebGL is unavailable in this browser. The static pink illustration is active.");
  }

  let program: WebGLProgram | null = null;
  let buffer: WebGLBuffer | null = null;
  let uniforms: Record<string, WebGLUniformLocation | null> = {};
  const initializeResources = () => {
    program = makeProgram(gl, reportError);
    if (!program) return false;
    buffer = gl.createBuffer();
    if (!buffer) {
      gl.deleteProgram(program);
      program = null;
      reportError("The graphics driver could not allocate a light-field buffer.");
      return false;
    }
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const attributes: [string, number, number][] = [
      ["a_position", 3, 0],
      ["a_color", 3, 3],
      ["a_normal", 2, 6],
      ["a_side", 1, 8],
      ["a_phase", 1, 9],
    ];
    attributes.forEach(([name, size, offset]) => {
      const location = gl.getAttribLocation(program as WebGLProgram, name);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, STRIDE * 4, offset * 4);
    });
    uniforms = Object.fromEntries(
      ["aspect", "scroll", "time", "width", "pixel_ratio", "resolution", "pointer", "opacity", "points"].map((name) => [
        name,
        gl.getUniformLocation(program as WebGLProgram, `u_${name}`),
      ]),
    );
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.clearColor(0, 0, 0, 0);
    return true;
  };
  if (!initializeResources()) {
    return fallback("The graphics driver could not start the 3D renderer. The static pink illustration is active.");
  }

  let geometry: RibbonGeometry | null = null;
  let frameId = 0;
  let motion = false;
  let lost = false;
  let destroyed = false;
  let elapsed = 0;
  let previousTime: number | null = null;
  let width = 1;
  let height = 1;
  let rendered = false;
  const pointer = [0, 0];
  const pointerTarget = [0, 0];

  const draw = (timestamp: number) => {
    frameId = 0;
    if (destroyed || lost || doc.hidden || !geometry) return;
    if (motion && previousTime !== null) elapsed += Math.min(timestamp - previousTime, 100) / 1000;
    previousTime = motion ? timestamp : null;
    if (motion) {
      pointer[0] += (pointerTarget[0] - pointer[0]) * 0.12;
      pointer[1] += (pointerTarget[1] - pointer[1]) * 0.12;
    }
    updateParticles(geometry, elapsed);
    gl.bufferSubData(gl.ARRAY_BUFFER, geometry.pointOffset * STRIDE * 4, geometry.particles);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uniforms.aspect, width / height);
    const scroll = (view.scrollY / height) * 10;
    gl.uniform1f(uniforms.scroll, scroll);
    gl.uniform1f(uniforms.time, elapsed);
    gl.uniform2f(uniforms.pointer, pointer[0], pointer[1]);
    gl.uniform1i(uniforms.points, 0);

    const firstSample = Math.max(0, Math.floor(((scroll - 2) / geometry.pageLength) * geometry.samples));
    const lastSample = Math.min(geometry.samples, Math.ceil(((scroll + 15) / geometry.pageLength) * geometry.samples));
    const firstVertex = firstSample * geometry.strands * 6;
    const vertexCount = Math.max(0, lastSample - firstSample) * geometry.strands * 6;
    for (const [lineWidth, opacity] of [
      [150, 0.014],
      [52, 0.04],
      [10, 0.09],
      [1.25, 0.65],
    ]) {
      gl.uniform1f(uniforms.width, lineWidth);
      gl.uniform1f(uniforms.opacity, opacity);
      gl.drawArrays(gl.TRIANGLES, firstVertex, vertexCount);
    }
    gl.uniform1f(uniforms.width, 0);
    gl.uniform1f(uniforms.opacity, 0.55);
    gl.uniform1i(uniforms.points, 1);
    gl.drawArrays(gl.POINTS, geometry.pointOffset, geometry.pointCount);
    rendered = true;
    if (motion) frameId = view.requestAnimationFrame(draw);
  };
  const requestDraw = () => {
    if (!frameId && !destroyed && !lost && !doc.hidden) frameId = view.requestAnimationFrame(draw);
  };
  const resize = () => {
    if (lost || destroyed) return;
    const nextWidth = view.innerWidth;
    const nextHeight = view.innerHeight;
    const documentHeight = doc.documentElement.scrollHeight;
    const ratio = Math.min(view.devicePixelRatio || 1, 1.5);
    const pixelWidth = Math.round(nextWidth * ratio);
    const pixelHeight = Math.round(nextHeight * ratio);
    const geometryChanged =
      !geometry || geometry.width !== nextWidth || geometry.height !== nextHeight || geometry.documentHeight !== documentHeight;
    if (!geometryChanged && canvas.width === pixelWidth && canvas.height === pixelHeight) return;
    width = nextWidth;
    height = nextHeight;
    if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
    if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.pixel_ratio, ratio);
    if (geometryChanged) {
      geometry = createRibbonGeometry({
        width,
        height,
        documentHeight,
        strands: width < 760 ? 22 : 38,
        samples: width < 760 ? 280 : 440,
      });
      gl.bufferData(gl.ARRAY_BUFFER, geometry.vertices, gl.STATIC_DRAW);
    }
    rendered = false;
    requestDraw();
  };
  const onPointer = (event: PointerEvent) => {
    if (!motion || event.pointerType === "touch") return;
    pointerTarget[0] = event.clientX / width - 0.5;
    pointerTarget[1] = event.clientY / height - 0.5;
  };
  const onVisibility = () => {
    if (doc.hidden) {
      view.cancelAnimationFrame(frameId);
      frameId = 0;
      previousTime = null;
    } else {
      requestDraw();
    }
  };
  const onContextLost = (event: Event) => {
    event.preventDefault();
    lost = true;
    program = null;
    buffer = null;
    rendered = false;
    previousTime = null;
    view.cancelAnimationFrame(frameId);
    frameId = 0;
    view.console.warn("The WebGL context was lost. A static illustration remains available.");
    backdrop.dataset.renderer = "fallback";
    onStatus("The graphics context was reset. Static visuals are active while the 3D renderer recovers.");
  };
  const onContextRestored = () => {
    if (destroyed) return;
    if (!initializeResources()) {
      backdrop.dataset.renderer = "fallback";
      onStatus("The graphics driver could not recover. The static pink illustration remains active.");
      return;
    }
    lost = false;
    geometry = null;
    backdrop.dataset.renderer = "webgl";
    onStatus("3D graphics restored. The light field has resumed without reloading.");
    resize();
  };

  view.addEventListener("resize", resize);
  view.addEventListener("scroll", requestDraw, { passive: true });
  view.addEventListener("pointermove", onPointer, { passive: true });
  doc.addEventListener("visibilitychange", onVisibility);
  canvas.addEventListener("webglcontextlost", onContextLost);
  canvas.addEventListener("webglcontextrestored", onContextRestored);
  const observer = typeof view.ResizeObserver === "function" ? new view.ResizeObserver(resize) : null;
  observer?.observe(doc.body);
  backdrop.dataset.renderer = "webgl";
  onStatus("3D light field active. The pink fibers are rendered locally with WebGL.");
  resize();

  return {
    setMotion(enabled: boolean) {
      motion = enabled;
      previousTime = null;
      if (!enabled && rendered) {
        view.cancelAnimationFrame(frameId);
        frameId = 0;
        return;
      }
      requestDraw();
    },
    destroy() {
      destroyed = true;
      view.cancelAnimationFrame(frameId);
      observer?.disconnect();
      view.removeEventListener("resize", resize);
      view.removeEventListener("scroll", requestDraw);
      view.removeEventListener("pointermove", onPointer);
      doc.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
    },
  };
}
