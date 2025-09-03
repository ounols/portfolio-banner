// Attributes
//[att.position]//
in vec4 a_position;
//[att.normal]//
in vec3 a_normal;
//[att.tex_uv]//
in vec2 a_textureCoordIn;

// Uniforms
//[matrix.projection]//
uniform mat4 u_projectionMatrix;
//[matrix.view]//
uniform mat4 u_viewMatrix;
//[matrix.model]//
uniform mat4 u_modelMatrix;


// Varying
out mediump vec3 v_eyespaceNormal;
out mediump vec2 v_textureCoordOut;
out mediump vec3 v_worldPosition;


//defined
const lowp float c_zero = 0.0;
const lowp float c_one = 1.0;

void main(void) {
	vec4 position_final = vec4(0.0);

    position_final = vec4(a_position.xyz, 1.0);
	v_textureCoordOut = a_textureCoordIn;
    v_worldPosition = vec3(u_modelMatrix * position_final);
    mat4 result = u_projectionMatrix * u_viewMatrix * u_modelMatrix;
    v_eyespaceNormal = mat3(result) * a_normal;

    //vertex position
    gl_Position = result * position_final;
}