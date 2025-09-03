precision highp float;
precision highp int;


//Uniforms
//[texture.albedo]//
uniform sampler2D u_sampler_albedo;

//[vec3.camera]//
uniform vec3 u_cameraPosition;


//Varying
in mediump vec2 v_textureCoordOut;
in mediump vec3 v_worldPosition;
in mediump vec3 v_eyespaceNormal;
out vec4 FragColor;

//Defined
const lowp vec3 Z = vec3(0.0, 0.0, -1.0);
const lowp vec4 ONE = vec4(1.0, 1.0, 1.0, 1.0);
const float PI = 3.14159265359;

void main(void) {

	float normal_scalar = dot(Z, v_eyespaceNormal);
	vec2 uv = v_textureCoordOut;
	float sdf_time = 0.41;
	if(normal_scalar > -0.0002) {
		uv.x = 1.0 - uv.x;
		sdf_time = 0.0;
	}
	float sdf = texture(u_sampler_albedo, uv).r;

	if(sdf < sdf_time) discard;
	float blurRadius = 0.3;
	float edge = 0.41 + blurRadius;
	sdf = pow(smoothstep(0.41 - blurRadius, edge, sdf), 2.0);
	FragColor = normal_scalar > -0.0002? vec4(sdf, sdf,sdf, 1.0) : ONE;

}
