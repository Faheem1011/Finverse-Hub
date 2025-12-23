import { Object3DNode } from '@react-three/fiber';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            group: Object3DNode<THREE.Group, typeof THREE.Group>;
            mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
            planeGeometry: Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
            meshBasicMaterial: Object3DNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
            fog: Object3DNode<THREE.Fog, typeof THREE.Fog>;
            ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
            pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
            tubeGeometry: Object3DNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>;
            meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
        }
    }
}
