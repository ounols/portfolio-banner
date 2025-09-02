#define MAX_WEIGHTS 3

// Attributes
//[att.position]//
in vec4 a_position;
//[att.joint_indices]//
in vec3 a_jointIndices;
//[att.weight]//
in vec3 a_weights;

// Uniforms
//[matrix.projection]//
uniform mat4 u_projectionMatrix;
//[matrix.view]//
uniform mat4 u_viewMatrix;
//[matrix.model]//
uniform mat4 u_modelMatrix;
//[matrix.joint]//
uniform mat4 u_jointMatrix[MAX_JOINTS];
//[matrix.skinning_mode]//
uniform lowp int u_isSkinning;

// WebGL compatibility function for joint matrix access
mat4 getJointMatrix(int index) {
	if(index == 0) return u_jointMatrix[0];
	if(index == 1) return u_jointMatrix[1];
	if(index == 2) return u_jointMatrix[2];
	if(index == 3) return u_jointMatrix[3];
	if(index == 4) return u_jointMatrix[4];
	if(index == 5) return u_jointMatrix[5];
	if(index == 6) return u_jointMatrix[6];
	if(index == 7) return u_jointMatrix[7];
	if(index == 8) return u_jointMatrix[8];
	if(index == 9) return u_jointMatrix[9];
	return u_jointMatrix[0];
}

void main() {
    vec4 position_final = vec4(0.0);

    //skinning
    if(u_isSkinning == 1) {
        vec4 totalNormal = vec4(0.0);

        for(int i=0; i<MAX_WEIGHTS; i++) {
            mat4 jointTransform = getJointMatrix(int(a_jointIndices[i]));
            vec4 posePosition = jointTransform * a_position;
            position_final += posePosition * a_weights[i];
        }
        position_final = vec4(position_final.xyz, 1.0);
    } else {
        position_final = a_position;
    }

    gl_Position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * position_final;
}