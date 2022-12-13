
import React from 'react';
import Particles from 'react-tsparticles';
import ParticleConfig from './Particle.config';

const ParticleBackground = () => {
    return (
        <div>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
};

export default ParticleBackground;