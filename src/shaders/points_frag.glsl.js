import {ShaderChunk} from 'three';

export default /* glsl */`
uniform vec3 diffuse;
uniform float opacity;

${ShaderChunk.common}
${ShaderChunk.color_pars_fragment}
${ShaderChunk.map_particle_pars_fragment}
${ShaderChunk.fog_pars_fragment}
${ShaderChunk.logdepthbuf_pars_fragment}
${ShaderChunk.clipping_planes_pars_fragment}

void main() {

  ${ShaderChunk.clipping_planes_fragment}

  vec3 outgoingLight = vec3( 0.0 );
  vec4 diffuseColor = vec4( diffuse, opacity );

  ${ShaderChunk.logdepthbuf_fragment}
  ${ShaderChunk.map_particle_fragment}
  ${ShaderChunk.color_fragment}
  ${ShaderChunk.alphatest_fragment}

  outgoingLight = diffuseColor.rgb;

  gl_FragColor = vec4( outgoingLight, diffuseColor.a );

  ${ShaderChunk.tonemapping_fragment}
  ${ShaderChunk.encodings_fragment}
  ${ShaderChunk.fog_fragment}
  ${ShaderChunk.premultiplied_alpha_fragment}

}
`;
