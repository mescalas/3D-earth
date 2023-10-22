import {Canvas, useLoader} from '@react-three/fiber';
import {TextureLoader} from "three";
import {useRef} from "react";
import {useScroll} from "framer-motion";
import {motion} from "framer-motion-3d";

export const Earth = () => {
    const scene = useRef(null);

    const { scrollYProgress} = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    // I can use this to smooth the animation if I don't want to use Lenis
    // const smoothAnimation = useSpring(scrollYProgress, { damping: 20 })

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/color.jpg',
        '/assets/normal.png',
        '/assets/occlusion.jpg'
    ]);

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1}/>
            <directionalLight position={[1, 0, .5]} intensity={3.5}/>
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]}/>
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
            </motion.mesh>
        </Canvas>
    )
}
