import {ShaderChunk} from 'three';

export default /* glsl */`
uniform float size;
uniform float scale;

${ShaderChunk.common}
${ShaderChunk.color_pars_vertex}
${ShaderChunk.fog_pars_vertex}
${ShaderChunk.morphtarget_pars_vertex}
${ShaderChunk.logdepthbuf_pars_vertex}
${ShaderChunk.clipping_planes_pars_vertex}

void main() {

  ${ShaderChunk.color_vertex}
  ${ShaderChunk.begin_vertex}
  ${ShaderChunk.morphtarget_vertex}
  ${ShaderChunk.project_vertex}

  gl_PointSize = size;

  #ifdef USE_SIZEATTENUATION

    bool isPerspective = isPerspectiveMatrix( projectionMatrix );

    if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

  #endif

  ${ShaderChunk.logdepthbuf_vertex}
  ${ShaderChunk.clipping_planes_vertex}
  ${ShaderChunk.worldpos_vertex}
  ${ShaderChunk.fog_vertex}

}
`;
