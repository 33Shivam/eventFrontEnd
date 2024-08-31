import gsap from "gsap";
import React, { useEffect } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";

function Globe() {
  useEffect(() => {
    const scene = new THREE.Scene(); //create scene object
    const containerSize = document.querySelector("#right");

    const camera = new THREE.PerspectiveCamera(
      75,
      containerSize.offsetWidth / containerSize.offsetHeight,
      0.1,
      10000
    ); //create camera object
    const renderer = new THREE.WebGLRenderer({ antialias: true }); //create renderer object
    console.log(containerSize);
    renderer.setSize(containerSize.offsetWidth, containerSize.offsetHeight); //set size of renderer which is height and width of DIV
    renderer.setPixelRatio(window.devicePixelRatio); //sharpen the image
    renderer.setClearColor(0x000000, 0); // set background color to transparent

    // document.body.appendChild( renderer.domElement );//adding to HTML body

    const dummy = document.getElementById("right"); //adding to HTML body
    dummy.appendChild(renderer.domElement);

    //creating sphere and assing map texture to it
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load("/globe.jpg"),
          },
        },
      })
    ); //create sphere object with Mesh Ggeometry and Custom ShaderMaterial

    //outside atmosphere look closely
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1); //creating outside blue hue

    scene.add(atmosphere); //adding to it to scene

    //group for rotation
    const group = new THREE.Group(); //create group object
    group.add(sphere); //adding sphere
    scene.add(group); //adding group to scene

    //data points

    function createPoints(lat, lng) {
      const points = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16), // Change BoxGeometry to SphereGeometry
        new THREE.MeshBasicMaterial({
          color: "#d0cdcd",
        })
      ); //create sphere object with Mesh Ggeometry and Custom ShaderMaterial

      points.name = "pointsMains"; //name of points
      //mexico 23.6345° N, 102.5528° W
      const latitude = (lat / 180) * Math.PI;
      const longitude = (lng / 180) * Math.PI;
      const radius = 5;

      const x = radius * Math.cos(latitude) * Math.sin(longitude);
      const y = radius * Math.sin(latitude);
      const z = radius * Math.cos(latitude) * Math.cos(longitude);

      points.lookAt(0, 0, 0);

      points.position.set(x, y, z);

      group.add(points);
      points.geometry.applyMatrix4(
        new THREE.Matrix4().makeTranslation(0.18, 0.1, 0.1)
      );

      gsap.to(points.scale, {
        //scaling animation to points using gsap
        z: 1.5,
        y: 1.5,
        x: 1.5,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "linear",
        delay: Math.random() * 2,
      });
    }

    createPoints(20.5937, 78.9629); // india

    console.log(window.innerWidth, window.innerHeight);

    sphere.rotation.y = -Math.PI / 2;

    camera.position.z = 15; //set camera position to z-index of 15

    const mouse = {
      x: undefined,
      y: undefined, // intializ mosue movement to undefined
    };

    let isClicked = false;

    console.log(group.children);

    function animate() {
      requestAnimationFrame(animate);

      // Update the raycaster with the mouse coordinates
      raycaster.setFromCamera(mouseVector, camera);

      // Check for intersections
      const intersects = raycaster.intersectObjects(group.children);

      if (intersects.length > 0) {
        // yourDivElement.style.display = "block";
        console.log("intersected");
      } else {
        // If no intersection, hide the div
        // yourDivElement.style.display = "none";
      }
      //raycating Logic Ends
      renderer.render(scene, camera);
      group.rotation.y += 0.001;
      //adding rortaion to sphere Eluers angles in radians

      if (mouse.x) {
        gsap.to(group.rotation, {
          x: -mouse.y * 1.8,
          y: mouse.x * 1.8,
          duration: 1,
        });
      }
    }

    //raycating
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const rect = dummy.getBoundingClientRect();

    function onMouseMove(event) {
      // Calculate normalized device coordinates (-1 to +1) for mouse position
      // console.log(event.clientX, event.clientY);
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      mouseVector.x = (x / rect.left) * 2 - 1;

      mouseVector.y = -(y / rect.top) * 2 + 1;
    }

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", onMouseMove);

    animate();
  }, []);

  return <div id="right" style={{ width: "50vw", height: "80vh" }}></div>;
}

export default Globe;
