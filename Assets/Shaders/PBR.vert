#define MAX_WEIGHTS 3

// Attributes
//[att.position]//
in vec4 a_position;
//[att.normal]//
in vec3 a_normal;
//[att.joint_indices]//
in vec3 a_jointIndices;
//[att.weight]//
in vec3 a_weights;
//[att.tex_uv]//
in vec2 a_textureCoordIn;

// Uniforms
//[matrix.projection]//
uniform mat4 u_projectionMatrix;
//[matrix.view]//
uniform mat4 u_viewMatrix;
//[matrix.model]//
uniform mat4 u_modelMatrix;
//[light.matrix]//
uniform mat4 u_lightMatrix[MAX_LIGHTS];
//[light.shadow_mode]//
uniform lowp int u_shadowMode[MAX_LIGHTS];
//[light.size]//
uniform int u_lightSize;
//[light.type]//
uniform int u_lightType[MAX_LIGHTS];
//[matrix.joint]//
uniform mat4 u_jointMatrix[MAX_JOINTS];

//[matrix.skinning_mode]//
uniform lowp int u_isSkinning;


// Varying
out mediump vec3 v_eyespaceNormal;//EyespaceNormal
//out lowp vec4 v_fragPosLightSpace[MAX_LIGHTS];
out mediump vec2 v_textureCoordOut;
out mediump vec3 v_worldPosition;
//varying vec3 v_vertPosition;


//defined
const lowp float c_zero = 0.0;
const lowp float c_one = 1.0;

void main(void) {
	vec4 position_final = vec4(0.0);
	vec4 normal_final = vec4(0.0);

	//skinning
    if(u_isSkinning == 1) {
        position_final = vec4(a_position.xyz, 1.0);
    } else {
        position_final = a_position;
        normal_final = vec4(a_normal, 0);
    }


	v_eyespaceNormal = mat3(u_modelMatrix) * normal_final.xyz;
	v_textureCoordOut = a_textureCoordIn;
    v_worldPosition = vec3(u_modelMatrix * position_final);

	//vec4 vertPosition = u_modelViewMatrix * a_position;
	//v_vertPosition = vec3(vertPosition) / vertPosition.w;


    //vertex position
    gl_Position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * position_final;

}