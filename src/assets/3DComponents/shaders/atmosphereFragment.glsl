varying vec3 vertexNormal;
void main(){
    float intensity = pow(0.85 - dot(vertexNormal,vec3(0.0,0.0,1.0)), 2.0);
    gl_FragColor = vec4(0.8,1,1.0,1.0) * intensity;
}